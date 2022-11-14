// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var currentDate = moment();
  var saved = [];

  for (var i = 9; i<=17; i++){  //loop to create html elements for timeblocks from 0900H - 1700H 
    var timeBlock = $("<div>");      //create elements
    var hourClass = $("<div>");
    var textArea = $("<textArea>");
    var button  = $("<button>");
    var iClass = $("<i>");

    timeBlock.attr("id", "timeBlock-"+i);    //add attributes to html elements 
    
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    saved[i-9] = localStorage.getItem("timeBlock-"+i);    //load saved schedule items to array
    if (saved[i-9] != null) textArea.text(saved[i-9]);    //if !null then write item to screen
    console.log("loaded from storage: " + i + "H - " + saved[i-9]);
 
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    
    timeBlock.attr("class", "row time-block");                  //add attributes to timeBlock
    if (moment().format("H") > i) timeBlock.addClass("past");   //determine colour of timeBlock
    else if (moment().format("H") == i) timeBlock.addClass("present");
    else if (moment().format("H") < i) timeBlock.addClass("future");

    hourClass.attr("class", "col-2 col-md-1 hour text-center py-3")  //add attributes to hour column 
    if (i < 12) hourClass.text(i+"AM");                              //if else statement to display 24hr time as am/pm
    else if (i === 12) hourClass.text(i +"PM")
    else hourClass.text((i-12)+"PM");

    textArea.attr("class", "col-8 col-md-10 description");  //add attributes to textArea
    textArea.attr("rows","3");

    button.attr("id",i);                                    //add attributes to button
    button.attr("class", "btn saveBtn col-2 col-md-1");
    button.attr("aria-label", "save");

    iClass.attr("class", "fas fa-save" );                   //add attributes to save button image
    iClass.attr("aria-hidden", "true");

    button.append(iClass);                                  //append created html elements to page
    timeBlock.append(hourClass);
    timeBlock.append(textArea);
    timeBlock.append(button);
    $("#container").append(timeBlock);

  }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?  

  $("button").click(function(){   //function to handle save button click
    var buttonParent = this.parentNode;                                    //find parent timeBlock of button clicked
    var textInside = buttonParent.children[1].value;
    saved[(this.id)-9] = textInside;                                       //saved task to schedule array 
    localStorage.setItem(buttonParent.id, saved[(this.id)-9]);             //saved task to localStorage

    console.log("new task @ " + buttonParent.id + ": " + saved[(this.id)-9]); 
    console.log(saved);  
  });
  
  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(currentDate.format("dddd, MMMM Do"));

});



