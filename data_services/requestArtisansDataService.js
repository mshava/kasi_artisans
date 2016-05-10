const Promise = require("bluebird");

const QueryService = require('../data_services/query-services');

module.exports = function(connection) {
  const queryService = new QueryService(connection);
    this.showArtisan = function() {
      return queryService.executeQuery('select * FROM artisans');

    };
};
