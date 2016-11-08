(function(module) {
  var projectController = {};

  projectController.reveal = function() {
    /* TODO: Use your DOM skills to reveal only the articles section! */
    // MAKE SURE THIS WORKS...IT DOESNT RN
    $('#about').hide();
    $('#articles').show();
  };

  module.projectController = projectController;
})(window);
