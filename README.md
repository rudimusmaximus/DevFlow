# DevFlow
A Dev Flow for Google App script. Starter templates, a label scheme, the presentation with many links for reading further, a list of what to install and what it might cost you.

This repo will be used to demonstrate the described 'development work flow' for creating and maintaining google app script. It will be updated over time to demonstrate various best practices and general demonstrations; some inspired by topics covered in the Totally Unscripted series and posts in the over 20,000 member strong
[G+ Google Apps Script Community](https://plus.google.com/u/0/communities/102471985047225101769) and others by my own private projects.

## Current Release Intent
<a href="https://zenhub.com"><img src="https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png"></a>

**v0.1.0 "empty shell"** - the basic repository with .github folder of templates for contributing, issues, and pull requests and without code  
**v0.2.0 "namespace w semantic versioning"** - a few files to establish .gs namespace for our work  
**v1.0.0 "minimal addon for sheets"** - Demonstrable, can clone and publish test as addon; a basic sidebar and at least one function to demonstrate changes, workflow start and restart  
**v1.1.0 "what's new"** - the what's new approach from earlier TU Episode  
**v1.2.0 "make test ready"** - automation of applying naming standards during script development and sheets testing  
**v1.3.0 "tbd"** - open for suggestions

## To Use
 - [x] Star and watch this repo for ongoing updates
 - [x] Install ZenHub extension in Chrome or Firefox from the GitHub Marketplace
 - [x] Use the ZenHub task board to monitor flow of issues and to add to the discussion
 - [x] Follow contributing guidelines for adding new issues like requests for demos or your own idea
 - [x] Follow 'git flow' conventions for proposing new code; see git flow documentation; i recommend using GitKraken


<img width="1161" alt="screen shot 2017-07-07 at 1 23 20 am" src="https://user-images.githubusercontent.com/21182598/27945543-1525cb6e-62b3-11e7-90ce-309bd7497480.png">  
# Original Concept and Background
## The entire presentation  
[Dev Flow by a Process Guy.pdf](https://github.com/rudimusmaximus/DevFlow/files/1130955/Dev.Flow.by.a.Process.Guy.pdf)

## As presented in Totally Unscripted Episode 10
### From "TU10: Professionalizing Google Apps Script Development"

My 7m presentation is followed by about 7 min of discussion. Check out the whole episode if you have time.
[![Totally Unscripted Episode 10](https://img.youtube.com/vi/mChjROHkkls/0.jpg)](https://youtu.be/mChjROHkkls?t=56m3s)

## See Also  
Our contributing guidelines in code repo file "DevFlow/.github/CONTRIBUTING.md" or from link when opening a new issue
### Back Ground Reading (inspiring this dev flow)   
[“A Successful Git branching model” by Vincent Driessen](http://nvie.com/posts/a-successful-git-branching-model/)  
[“Better Software & Stronger Teams: Project Management for GitHub” by By Matt Butler and Paige Paquette of ZenHub](https://www.zenhub.com/book/github-project-management)   
[“Comparing Workflows” by Atlassian](https://www.atlassian.com/git/tutorials/comparing-workflows)  
[“Make The Product Backlog DEEP” by Roman Pichler](http://www.romanpichler.com/blog/make-the-product-backlog-deep/)  
[“Post-Agile: A Design Thinking Approach to Software Development” by Tom Dabson](https://www.artefactgroup.com/articles/post-agile-a-design-thinking-approach-to-software-development/)  
[“Semantic Versioning”](http://semver.org) by [Tom Preston-Werner](http://tom.preston-werner.com/)  

# Implement for yourself
## Overview  
![image](https://user-images.githubusercontent.com/21182598/28250248-8edf5420-6a29-11e7-8e7a-84592f623c55.png)

## Tools with links  
[GitHub](https://github.com/) - Remote Origin or “truth” repo hosted on private or public repository. With the following standards:   

-*Git Flow* - branch and release tagging approach; see reading list and also GitKraken; enables scalable workflow as you add developers and repositories.  
-*Semantic Versioning 2.0.0* - referred to and modified in creating our own, consistently applied approach during development and for live releases. Tied to our analytics, release tagging, and code changes.  

[ZenHub](https://www.zenhub.com/) - integrates natively with GitHub's user interface providing a layer of planning without context switching; burndown charts, Velocity tracking, and Release reports powered by live GitHub data. Keeps more people closer to the code.  
### Work on developer’s local machine  
[Atom](https://atom.io/) - hackable text editor for Windows, Mac AND Linux.  

[GitKraken](https://www.gitkraken.com/) - Git GUI for Windows, Mac AND Linux. Free for open source, educational, non‑profit, or personal use.
### Work in developer’s web editor
[G Drive Script editor - best in Chrome](https://script.google.com)  

[GAS Github Assistant - Chrome extension](https://chrome.google.com/webstore/detail/lfjcgcmkmjjlieihflfhjopckgpelofo)  

## Costs (confirm on sites)
Google accounts are separate.

Tool | Free | Paid
-- | -- | --
1 GitHub | public repos | $7/m Developer 25/m Org team w/ first 5 more at 9per
2 ZenHub | < 6 people | $5 user/m on 6 or more
3 Atom | open source | open source
4 GitKraken | sometimes w/o conflict tool | 49/yr Ind user 390/yr 10 users
5 Script Editor with  6 GAS GH Assistant | open source | open source
Total | 0 | Affordable : )

## A Special Note on Chromebooks  
It is possible to install and run some releases of Linux on a Chromebook that's been put into Developer mode.  
Please see ["crouton" - Chromium OS Universal Chroot Environment](https://github.com/dnschneid/crouton)  
The cool part here is that you are not dual booting and the Chromebook appears to receive updates and continues to support multiple users. I'm told this voids the warranty on the Chromebook? Worth exploring.
