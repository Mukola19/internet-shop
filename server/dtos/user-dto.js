module.exports = class UserDto {
  email
  id
  isActivated
  admin
  client

  constructor(model) {
    this.id = model.id
    this.email = model.email
    this.isActivated = model.isActivated
    this.admin = model.roles.admin
    this.client = model.roles.client
 
  }
}
