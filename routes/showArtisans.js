exports.show = function(req, res, next) {
  req.getServices()
    .then(function(services) {
      const showArtisansDataService = services.showArtisansDataService;
      console.log(services);
      const id = req.params.id;
        showArtisansDataService.showArtisan()
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
