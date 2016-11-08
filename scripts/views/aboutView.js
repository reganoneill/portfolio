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
    // $('.project-detail').hide();
   //write on 'click' function to display particular project detail
    $('.project-summary').on('click', 'article', function(a){
      a.preventDefault();
      console.log($(this).data('cat'));
      $('article[data-title="'+ $(this).data('cat') +'"]').toggle();
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
  siteMenu.showMenu();
  aboutView.handleNavMenu();
  projectView.handleProjectDetailedView();
})(window);
