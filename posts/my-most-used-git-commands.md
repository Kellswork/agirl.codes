---
title: 'My most used git commands'
date: 08-04-2022
fullDate: Friday, 8 April 2022
tags: Git
description: 'I share git commands I find myself using most often in my day-to-day job as a Software Developer'
image: ''
url: '/my-most-used-git-commands'
---

In this article, I share git commands I find myself using most often in my day-to-day job as a Software Developer. I ran a survey among my Dev friends to find out their most used git commands, and the list is pretty similar except for 1 or 2 git command differences.

First I will list out my most used git commands, then a small list of the git commands I use quite a bit but not as regularly.For each of the commands, I will give a brief example of how it can be used. Lastly, I added a list of git commands mentioned by Developer friends as their most used commands.

### My Most used git command list with examples

- git status
- git add
- git commit
- git push
- git pull
- git checkout
- git merge


#### Git Status

I use this command to check how many files have been changed and have not been committed.

```
git status
```

Here, I have 1 file that has not been added to git and 1 file whose content was recently changed.

![git status](/posts-images/git-commands/git-status-result.png)


### Git Add

I use this command to add newly created files or recent file changes to a staging area where they wait to be committed.

There are 2 ways to add all files to the staging area:

a) **Git add —all**

Since I started working on a [monorepo](https://en.wikipedia.org/wiki/Monorepo#:~:text=In%20version%20control%20systems%2C%20a,as%20a%20'shared%20codebase'.), I use `git add --all` to add all files I have made changes to no matter the project directory.

b) **Git add .**

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

>  if you want to use the git commit command, learn how to use a to write a message, save and quit the vim editor.Or you can change your git editor of choice to Nano, 

### Git Push

I use this to send locally committed changes to the GitHub remote branch. This ensures that the branch on the remote repository contains all the updates made on the local branch.

```
git push
```

![git-push](/posts-images/git-commands/git-push.png)

For newly created local branch, this command is used to set up a remote branch with the same name as the local branch.

```
git push -u origin <branch_name>
```
or the default by git

```
git push --set-upstream <remote> <branch_name>
```

### Git Pull

I use **git pull command** to keep my git local repositories content up-to-date with what is currently in the remote repository.

### Git checkout

I use this to switch branches.

```
git checkout <branch name>
```

![git-checkout](/posts-images/git-commands/git-checkout.png)

**Git checkout -b**

This creates a new branch from an existing branch and  automatically switches to the new branch.
```
git checkout -b <branch name>
```
![git-checkout-b](/posts-images/git-commands/git-checkout-b.png)

### Git Merge

I use **git merge** for updating commits present in the parent branch(dev or main ) with my working branch. For example, A colleague worked on a feature branch named `add-navigation`, which has been merged into the **main branch**.

 If I want my feature branch to have the same updates as the **main branch**, I use git merge to transfer commits present in the main branch to the feature branch I’m working on.

 #### How to merge a feature branch into the main branch

make sure you checkout to the `main branch`  and run the **git merge** command.

```
git checkout main
git merge <branch name>
```

#### How to merge the main branch into a feature branch

**git merge** can be used to merge branches in the opposite direction too. When I finish working on a feature branch, I use git merge to add the work done on my feature branch to the main branch.

make sure the **local main** is up to date with the **remote main branch**.

```
git pull
```
checkout to the feature branch and run the git merge command.

```
git checkout <feature-branch>
git merge <branch name>
```
