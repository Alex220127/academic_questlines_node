exports.execute = (page, limit, count, docs) => {
  return {
    paginate: {
      page,
      limit,
      count,
      pages: Math.ceil(count / limit)
    },
    docs
  }
}
