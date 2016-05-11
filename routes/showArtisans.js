exports.show = function(req, res, next) {
  req.getServices()
    .then(function(services) {
      const artisansDataService = services.artisansDataService;
      //console.log(artisansDataService.showArtisan());
      artisansDataService.showArtisan()
          .then(function(artisans) {
            console.log(artisans);
            res.render('show-artisans', {
              artisans : artisans
            })
          })
      })
    .catch(function(error){
      next(error);
    });
};
