exports.add = function(req, res, next) {
  var artisans_id = req.params.id;
    req.getServices()
      .then(function(services) {
          var data = {
              name : req.body.name,
              contacts : req.body.contacts,
              address : req.body.address,
              type : req.body.type
            };
            console.log(req.body.name);
            const addArtisansDataServices = services.addArtisansDataServices;
              addArtisansDataServices.addArtisans(data)
                .then(function(results) {
                  res.redirect('/add-artisans')
                });
      })
      .catch(function(error){
        next(error)
      });
};
