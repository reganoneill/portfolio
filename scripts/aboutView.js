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

MyProject.fetchAll();










// projectView.renderIndexPage = function() {
//   MyProject.allProjects.forEach(function(a){
//     $('#articles').append(a.toHtml('#article-template'));
//     if($('#category-filter option:contains("'+ a.category + '")').length === 0) {
//       $('#category-filter').append(a.toHtml('#category-filter-template'));
//     };
//     if($('#author-filter option:contains("'+ a.author + '")').length === 0) {
//       $('#author-filter').append(a.toHtml('#author-filter-template'));
//     };
//   });
// };




















//This (below) doesn't do anything YET.
//when a project section is clicked, the other projects are hidden and the
//clicked on item is displayed in the containing space with additional elements
projectView.showProject = function(){
  //create click event on specific project
  $('#project').on('click', '.tab', function(){
    //hide all children of #project, then show the parent element
    //of the .tab element which was clicked
    $('#parent').children().hide();
    console.log('running');
  });
};


siteMenu.showMenu();
aboutView.handleNavMenu();
projectView.showProject();
