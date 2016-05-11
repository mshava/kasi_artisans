exports.add = function(req, res, next) {
  var id = req.params.id;
    req.getServices()
      .then(function(services) {
          var data = {
              name : req.body.name,
              contact : req.body.contact,
              address : req.body.address,
              type : req.body.type
            };
            const addArtisansDataServices = services.addArtisansDataServices;
              addArtisansDataServices.addArtisans(data)
                .then(function(results) {
                  res.render('add-artisans')
                });
      })
      .catch(function(error){
        next(error)
      });
};
