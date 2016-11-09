(function(module) {
  var repoView = {};
  /* NOTE: Let's setup our new template!
      Save the result in this `repoCompiler` variable that we will pass to
      the append method below. */
  var repoCompiler = Handlebars.compile($('#repo-template').html());

  repos.allRepos.forEach(function(a) {
    $('#stats').append(a.toHtml($('#repo-template')));
  });

  /* NOTE: If all the data is loaded, we can
      render the repos. */
  repoView.renderRepos = function() {
    $('#stats').empty().append(
      repos.withTheAttribute('name')
      .map(repoCompiler)
    );
  };
  /* NOTE: Call the function that loads (or 'requests') our repo data.
    Pass in our view function as a higher order callback, so our repos
    will render AFTER the data is loaded. */
  repos.requestRepos(repoView.renderRepos);

  module.repoView = repoView;
})(window);
