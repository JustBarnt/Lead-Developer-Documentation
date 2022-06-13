<p align="center"><img src="../assets/ddinc-logo-white.svg" style="width: 33vw"></p>

# GitHub & Git SCM (Source Code Management)
	
**This README file will go over all the details and processes of downloading git, using git within the command-line interface, and some of the common commands for a basic workflow.**
	
----
	
# Table of Contents
	
**Table of Contents includes the separate pages, GitHub, JavaScript, Storyline, and VSCode. But will also contain items in this document as well.**
	
1. [Download](#download)
2. [Install](#install)
3. [Terminals](#terminals)
4. [Basic Setup](#basic-setup)
5. [Basic Commands](#basic-commands)
6. [Git Config](#git-config)
7. [Additional Details](#details)
	
---

<!-- Start Download Section -->
## <u>Download <a name="download"></a></u>
<details>

<summary>More Information</summary>
Download both Git SCM and GitHub Desktop from the links below

> This will download the latest releases for each **_It will not take you to the website_**. Unless GitSCM or GitHub Desktop change the way they href is linked to the buttons on the webpage.

After they have downloaded please go to the [install](#install) section and follow the steps if you have never installed Git SCM or GitHub Desktop before.

<a href="https://GitHub.com/git-for-windows/git/releases/download/v2.36.1.windows.1/Git-2.36.1-64-bit.exe">Download Git SCM</a>

<a href="https://central.GitHub.com/deployments/desktop/desktop/latest/win32">Download GitHub Desktop</a>

</details>
<!-- End Download Section -->


<!-- Start Install Section -->
## <u>Install <a name="install"></a></u>
<details>
<summary>More Information</summary>

This section will go over how to install Git SCM and GitHub Desktop. 

### GitHub Desktop
GitHub desktop is a fairly simple install, you can just follow the prompts it gives you.

### Git SCM
Git SCM is a different story. If have you installed Git SCM before on a personal computer, you can skip this as it means you probably have a good understand of how to use Git SCM.

Please follow this screencast video (Approx: 51s in length).

[Tutorial](https://www.screencast.com/t/SXFemcxHO)

</details>
<!-- End Install Section -->

<!-- Start Terminal Section  -->
## <u>Terminals <a name="terminals"></a></u>
<details>
<summary>More Information</summary>

You need to use some kind of [Terminal Application](https://en.wikipedia.org/wiki/Terminal_emulator) in order to use Git SCM. 

There are dozens of Terminal applications you can use, so I am only going to list the terminal application I prefer to use. Which is the Windows Terminal you can find in the Microsoft Store. It's highly customizable, and you can create profiles to match your needs along with applying color themes.

[Windows Terminal](https://www.microsoft.com/store/apps/9n0dx20hk701)

I am not going to go into detail on how to setup Windows Terminal- There are plenty of tutorials online and I would essentially just be reinventing the wheel. 
</details>
<!-- End Terminal Section  -->

<!-- Start Basic Setup Section -->
## <u>Basic Setup<a name="basic-setup"></a></u>
<details>
<summary>More Information</summary>

This section will cover the basic setup of Git SCM for registering 

<details>
<summary>Steps to setting up Git SCM and pushing to a remote repository</summary>
1. First you want to register your name and public email.
	
```bash session
git config --global user.name "Your Name Here"
git config --global user.email you@yourdomainhere.com
```
2. Go into your project directory using whats called ```cd``` [^1] which means `change directory`
```bash session
cd projectname
```
3. Once you are in the fold you would like to make the root of your repository you run the command
```bash session
git init
```
4. This creates a `.git` folder in your root repository.
5. Create a repository on GitHub, grab the https or the <u>ssh link (if you have setup an ssh authentication key)</u>
>If you want to do everything via command line you will have to install Github CLI. Which I do not personally use
	
![screenshot depicting GitHub clone window.][GitClone]
	
6. Next run the following command to link the GitHub repo to your local repo
```bash session
git remote add origin https://github.com/YourUserName/NameOfRepo.git
```
7. Next you will add all the files from your project
```bash session
git add .
```	
8. Next you will create a commit[^2] of the files you are about to push
```bash session
git commit -m"Use the -m flag to tell git what you message is between the quotes"
```
9. Lastly you will now push the the commit to the remote repository on GitHub.
``` bash session
git push -u origin
```

Just a couple of additional things if you ever need to update your remote url use the following command

- Setting a new remote repository. 
```bash session
git remote set-url origin https://github.com/Github/Reponame.git
```
- Restoring staged commits that haven't been pushed
```bash session
git restore --staged
```
</details>


[^1]: ```cd``` doesn't care about case sensitive strings. But if you folder name has a space in it you will need to wrap the entire search string in quotations. EX: ```cd "root/project/target folder"``` 
[^2]: A commit is a short sentence that should be concise in what updates were made. You should make commits often to avoid making on large commit that is to hard to explain, as well as to make sure if something happens you don't lose work./
</details>
<!-- End Basic Setup Section -->

<!-- Start Basic Commands Sections -->
## <u>Basic Commands<a name="basic-commands"></a></u>
<details>
<summary>More Information</summary>

Below I am going to list several additional git commands that are good to familiarize yourself with.

```bash
git status # Shows modified files in working directory.
git add [file] # if you want to add a specific file, you would just write in the directory to the file.
git reset [file] # The opposite of add removes a file or use `git reset .` to remove all files from the stage. Note this does not undo any changes you have made in the working directory.
git diff && git diff --staged # Shows what is changed but not staged adding the --staged flag shows what is staged but not committed.
git rm [file] # Deletes the file from the project and stages for the removal commit.
git pull # Fetch and merge any commits from the tracked remote branch

```
</details>
<!-- End Basic Commands Sections -->

<!-- Start Git Config Section -->
## <u>Git Config<a name="git-config"></a></u>
<details>
<summary>More Information</summary>

This section is going to over setting up a `.gitconfig` file

I have included the `.gitconfig` I used personally as well for you to use and overwrite if you want. I have a few `alias` which is essentially shorthand abbreviations for git calls. Take a look below and see if you can figure out what my calls my alias are shortening. 

Outside of the alias' there are not many things you would really need to change the `.gitconfig` for unless you really want to customize things such as colors like I have.

```ini
[alias]
	st = status
	ci = commit
	re = restore --staged
	ph = push -u origin
	llog = log --date=local
	remadd = remote add origin
	remset = remote set-url origin 
```
</details>
<!-- End Git Config Section -->

<!-- Start Additional Details Section -->
## <u>Additional Details<a name="details"></a></u>
<details>
<summary>More Information</summary>

Last thing is `.gitignore` file, this file is something that you will want apart of every repo your make. It ignores files/folders you specify. You especially want to include this file if you are working with private keys or information to make sure it is not uploaded to GitHub.

```ini
# Ignores all .log files
*.log

#Ignores all files node_modules
node_modules/
```
---

# Ignore Patters (From Git SCM Documentation)

<details>
	<summary>Ignore Patterns</summary>
	PATTERN FORMAT
A blank line matches no files, so it can serve as a separator for readability.

A line starting with `#` serves as a comment. Put a backslash `("\")` in front of the first hash for patterns that begin with a hash.

Trailing spaces are ignored unless they are quoted with backslash `("\")`.

An optional prefix "!" which negates the pattern; any matching file excluded by a previous pattern will become included again. It is not possible to re-include a file if a parent directory of that file is excluded. Git doesn’t list excluded directories for performance reasons, so any patterns on contained files have no effect, no matter where they are defined. Put a backslash `("\")` in front of the first `"!"` for patterns that begin with a literal `"!"`, for example, `"\!important!.txt"`.

The slash `/` is used as the directory separator. Separators may occur at the beginning, middle or end of the `.gitignore` search pattern.

If there is a separator at the beginning or middle (or both) of the pattern, then the pattern is relative to the directory level of the particular `.gitignore` file itself. Otherwise the pattern may also match at any level below the `.gitignore` level.

If there is a separator at the end of the pattern then the pattern will only match directories, otherwise the pattern can match both files and directories.

For example, a pattern `doc/frotz/` matches `doc/frotz` directory, but not `a/doc/frotz` directory; however `frotz/` matches frotz and `a/frotz` that is a directory (all paths are relative from the `.gitignore` file).

An asterisk `"*"` matches anything except a slash. The character `"?"` matches any one character except `"/"`. The range notation, e.g. `[a-zA-Z]`, can be used to match one of the characters in a range. See fnmatch(3) and the FNM_PATHNAME flag for a more detailed description.

Two consecutive asterisks `("**")` in patterns matched against full pathname may have special meaning:

A leading `"**"` followed by a slash means match in all directories. For example, `"**/foo"` matches file or directory `"foo"` anywhere, the same as pattern `"foo"`. `"**/foo/bar"` matches file or directory `"bar"` anywhere that is directly under directory `"foo"`.

A trailing `"/**"` matches everything inside. For example, `"abc/**"` matches all files inside directory `"abc"`, relative to the location of the `.gitignore` file, with infinite depth.

A slash followed by two consecutive asterisks then a slash matches zero or more directories. For example, `"a/**/b"` matches `"a/b"`, `"a/x/b"`, `"a/x/y/b"` and so on.

Other consecutive asterisks are considered regular asterisks and will match according to the previous rules.
</details>

There is a plethora of additional topics with git, but I highly suggest looking up Git SCM for yourself and just exploring, because it isn't feasible for me to cover all of Git/GitHub. 
</details>
<!-- End Additional Details Section -->

<!-- Image references -->
[GitClone]: ../images/GitHubCloneRepository.png