# How to Iterate this Code Using DevFlow
## Test as Add-on from Google Apps Script Web Editor  
1. Fork The repo `github.com/rudimusmaximus/DevFlow`  
2. Clone and make changes to a new branch off of your copy of Develop or Master (per Git Glow - fix, feature, hotfix rules). **Hint**: likely `Develop: feature/newBranchName`  
3. Update Semantic Version per guidelines in the file named `G/gs/namespace_DEV$_top_level.gs`. Set the `DEV$.Developer.Enums.CURRENT_ADDON_VERSION` value to something like `"0.3.0-newBranchName.1"` **Hint**: you can just make this change and iterate on the web copy if you like which may happen as you debug.  
4. Make your code changes and commit them using git commit message guidelines; push this branch to your remote **'forked repo'**
5. Open a new standalone script; save it once and then, from the web editor, pull your code from this new branch using *'Gas Git Hub Assistant'* or any other method (*'Clasp'* or *'Copy and Paste'*). Save again. Refresh your browser to see renamed script using DevFlow standard.  
6. Activate the latest Drive advanced service
7. Run make test ready
8. Setup a test choosing the recently created sheet (created by step 7 w naming standard)
9. Check your code in the addon running in test on your target sheet named the same as your script
10. Iterate as needed and each sem ver change requires a repeat of steps 7,8,9; you can push any iteration along they way or just the last one to your origin branch (using GAS GitHub Assistant). Then, you canu can pull from origin as necessary.

DevFlow now has same name scripts and target sheets iterating on Semantic Versions.
Review in wednesday sessions scheduled.
