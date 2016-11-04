(function(module) {
  function MyProject (opts) {
    for (var keys in opts) {
      this[keys] = opts[keys];
    }
  };
  //I will refactor the code below so that instead of needing to declare an empty
  //array called MyProject.allProjects and pushing into it via a forEach method,
  //I can use a map to populate it
  // MyProject.allProjects = [];

  MyProject.prototype.toHtml = function(scriptTemplateId) {
  // // // ADDING HANDLEBARS INTEGRATION
    var templateRender = Handlebars.compile($(scriptTemplateId).text());
    return templateRender(this);
  // // // END HANDLEBARS INTEGRATION
  };

  //refactored .htHtml method from class-07
  // Article.prototype.toHtml = function(scriptTemplateId) {
  //   var template = Handlebars.compile($(scriptTemplateId).text());
  //   this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  //   this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  //   this.body = marked(this.body);
  //   return template(this);
  // };
//end refactored method from class-07


  MyProject.loadAll = function(inputData) {
    MyProject.allArticles = inputData.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    }).map(function(object){
      return new MyProject(object);
    });
    // .forEach(function(ele) {
    //   MyProject.allProjects.push(new MyProject(ele));
    // });
  };
  //code to pull data from json file to users
  // MyProject.fetchAll = function() {
  //   if (localStorage.siteProjects) {
  //     var cachedLocalStorage = JSON.parse(localStorage.siteProjects);
  //     MyProject.loadAll(cachedLocalStorage);
  //     MyProject.allProjects.forEach(function(article) {
  //       $('#projects').append(article.toHtml());
  //     });
  //     console.log('first condition is running');
  //   } else {
  //     console.log('else is running');
  //     $.getJSON('data/siteProjects.json', function(data){
  //       localStorage.siteProjects=JSON.stringify(data);
  //       MyProject.loadAll(data);
  //       MyProject.allProjects.forEach(function(article) {
  //         $('#projects').append(article.toHtml());
  //       });
  //     });
  //   }
  // };


  //attempting to incorporate code/refactor from functional programming lesson
  //into my project
  //building on code from directly above which checks localStorage for data and grabs it
  //from database if it doesn't exist there
  console.log('hiii');

  MyProject.fetchAll = function(next) {
    if (localStorage.siteProjects) {
      $.ajax({
        type: 'HEAD',
        url: '/data/siteProjects.json',
        success: function(data, message, xhr) {
          var eTag = xhr.getResponseHeader('eTag');
          if (!localStorage.eTag || eTag !== localStorage.eTag) {
            // pass 'next' into Article.getAll();
            MyProject.getAll(next);

          } else {
            MyProject.loadAll(JSON.parse(localStorage.siteProjects));
            next();
          }
        }
      });
    } else {
      MyProject.getAll(next);
    }
  };


  //we also need this code block in order for our fetchAll() to work
  MyProject.getAll = function(next) {
    $.getJSON('/data/siteProjects.json', function(responseData, message, xhr) {
      localStorage.eTag = xhr.getResponseHeader('eTag');
      MyProject.loadAll(responseData);
      localStorage.siteProjects = JSON.stringify(responseData);
      next();
    });
  };
//end functional programming code block
  module.MyProject = MyProject;
})(window);
