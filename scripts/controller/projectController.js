(function(module) {
  var projectController = {};

  projectController.reveal = function() {
    /* TODO: Use your DOM skills to reveal only the articles section! */
    // MAKE SURE THIS WORKS...IT DOESNT RN
    $('#about').hide();
    $('#stats').hide();
    // $('#home').show();
    $('#projects').show();
  };

  module.projectController = projectController;
})(window);
