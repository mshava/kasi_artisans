exports.show = function(req, res, next) {
  req.getServices()
    .then(function(services) {
      const artisansDataService = services.artisansDataService;
      console.log(services.artisansDataService.showArtisan());
      const id = req.params.id;
      artisansDataService.showArtisan()
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
