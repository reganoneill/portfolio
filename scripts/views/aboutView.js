(function(module) {
  var aboutView = {};
  var siteMenu = {};
  var projectView = {};

  projectView.renderProjects = function(){
    //new method which uses the .toHtml method to load particular Handlebars.js
    //scripts and then append them to particular elements
    MyProject.allArticles.forEach(function(a) {
      //$('#articles').append(a.toHtml($('#article-template')));
      $('.project-summary').append(a.toHtml($('#project-section-template')));
      /////11.7 attempting to add new section
      $('.project-details').append(a.toHtml($('#project-detail-template')));
    });
  };

  //allows detailed summary of project
  projectView.handleProjectDetailedView = function(){
   //write on 'click' function to display particular project detail
    $('.project-summary').on('click', 'article', function(a){
      a.preventDefault();
      console.log($(this).data('cat'));
      $('article[data-title="'+ $(this).data('cat') +'"]').toggle();
    });
  };

  //show the nav-overlay menu when the icon is moused-over
  siteMenu.showMenu = function(){
    $('.main-nav').on('mouseover', function(){
      $('.nav-overlay').show();
    });
    siteMenu.hideMenu();
  };

  //writing new function to get out of .nav-overlay once it's showing
  //it will be called inside the showMenu method
  siteMenu.hideMenu = function(){
    $('.nav-overlay').on('click', function(){
      $(this).hide();
    });
  };
  MyProject.fetchAll(projectView.renderProjects);
  siteMenu.showMenu();
  projectView.handleProjectDetailedView();
})(window);
