This will contain evolving Dev Flow guidelines for sound code using Google Apps Script including use of templates, labels, use of zenHub, semantic versioning, goListing, externals, BI exports, multiple domain approach, use of 'Git Flow' in GitKraken, etc.

- [x] Please examine README.md and install the ZenHub extension for Firefox or Chrome [here](http://www.zenhub.com). It’s free for public, academic, and personal repositories. It's also free for teams under six on unlimited private repositories!

# Submitting issues to the DevFlow repo
Help avoid duplicates by checking the board first to see if someone else is already talking about it before submitting an issue. Please use the label approach to the best of your ability. We'll refine as the issue makes it through the pipelines.

✌️

## Pipeline organization
We use ZenHub to help make this process easy.  Visit our task board (press `b` with ZenHub installed) to see current issues, organized as:

### 1 - New Issues (Inbox)  
The first pipeline a new issue will hit. This lets us know what needs our attention.

### 2 - Discussion
An issue will get moved here when we are looking for some community feedback, so don't forget to add GitHub reactions to those issues you would like to see! Bug reports or issues awaiting replies will also be moved to discussion to keep the inbox clear.

### 3 - Icebox
Issues that haven't generated enough interest to be added to the backlog can live on ice for later or if truly dead closed.

### 4 - Backlog
Features that we are working on, or will be in the future. The higher the item, the higher the priority and level of detail so it can be worked.

### 5 - In Progress
Issues a developer is actively working on.
When completed by developer, is labelled 'Fixed'. Is ready for another person to review and moved to next pipeline.

### 6 - Review/QA
Actively being tested and reviewed by another person beside developer if possible. Notes updated.

### 7 - Done
Confirmed working and ready for release. Checklist completed as much as possible.

### 8 - Closed
Released and tagged with semantic version. Item is completed and verified.

May also contain items not developed but archived and closed like duplicates, invalid items, etc.

## Label scheme
Certain status and type labels become unnecessary when you are using zen board pipelines AND checklists via issue templates (which we do).
Here’s our current approach on GitHub Issue Labels:
### Types
Administrative groupings  
<img width="277" alt="administrative types" src="https://user-images.githubusercontent.com/21182598/28240630-f72c48e2-694a-11e7-80ed-add5b8d44963.png">
### Complexity
Likert-type scale of choices with t-shirt sizes and unitless, story point ranges to help with later estimation also in story points  
<img width="203" alt="complexity" src="https://user-images.githubusercontent.com/21182598/28240693-bfe2af9c-694b-11e7-9e4d-00be7ae2ace6.png">
### Dev Flag
The developer “flags” work stop  
<img width="254" alt="developer flag" src="https://user-images.githubusercontent.com/21182598/28240626-e4c1a06c-694a-11e7-8598-f898a569f1b2.png">
### Documentation
Any markdown writeup for ongoing reference. Epics, issues that are special research or design, tips and tricks  
<img width="198" alt="documentation" src="https://user-images.githubusercontent.com/21182598/28240615-ca7fdc8c-694a-11e7-88d4-647051a4be81.png">
### Epic
grouping of one or more related issues  
<img width="91" alt="Epic" src="https://user-images.githubusercontent.com/21182598/28240603-a8cb95cc-694a-11e7-95bb-9855be368084.png">
### Fixed / Not Fixed
‘Fixed’ set by developer; ‘Not fixed’ set by later testing or QA.  
<img width="140" alt="Fixed / Not Fixed" src="https://user-images.githubusercontent.com/21182598/28240584-666789ca-694a-11e7-9904-48cae35c7dbe.png">
### Priorities
Likert-type scale of priority 0 - 4  
<img width="200" alt="Priority" src="https://user-images.githubusercontent.com/21182598/28240581-5ec266cc-694a-11e7-9df9-0cb38e884b09.png">
### Application Specific Steps
Narrows down the user story for reproducing, trouble shooting, designing.  
<img width="216" alt="Application Step" src="https://user-images.githubusercontent.com/21182598/28240577-5444a0f2-694a-11e7-9c71-1db71425c4c2.png">
## Tips  
- [x] During the evolution of the issues, any XLs should be broken into smaller issues before becoming part of any sprint.
- [x] You can copy labels between repos. See [this tool.](www.dorukdestan.com/github-label-manager/)  

# Proposing Code Changes  
Create issues with the label scheme above for any desired change. The issue template will give you a default layout. Start even with just the issue title only and when you want feedback on the item at whatever level of detail you are at, then move it into discussion.
Once there, keep adding detail until there is enough to move it up in priority and until it is sprint ready.

During sprints or coding sessions, developers will move items as described in the labels section.

Feature, hotfix, and release branches are made in new branches from the latest develop and merged back into develop via pull requests or directly. All via the rules of the Git Flow best practices. New releases get tagged on master with a semantic version that matches the internal version in the code. New release branches are merged back into both master and develop so as to synch with any new development that may have taken place when the release branch was created. Similarly, hot fixes get merged into both the master and develop branches.

** CONFIRM and REVIEW for accuracy against git flow practice and git kraken implementation by running demonstrations on a test repository while monitoring the git directly.  ** see

## Semantic Versioning

- ** vMajor.Minor.Patch-changeTopic.Iteration **  

Remember to read this for introduction: [“Semantic Versioning”](http://semver.org) by [Tom Preston-Werner](http://tom.preston-werner.com/)  

- [x] Maintain your add-ons in standalone scripts NOT container bound  
- [x] Keep track of your code’s semantic version number directly in your code
- [x] Use it when release tagging and if you like, in your commit titles

### Increment like this:
- Full release might be v1.0.0
- Patch release v1.0.1
- Minor release v1.1.0
- Major release v2.0.0

- Development changes:  
 - v2.0.0-changeTopic.1
 - v2.0.0-changeTopic.2  


- Minor release v2.0.1  

### Usage Notes  
You should write up your own notes on when and how to implement the versioning as defined by Tom Preston-Werner above. See his document for getting started.
#### Major
#### Minor
#### Patch
#### ChangeTopic/branchName
#### Iteration

# Practices and Guiding principles
Make a git flow that works for you by experimenting; enforce your own semantic versioning.  

Automate for consistency and to reduce friction in your workflow; for example, make your own automation or procedures to help enforce naming conventions and good testing practices. As you propagate scripts and test files (target sheets for example), it’s a lot easier to clean up if you’ve standardized the look and feel of your dev flow to include testing by developers and others alike. (watch for a future update on the DevFlow repo).  

Make and use template MD files for repos of the same kind; this can be done inside GitHub’s UI or in your local editor. For example,
- README.md
- .gitignore ( https://www.gitignore.io )
- .github/CONTRIBUTING.md
- .github/ISSUE_TEMPLATE.md
- .github/PULL_REQUEST_TEMPLATE.md  

Having these files in your repository gives you default content when you create an issue or pull request and the contributing.md is a place for establishing your guidelines that aren't in your readme.md.  

Also, consider consistent folder and file naming together with nested namespacing for complex code; whatever works for you. Remember the mantra,  
**"If it works, do it; if it doesn't, don't."**  

Make a label scheme that goes beyond type to fuel estimates, drive work priority,  improve visibility, and enable better reporting.  

Consider combining your approach to semantic versioning with your tagging, labeling scheme, and analytics approaches (whole lifecycle & supersystem).  

**Use ZenHub task boards instead of GitHub projects; use GitHub issues as if they were work tickets or user stories; Use GitHub milestones-as-sprints to run your issues  through your boards. (a Scrum-like, post-agile world).**  

Where possible, use board(s) across repos and leverage filtering.  KEEP IT VISIBLE.

In ZenHub, you “burn down sprints” and “burn up releases”.

When you have more developers, code reviews are a must and consider adding sprint “Retrospectives” post close as a pipeline to close the feedback loop

# Things to watch out for
These statements should be confirmed and carefully considered.

**Versioning** - Your script version in the google editor is the add-on developer dashboard version BUT IS NOT your semantic version in the script code!  

**Releases** - ZenHub Releases are NOT GitHub Releases (a tagged commit with a few extra features).  

**Closing Issues** - Don’t close issues using GitHub key words in pull requests or elsewhere unless you want them to go straight to the closed pipeline. Otherwise, use GitHub ‘#’ link notation and let your dev flow close the issue via the Zen Board or directly when finalizing notes.  

**What’s Missing** - The process of creating your add-on's listing and the basic graphics for ‘marketing collateral’/ promo tiles.  

**Merging Zen Boards** - When adding repos and merging task boards take care with how labels are treated. Test it out on practice repos.  

**What’s Next?** -  Please star or follow this repo. Open an issue anytime to leave comments, improvements, or suggestions there!

THANKS and I hope this helps you.
