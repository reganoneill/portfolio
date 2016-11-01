var aboutView = {};
var siteMenu = {};
var projectView = {};

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

//this shows menu icon when mouseover occurs
siteMenu.showMenu = function(){
  $('.main-nav').on('mouseover', function(){
    $('.nav-overlay').show();
  });
};



//This (below) doesn't do anything YET.
//when a project section is clicked, the other projects are hidden and the
//clicked on item is displayed in the containing space with additional elements
projectView.showDescription = function(){
  //create click event on specific project
  $('.byline').on('click', '.projectDescription' ,function(){
    //hide all children of #project, then show the parent element
    //of the .tab element which was clicked

    $('#projects article').hide();
    $('.project-description').show();
  });
};



siteMenu.showMenu();
aboutView.handleNavMenu();
projectView.showDescription();
