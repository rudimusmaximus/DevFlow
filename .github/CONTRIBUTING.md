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
<>update with semantic rules.
