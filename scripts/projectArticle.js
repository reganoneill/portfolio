
//new 11/1
function MyProject (opts) {
  for (var keys in opts) {
    this[keys] = opts[keys];
  }
};

MyProject.allProjects = [];

MyProject.prototype.toHtml = function() {
// // // ADDING HANDLEBARS INTEGRATION
  var source = $('#project-section-template').html();
  console.log(source);
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
// // // END HANDLEBARS INTEGRATION
};
MyProject.loadAll = function(inputData) {
  inputData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  })
  .forEach(function(ele) {
    MyProject.allProjects.push(new MyProject(ele));
  });
};

//code to pull data from json file to users
//new 11/1
MyProject.fetchAll = function() {
  if (localStorage.siteProjects) {
    var cachedLocalStorage = JSON.parse(localStorage.siteProjects);
    MyProject.loadAll(cachedLocalStorage);
    MyProject.allProjects.forEach(function(article) {
      $('#projects').append(article.toHtml());
    });
    console.log('first condition is running');
  } else {
    console.log('else is running');
    $.getJSON('data/siteProjects.json', function(data){
      localStorage.siteProjects=JSON.stringify(data);
      console.log(data);
      MyProject.loadAll(data);
      MyProject.allProjects.forEach(function(article) {
        $('#projects').append(article.toHtml());
      });
    });
  }
};
