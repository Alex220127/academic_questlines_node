module.exports = class Repository {
  constructor (model) {
    this.model = model
  }

  save (data) {
    return this.model.create(data)
  }

  get (query, projection, options) {
    return this.model.findOne(query, projection, options)
  }

  list (query, projection, options) {
    return this.model.find(query, projection, options)
  }

  count (query) {
    return this.model.countDocuments(query)
  }

  update (query, update) {
    return this.model.updateOne(query, update)
  }

  delete (query) {
    return this.model.deleteOne(query)
  }
}
