const Promise = require("bluebird");

const QueryService = require('../data_services/query-services');

module.exports = function(connection) {
  const queryService = new QueryService(connection);
    this.addArtisans = function(data) {
      console.log(data);
        return queryService.executeQuery('INSERT INTO artisans SET ?', data);
    }

};
