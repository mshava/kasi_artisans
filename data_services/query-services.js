const Promise = require('bluebird');

module.exports = function(connection) {
    this.executeQuery = function(query, params) {
      return new Promise(function(resolve, reject) {
          params = params || {};
          connection.query(query, params, function(error, results) {
            if (error) return reject(error);
            resolve(results);
          });
      });
    };

};
