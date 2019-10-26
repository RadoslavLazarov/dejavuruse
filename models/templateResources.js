/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable quote-props */

const { categoriesModel } = require('./dbModels');
const pageHelper = require('../scripts/helpers/galleryHelpers');

/* */
class TemplateResources {
  constructor(url) {
    this.url = url;
  }

  /**
 * According to the URL, controller resources are obtained
 * @returns {Object} an object that contains rosources for current page
 */
  async getControllerResources() {
    const controller = await categoriesModel.findOne({ id: this.url.controller });
    return controller;
  }

  /**
 * According to the URL, page resources are obtained
 * @returns {Object} an object that contains rosources for current page
 */
  async getPageResources() {
    const getCategories = await categoriesModel.find().select('id -_id');
    const controller = getCategories.find(category => category.id === this.url.controller);
    let categories;
    let pageResources;

    if (controller) {
      categories = await categoriesModel.findOne({ id: this.url.controller });
      pageResources = categories;

      if (this.url.controller === 'gallery' && this.url.currentPage !== this.url.controller) {
        const getGalleryResources = await pageHelper.galleryResources(this.url);
        pageResources = getGalleryResources;
      }
    } else {
      pageResources = await categoriesModel.findOne({ id: 'home' });
    }

    return pageResources;
  }

  /**
 * @returns {Object} an object that contains rosources for header
 */
  static async getNavCategories() {
    const mainCategories = {};

    mainCategories.left = await categoriesModel.find(
      { showOnHeader: true, navPosition: 'left' }, null, { sort: { priority: 1 } },
    );
    mainCategories.right = await categoriesModel.find(
      { showOnHeader: true, navPosition: 'right' }, null, { sort: { priority: 1 } },
    );
    mainCategories.contacts = await categoriesModel.findOne(
      { id: 'contacts' },
    ).select('content');

    mainCategories.headerContacts = [];
    mainCategories.contacts.content.contacts.forEach((contact) => {
      if (contact.showOnHeader) {
        mainCategories.headerContacts.push(contact);
      }
    });

    mainCategories.headerSocials = [];
    mainCategories.contacts.content.socials.forEach((social) => {
      if (social.showOnHeader) {
        mainCategories.headerSocials.push(social);
      }
    });

    return mainCategories;
  }

  /**
 * @returns {Object} an object that contains footer pages
 */
  static async getFooterPages() {
    let footerPages = {};

    footerPages = await categoriesModel.find(
      { showOnFooter: true }, null, { sort: { priority: 1 } },
    );

    return footerPages;
  }
}

module.exports = TemplateResources;
