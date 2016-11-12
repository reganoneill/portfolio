(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* TODO: Use your DOM skills to reveal only the about section! */
    //MAKE SURE THIS WORKS...
    $('#projects').hide();
    $('#stats').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);
