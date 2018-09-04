/**
 * Function called directly from sheets' menu. Normally, these do not allow
 * for passing parameters. We demonstrate getting over that here. Notice
 * we pass a param for durationSeconds below into a function in our nested
 * name space.
 */
function tellUserNotReady() {
  RCM$.ThisAddon.Deployment.wipToast(8);
}
