for (var i = 9; i<=17; i++){  //loop to create html elements for timeblocks from 9am - 5pm 
  var hour = $("<div>");      //create elements
  var hourClass = $("<div>");
  var textArea = $("<textArea>");
  var button  = $("<button>");
  var iClass = $("<i>");

  hour.attr("id", "hour-"+i);    //add attributes to html elements

  if (moment().format("H") > i) hour.attr("class", " row time-block past");   //determine colour of block
  else if (moment().format("H") == i) hour.attr("class", "row time-block present");
  else if (moment().format("H") < i) hour.attr("class", "row time-block future");


  hourClass.attr("class", "col-2 col-md-1 hour text-center py-3")
  if (i < 12) hourClass.text(i+"AM");  //if else statement to display 24hr time as am/pm
  else if (i === 12) hourClass.text(i +"PM")
  else hourClass.text((i-12)+"PM");

  textArea.attr("class", "col-8 col-md-10 description");
  textArea.attr("rows","3");

  button.attr("class", "btn saveBtn col-2 col-md-1");
  button.attr("aria-label", "save");

  iClass.attr("class", "fas fa-save" );
  iClass.attr("aria-hidden", "true");

  button.append(iClass);      //load html elements to page
  hour.append(hourClass);
  hour.append(textArea);
  hour.append(button);
  $("#container").append(hour);


  //console.log(hour);
  //console.log(hourClass.text());
  //console.log(hour.rows);
  console.log(moment().format("H"));
}




// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var currentDate = moment();

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(currentDate.format("dddd, MMMM Do"));

});
