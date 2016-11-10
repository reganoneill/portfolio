// (function(module) {
//   var repos = {};
//
//   repos.allRepos=[];
// // TODO: create a githubToken.js file that we can use to generate our headers
//          // properly.
//   repos.requestRepos = function(callback) {
//     /* TODO: How would you like to fetch your repos? Someone say AJAX?!
//       Do not forget to call the callback! */
//       //DONE
//     $.ajax({
//       // url: 'https://api.github.com/users/reganoneill/repos',
//       url: 'https://api.github.com/users/reganoneill/repos',
//       type: 'GET',
//       headers: {'Authorization': 'token ' + githubToken},
//       success: function(data, message, xhr){
//         console.log(message);
//         repos.allRepos = data;
//         callback();
//       }
//     }
//     );
//   };
//
//   repos.withTheAttribute = function(myAttr) {
//     /* NOTE: This Model method filters the full repos collection based
//         on a particular attribute. For example, you could use this
//         to filter all repos that have a forks_count, stargazers_count,
//         or watchers_count. */
//     return repos.allRepos.filter(function(aRepo) {
//       return aRepo[myAttr];
//     });
//   };
//
//   module.repos = repos;
// })(window);


(function(module) {
  var reposObj = {};

  reposObj.requestRepos = function(callback) {
    // NOTE: refactor this request into an $.get call
    $.when(
     $.get('/github/users/reganoneill/repos', function(data){
       reposObj.allRepos = data;
     }),
     $.get('/github/users/reganoneill/followers', function(data){
       reposObj.followers = data;
     })
    ).done(callback);
  };

  reposObj.withTheAttribute = function(attr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.reposObj = reposObj;
})(window);
