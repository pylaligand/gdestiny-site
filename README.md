# gDestiny / Hundred Zeros website


### Setting up

1. Fork the [project](https://github.com/pylaligand/gdestiny-site) on GitHub.
2. Clone the forked repo
```
git clone https://github.com/YOUR_USERNAME/gdestiny-site.git
cd gdestiny-site
```
3. Track the main repository
```
git remote add upstream https://github.com/pylaligand/gdestiny-site.git
git remote set-url --push upstream you_shall_not_push
git fetch upstream
git branch --set-upstream-to=upstream/master master
```


### Developing

Site dependencies are managed by [Bower](https://bower.io/) and the site is deployed on [Firebase](https://firebase.google.com/).

In order to work on the site, you'll need to install:
- the Bower package manager [command-line utility](https://bower.io/#install-bower)
- the Firebase [command-line tools](https://firebase.google.com/docs/hosting/deploying#install-the-firebase-cli)

In order to fetch/update dependencies:
```
bower update
```

To test the site locally:
```
firebase serve
```
The site should be viewable at https://localhost:5000.


### Reviewing

To generate a changelist, create a new branch off of *master*:
```
git checkout -b my_dev_branch
```
Make changes and create a new commit. GUI's for Git ([git-gui](https://git-scm.com/docs/git-gui), [git-cola](https://git-cola.github.io/), etc...) are highly recommended.
To upload your change to GitHub, run:
```
git push origin my_dev_branch
```
Then navigate to GitHub and follow the prompt to create a pull request.

If you need to amend your changes, **do not create extra commits** and instead amend the existing commit. Then push your changes with:
```
git push -f origin my_dev_branch
```

When the PR is approved, commit it and clean up the remote branch on GitHub. Lastly, delete your local branch:
```
git branch -D my_dev_branch
```
and sync your master branch:
```
git checkout master
git pull --rebase
```


### Deploying

You first need to get added to the access control list for the *gdestiny-site* Firebase project. Once this is done, new versions of the site can be deployed from your local checkout with:
```
firebase deploy -m "Added such and such feature"
```

Guidelines:
- keep the deployment message short and explicit about the content of the update
- always deploy from a clean, up-to-date *master* branch.
