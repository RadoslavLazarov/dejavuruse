let lang;

const getCurrentLocale = (cookie) => {
  lang = cookie;
};

const locale = () => lang;

module.exports = {
  getCurrentLocale,
  locale,
};
