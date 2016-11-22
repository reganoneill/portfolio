(function(module) {
  var aboutView = {};
  var siteMenu = {};
  var projectView = {};

//testing out functionality to remove background image from target when clicked
  // projectView.expandedImage = function(){
  //   $(this).css('display', '');
  // };
  projectView.renderProjects = function(){
    $('.project-details').fadeOut();
    //new method which uses the .toHtml method to load particular Handlebars.js
    //scripts and then append them to particular elements
    MyProject.allArticles.forEach(function(a) {
      //$('#articles').append(a.toHtml($('#article-template')));
      $('.project-summary').append(a.toHtml($('#project-section-template')));
      /////11.7 attempting to add new section
      $('.project-details').append(a.toHtml($('#project-detail-template')));
    });
  };

  projectView.handleProjectDetailedView = function(){
    $('.project-summary').on('click', 'article', function(a){
      a.preventDefault();
      if($(this).attr('data-cat')){
        var $selectedProj = ($(this).attr('data-cat'));
        console.log($selectedProj);
        $('.project-summary').fadeOut();
        $('.project-details').fadeIn();
        $('.project-details article').not('[data-title="' + $selectedProj + '"]').hide();
        $('#projects h2').show();
      } else {
        console.log('not working');
      }
    });
  };

  projectView.returnToSummaries = function(){
    $('#projects h2').on('click', function(a){
      a.preventDefault();
      $('article[data-title]').fadeIn();
      $('.project-details').fadeOut();
      $('.project-summary').fadeIn();
      $('#projects h2').hide();

    });

  };//end returnToSummaries method


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
  $('#projects h2').hide();
  MyProject.fetchAll(projectView.renderProjects);
  siteMenu.showMenu();
  projectView.returnToSummaries();
  projectView.handleProjectDetailedView();
})(window);
