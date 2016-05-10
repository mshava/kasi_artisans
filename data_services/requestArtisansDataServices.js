const QueryService = require('../data_services/query-services');

module.exports = function() {
  const queryService = new QueryService(connection);
    this.showArtisans = function() {
      return queryService.executeQuery('select * FROM artisans');

    };
};
