class Airbyte {
  constructor() {
    this.data = null;
  }

  extractData(source) {
    // Implement the logic to extract data from the source
    this.data = source.getData();
  }

  loadData(postgreSQL) {
    // Implement the logic to load data into PostgreSQL
    postgreSQL.storeData(this.data);
  }
}

module.exports = Airbyte;
