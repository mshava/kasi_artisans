const QueryService = require('../data_services/query-service');
const Promise = require('bluebird');
const showArtisansDataServices = require('../data_services/showArtisansDataServices');

module.exports = function(connection) {
    const queryService = new QueryService(connection);
    const sdql = new showArtisansDataServices(connection);

    this.showArtisans = function(id) {
      return QueryService.executeQuery('select * from artisans where id = ?', id);
    };
    
};
