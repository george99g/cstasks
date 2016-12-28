function generateList(count) {
  var returnString = "<ul class=\"items-list\">";
  for(var i = 0; i < count; i++)
    returnString += "<li class=\"list-item\">List item " + i + "</li>"
  returnString += "</ul>";
  return returnString;
}

function solve(selector, count) {
  if(typeof count === "string")
    count = parseInt(count);
  if(count === NaN || count === undefined || count === null || count < 1)
    throw {message:"Count is invalid"};
  if(!selector.length)
    return;
  selector.html(generateList(count));
}
