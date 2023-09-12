---
title: 'My most used git commands'
date: 08-04-2022
fullDate: Friday, 8 April 2022
tags: Git
description: 'I share git commands I find myself using most often in my day-to-day job as a Software Developer'
image: '/posts-images/git-commands/my-most-used-git-commands.jpg'
url: '/my-most-used-git-commands'
---

In this article, I share git commands I find myself using most often in my day-to-day job as a Software Developer. I ran a survey among my Dev friends to find out their most used git commands, and the list is pretty similar except for 1 or 2 git command differences.

First I will list out my most used git commands, then a small list of the git commands I use quite a bit but not as regularly. For each of the commands, I will give a brief example of how it can be used. Lastly, I added a list of git commands mentioned by Developer friends as their most used commands.

## My Most used git command list with examples

- git status
- git add
- git commit
- git push
- git pull
- git checkout
- git merge


### Git Status

I use **git status command** to check how many files have been changed and have not been committed.

```
git status
```

Here, I have 1 file that has not been added to git and 1 file whose content was recently changed.

![git status](/posts-images/git-commands/git-status-result.png)


### Git Add

I use this command to add newly created files or recent file changes to a staging area where they wait to be committed.

There are 2 ways to add all files to the staging area:

#### a) Git add —all

Since I started working on a [monorepo](https://en.wikipedia.org/wiki/Monorepo#:~:text=In%20version%20control%20systems%2C%20a,as%20a%20'shared%20codebase'.), I use `git add --all` to add all files I have made changes to no matter the project directory.

#### b) Git add .

I use `git add .` to add all files I have updated in the project directory.

If you use vscode, the saved changes will move to staged Changes

![vscode](/posts-images/git-commands/vscode-staged-changes.png)

Another way to check if files have been committed is by typing **git status** in the terminal, the files now highlighted in the green show it has been staged but not committed.

![git-add-all](/posts-images/git-commands/git-add-all.png)

The third part of the git add command is where we specify the files we want to add. So “--all” and “.” means all files. We could also specify which files want to add by doing: 

```
git add dir/file1.js dir/file2.js
```
![git-add](/posts-images/git-commands/git-add.png)

### Git Commit

This command saves your recent changes in the project’s version control history locally.
This command can be used in a short format.

**git commit -m <message>**

This option lets you commit your work with a short / one line message

```
git commit -m 'update article with pictures'
```


![git-commit-m](/posts-images/git-commands/git-commit-m.png)

**git commit**

This is the same as the command above, but it opens up a vim editor where you can write longer, better-structured commit messages that support multiple lines.

![git-commit](/posts-images/git-commands/git-commit.png)

>  If you want to use the git commit command, learn how to use a to write a message, save and quit the vim editor. Or you can change your git editor of choice to Nano.

### Git Push

I use the **git push command** to send locally committed changes to the GitHub remote branch. This ensures that the branch on the remote repository contains all the updates made on the local branch.

```
git push
```

![git-push](/posts-images/git-commands/git-push.png)

For a newly created local branch, this command is used to set up a remote branch with the same name as the local branch.

```
git push -u origin <branch_name>
```
or the default by git

```
git push --set-upstream <remote> <branch_name>
```

### Git Pull

I use the **git pull command** to keep my git local repositories content up-to-date with what is currently in the remote repository.

```
git pull
```
### Git checkout

I use this to switch branches.

```
git checkout <branch name>
```

![git-checkout](/posts-images/git-commands/git-checkout.png)

#### Git checkout -b

This creates a new branch from an existing branch and  automatically switches to the new branch.
```
git checkout -b <branch name>
```
![git-checkout-b](/posts-images/git-commands/git-checkout-b.png)

### Git Merge

I use this command for updating commits present in the parent branch(dev or main ) with my working branch. For example, A colleague worked on a feature branch named `add-navigation`, which has been merged into the `main branch`.

If I want my `feature branch` to have the same updates as the `main branch`, I use **git merge** to transfer commits present in the `main branch` to the feature branch that I am working on.

 #### How to merge a feature branch into the main branch

make sure you checkout to the `main branch`  and run the **git merge** command.

```
git checkout main
git merge <branch name>
```

![git-merge-main](/posts-images/git-commands/git-merge-main.png)


#### How to merge the main branch into a feature branch

**git merge** can be used to merge branches in the opposite direction too. When I finish working on a feature branch, I use **git merge** to add the work done on my `feature branch` to the `main branch`.

Make sure the `local main` is up to date with the `remote main branch`.

```
git pull
```
checkout to the `feature branch` and run the git merge command.

```
git checkout <feature-branch>
git merge <branch name>
```

![git-merge-feature](/posts-images/git-commands/git-merge-feature.png)


## Often used Git commands List with examples

These commands I frequently use but not as much as my most used commands.

- git log --oneline
- git branch -d
- git reset
- git rebase

### git log --oneline

This displays your git commit history as a one-line short message, making scanning through previous commit messages easy.

```
git log --oneline
```
![git-log-online](/posts-images/git-commands/git-log-oneline.png)

### git branch -d

I use this command to delete local branches I no longer need.

```
git branch -d
```
![git-delete](/posts-images/git-commands/git-delete.png)


### git reset head

I use this command when I want to undo a commit to a certain commit in a file. You can use **git --oneline** to get the short version of the commit hash you want the code to reset to.

```
git reset head <commit hash>
```

## Notable mentions from Developer friends of their most used git commands

These are some of the commands I found from Dev friends that are different from my most often used commands.

- git rm -cached flag
- git stash
- git cherry pick <commit hash >
- git rebase


### git rm --cached flag

**git rm --cached** command remove files from your local git repository. The **--cached flag** deletes the file from your git repository, it becomes an untracked file in your project folder. Note you have to commit the changes.

```
git rm <file Relative path> --cached
```

![git-rm-cached](/posts-images/git-commands/git-rm-cached.png)

### git stash

Say you are working on a `feature branch` and you need to work on something else but don’t want to commit the changes just yet.
You use a **git stash** command to save the changes temporarily without having to commit them. This lets you switch between branches and back to your  `feature branch`, easily retrieve the stashed changes and continue working on it.

```
git stash --include-untracked or git stash -u
```

![git-stash](/posts-images/git-commands/git-stash.png)

### git cherry pick <commit hash >

You use this command when you want to get a single commit from another branch into your working branch. Think of it like this, instead of using **git merge**
 to add all the commits from another branch into your working branch just to get one particular commit from that branch, you use git **cherry pick<commit hash>** to merge that particular commit into your branch.

```
git cherrypick 0c2e231
```

### git rebase

**git rebase** solves the same problem as **git merge** but does it differently. Instead of using a merge commit, rebasing re-writes the project history by creating brand new commits for each commit in the original branch.

More Information on the [difference between merge and rebase](https://www.atlassian.com/git/tutorials/merging-vs-rebasing).

## Conclusion

It was fun learning about what git commands fellow developers mostly use in their day-to-day jobs. Apparently, we share almost the same list, with a sprinkle of a few command differences.

Do share your most used git command list with me on [medium](https://agirlcodes.medium.com/my-most-used-git-commands-ff031b2c77c4)


*Recommended Reads*

- [4 New ES2021(ES12) Features JavaScript Developers Need to Know'](https://www.agirlcodes.dev/4-new-es2021(es12)-features-javascript-developers-need-to-know).

- [How to check if an object is empty](https://www.agirlcodes.dev/my-most-used-git-commands).

