//extend or establish namespace object if in another file
var RCM$       = RCM$           || {};//top level regardless of file load order
RCM$.LibCc     = RCM$.LibCc     || {};//2nd level member regardless of file load order
RCM$.ThisAddon = RCM$.ThisAddon || {};//2nd level member regardless of file load order;
/****
 * 'POPULATE' THE NAMESPACE - establish 3rd level members and define additional methods and properties
 *****/
/**
 * RCM$.ThisAddon.SupportFunctions - part of the Red Crow Dev Flow
 * RCM$.ThisAddon.SupportFunctions = Red Crow Methods Name Space > Add-on Template > Support Functions
 */
(function (nested) {
  nested.description = "Add-on Template > Support Functions; RCM$.ThisAddon.SupportFunctions - part of the Red Crow Dev Flow";
  return nested;
})(RCM$.ThisAddon.SupportFunctions = RCM$.ThisAddon.SupportFunctions || {});

//RCM$.ThisAddon.goListSvc.todo:addfunctions here
(function (nested) {
/**
 *
 * returns
 */
  nested.newFunc = function(param1,param2) {
    var x = 'todo';
    return x;
  };
  return nested;
})(RCM$.ThisAddon.SupportFunctions);
