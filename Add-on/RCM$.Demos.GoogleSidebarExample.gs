//extend or establish namespace object if in another file
var RCM$ = RCM$ || {}; //top level regardless of file load order
RCM$.LibCc = RCM$.LibCc || {}; //2nd level member regardless of file load order
RCM$.ThisAddon = RCM$.ThisAddon || {}; //2nd level member regardless of file load order;
/****
 * 'POPULATE' THE NAMESPACE - establish 3rd level members and define additional methods and properties
 *****/
/**
 * RCM$.ThisAddon.GoogleSidebarExample - part of the Red Crow Dev Flow
 * RCM$.ThisAddon.GoogleSidebarExample = Red Crow Methods Name Space > Add-on Template > Support Functions
 */
(function(nested) {
  nested.description = "Add-on Template > Support Functions; RCM$.ThisAddon.GoogleSidebarExample - part of the Red Crow Dev Flow";
  return nested;
})(RCM$.ThisAddon.GoogleSidebarExample = RCM$.ThisAddon.GoogleSidebarExample || {});

//RCM$.ThisAddon.GoogleSidebarExample.yourDemoFunction();
(function(nested) {
  /**
   * Toast message placeholder for future demos
   */
  nested.yourDemoFunction = function() {
    var ok = 'you got this';
    return true;
  };
  return nested;
})(RCM$.ThisAddon.GoogleSidebarExample);
//TODO: placeholder, when you translate your demos
