exports.show = function(req, res, next) {
  req.getServices()
    .then(function(services) {
      const showArtisansDataServices = services.showArtisansDataServices;
      console.log(services);
      const id = req.params.id;
        showArtisansDataServices.showArtisans()
          .then(function(artisans) {
            res.render('show-artisans', {
              artisans : artisans
            })
          })
    })
    .catch(function(error){
      next(error);
    });
};
