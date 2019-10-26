/* */
class Credentials {
  constructor(id, credentialsModel) {
    this.id = id;
    this.credentialsModel = credentialsModel;
  }

  async findCredentials() {
    const credential = await this.credentialsModel.findOne({ id: this.id });
    return credential;
  }
}

module.exports = Credentials;
