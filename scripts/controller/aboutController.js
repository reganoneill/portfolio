(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* TODO: Use your DOM skills to reveal only the about section! */
    //MAKE SURE THIS WORKS...IT DOESN'T RN
    $('#articles').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);
