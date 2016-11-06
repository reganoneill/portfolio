(function(module) {
  var aboutView = {};
  var siteMenu = {};
  var projectView = {};

  projectView.renderProjects = function(){
    //new method which uses the .toHtml method to load particular Handlebars.js
    //scripts and then append them to particular elements
    MyProject.allArticles.forEach(function(a) {
      //$('#articles').append(a.toHtml($('#article-template')));
      $('#projects').append(a.toHtml($('#project-section-template')));
    });
  };
  //this handles the nav menu inside .main-nav
  aboutView.handleNavMenu = function(){
    $('.main-nav').on('click', '.tab', function() {
      $('.tab-content').hide();
      $('.nav-overlay').hide();
      var $idContent = $(this).data().content;
      console.log($idContent);
      $('#' + $idContent).fadeIn();
    });
  };
  siteMenu.showMenu = function(){
    $('.main-nav').on('mouseover', function(){
      $('.nav-overlay').show();
    });
  };
  MyProject.fetchAll(projectView.renderProjects);
  //This (below) doesn't do anything YET.
  //when a project section is clicked, the other projects are hidden and the
  //clicked on item is displayed in the containing space with additional elements
  // projectView.showProject = function(){
  //   //create click event on specific project
  //   $('#project').on('click', '.tab', function(){
  //     //hide all children of #project, then show the parent element
  //     //of the .tab element which was clicked
  //     $('#parent').children().hide();
  //     console.log('running');
  //   });
  // };
  siteMenu.showMenu();
  aboutView.handleNavMenu();
})(window);
