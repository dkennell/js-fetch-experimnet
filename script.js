console.log('here');

fetch('https://api.github.com/orgs/dollarshaveclub/repos')
  .then(result => result.json())
  .then(json => {
    debugger;
    let repoList = document.querySelector('#repo-list ul');
    json.map(repo => {
      let listItem = createElement();
    });
  });
