function solve(selector) {
  if(!(selector instanceof jQuery) && typeof selector !== "string")
    throw {message:"The provided selector is not a string or a jQuery object"};
  if(typeof selector === "string")
    selector = $(selector);
  var buttons = selector.children().filter(".button");
  buttons.text("hide");
  buttons.click(function() {
    var matchingContent = $(this).next();
    if(matchingContent.length === 0)
      return;
    if(!matchingContent.hasClass("content"))
      return;
    if(matchingContent.is(":visible"))
    {
      matchingContent.hide("fast");
      $(this).text("show");
    }
    else
    {
      matchingContent.show("fast");
      $(this).text("hide");
    }
  });
}
