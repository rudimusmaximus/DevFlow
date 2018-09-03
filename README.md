# DevFlow
A Dev Flow for Google App script. Starter templates, a label scheme, the presentation with many links for reading further, a list of what to install and what it might cost you.

This repository will be used to demonstrate the described 'development work flow' for creating and maintaining Google Apps Script. It will be updated over time to demonstrate various best practices and general demonstrations; some inspired by topics covered in the Totally Unscripted series and posts in the over 20,000 member strong [G+ Google Apps Script Community](https://plus.google.com/u/0/communities/102471985047225101769) and others by my own private projects.  

This addon is intended to be a learning tool whose users can contribute via fork and pull or just follow along.

Anyone can learn to run a test as addon in sheets and quite a bit more via this repository example.

I hope it helps you on your journey and that we will see some contribution by you in the form of discussion or new or improved demos.

## Current Release Intent  
Please note collaboration is open to all starting with release v1.0.0  
<a href="https://zenhub.com"><img src="https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png"></a>

Release | Description | Collaboration Status  
---|---|---  
**v0.1.0 "empty shell"** | the basic repository with .github folder of templates for contributing, issues, and pull requests and without code | Closed
**v0.2.0 "namespace w semantic versioning"** | a few files to establish .gs namespace for our work | Closed  
**v0.3.0 "DevFlow for FEW-D: demo ready"** | ready for hands on demo with google's simple addon; will be replaced with true addon for demos during sprint to v1. | Closed  
**v0.4.0 "make test ready"** | automation of applying naming standards during script development and sheets testing See issue https://github.com/rudimusmaximus/DevFlow/issues/8 to track progress | Closed  
**v0.5.0 "minimal add-on for sheets prep"** | ready for first example demo | Closed  
**v1.0.0 "minimal add-on for sheets"** | Demonstrable, can clone and publish test as addon; a basic sidebar with workflow start and restart and menu with at least one example demo, issues to list out ongoing and upcoming demo ideas, kick off meetings and working sessions to solicit feedback on contributors. - // TODO: list a few issues by hash link reference | Open to all (volunteer today)
**v1.1.0 "what's new"** | the what's new approach from earlier TU Episode | Open  
**All Future Releases** | star this repo and follow via zen board, fork and suggest, or create issues for requests - // TODO: list a few issues by hash link reference | Open (see 'Zen Board' for all DevFlow)

## To Use
See tools section for links. Also, see the section "How to participate".  
 - [x] Star and watch this repo for ongoing updates
 - [x] Install ZenHub extension in Chrome or Firefox from the GitHub Marketplace
 - [x] Use the ZenHub task board to monitor flow of issues and to add to the discussion
 - [x] Follow contributing guidelines for adding new issues like requests for demos or your own idea
 - [x] Practice 'git flow' conventions in your local work; i recommend using GitKraken to initialize the Git Flow for your forked repository when working locally and then submitting a pull request to the develop branch of the main repository. Please make sure you have pulled the latest develop and are not submitting code with conflicts.
 - [x] Install GAS Github Assistant for working out of Google's online script editor


<img width="1161" alt="screen shot 2017-07-07 at 1 23 20 am" src="https://user-images.githubusercontent.com/21182598/27945543-1525cb6e-62b3-11e7-90ce-309bd7497480.png">  
# Original Concept and Background
## The entire presentation  
[Dev Flow by a Process Guy.pdf](https://github.com/rudimusmaximus/DevFlow/files/1130955/Dev.Flow.by.a.Process.Guy.pdf)

## As presented in Totally Unscripted Episode 10: Professionalizing Google Apps Script Development
### Totally Unscripted: Episode 10 Highlights - Becoming a Google Apps Script Developer Zen Master

My 7m presentation is followed by about 7 min of discussion. Here is the original presentation in a highlight video.
[![Totally Unscripted: Episode 10 Highlights - Becoming a Google Apps Script Developer Zen Master](https://img.youtube.com/vi/dW1rn_KD1OM/0.jpg)](https://youtu.be/dW1rn_KD1OM)  

Check out the whole episode if you have time for other approaches and also the whole channel is a great resource for google apps script.  
[Totally Unscripted Episode 10: Professionalizing Google Apps Script Development](https://youtu.be/mChjROHkkls)  

## See Also  
Our contributing guidelines in this repo's file ".github/CONTRIBUTING.md"
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

# How To Participate in the DevFlow Repository  
This section brought to you by a short side project (DevFlow 4 FEW-D) whose site link is [Grow With Google Front End Web Development Track - Side Project](few-d.redcrowmethods.com)  Visit that for site for meetings, replay links, and contributors as we demonstrate the collaboration phase for DevFlow v1.0.0

**[this section to be updated when the project is completed April 11, 2018]**

## Quick route "i just want to explore the addon demo"  
TODO: DevFlow 4 FEW-D
## Contributor route "i'd like to try out the DevFlow by participating in the project"  
### Phase II notes
1. Add your name and GitHub handle to the bottom of this list:
 - Rob Goelz  @RobGoelz
 - Your Name @YourHandle
2. Save this file and commit and push to your origin/develop branch.

3. Submit a pull request from this branch to the development branch.

## Implementor "i want to customize DevFlow and make it my own for one or more projects"  
[future project]

The DevFlow for FEW-D is a side project to demonstrate collaboration on a GitHub repository designed to socialize a 'development work flow' for creating and maintaining Google Apps Script. Because this repo will include a sheets addon, participants will be able to explore the world of Google Apps Scripting in the useful space of spreadsheets, directly applying recently acquired skills AND laying a framework for much more.
 - Apply your CSS, HTML, and JavaScript skills in a new context
 - Expand your networks
 - Contribute to an open source project
 - Learn about Google Apps Scripts and Sheets Addons (quickly)
