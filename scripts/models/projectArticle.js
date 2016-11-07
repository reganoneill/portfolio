(function(module) {
  function MyProject (opts) {
    for (var keys in opts) {
      this[keys] = opts[keys];
    }
  };

  MyProject.prototype.toHtml = function(scriptTemplateId) {
  // // // ADDING HANDLEBARS INTEGRATION
    var templateRender = Handlebars.compile($(scriptTemplateId).text());
    return templateRender(this);
  // // // END HANDLEBARS INTEGRATION
  };

  MyProject.loadAll = function(inputData) {
    MyProject.allArticles = inputData.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    }).map(function(object){
      return new MyProject(object);
    });
  };
  
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
  MyProject.getAll = function(next) {
    $.getJSON('/data/siteProjects.json', function(responseData, message, xhr) {
      localStorage.eTag = xhr.getResponseHeader('eTag');
      MyProject.loadAll(responseData);
      localStorage.siteProjects = JSON.stringify(responseData);
      next();
    });
  };

  module.MyProject = MyProject;
})(window);
