module.exports = {
  mongoURI: `mongodb://${process.env.MONGO_DB_USER}:${
    process.env.MONGO_DB_PASSWORD
  }@${process.env.MONGO_DB_URI}`
};
