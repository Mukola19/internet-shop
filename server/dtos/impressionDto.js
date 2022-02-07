module.exports = class ImpressionDto {
  id
  advantages
  description
  shortcomings
  rate
  email
  deviceId
  createdAt

  constructor(model, email) {
    this.id = model.id
    this.advantages = model.advantages
    this.description = model.description
    this.shortcomings = model.shortcomings
    this.rate = model.rate
    this.email = email
    this.deviceId = model.deviceId
    this.createdAt = model.createdAt
  }
}
