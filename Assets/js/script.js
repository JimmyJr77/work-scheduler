$(function () {
  var today = dayjs()
  $('#currentDay').text(today.format('[It is finally ] MMM D, YYYY [. Today is the day you finally finish all your tasks.]'));
  
  // Identify the current time
  hourNow = dayjs().hour();
  console.log(hourNow)

  var container = $("#day-container"); 
  var hour;

  // Iterate over the hours from 9 AM to 5 PM and assign proper formatting
  for (var hour = 9; hour <= 17; hour++) {
    var divId = "hour-" + hour;
    var divClass;
      if (hour < hourNow) {
        divClass = "row time-block past";
      } else if (hour > hourNow) {
        divClass = "row time-block future";
      } else {
        divClass = "row time-block present"
      }
    
    // Create a new div element with the unique ID and class
    var newDiv = $("<div>").attr("id", divId).addClass(divClass);
    
    // Create the child elements within the new div
    var hourDiv = $("<div>").addClass("col-2 col-md-1 hour text-center py-3");
    var textarea = $("<textarea>").addClass("col-8 col-md-10 description").attr("rows", 3);
    var button = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save");
    var icon = $("<i>").addClass("fas fa-save").attr("aria-hidden", "true");
    
    // Append the child elements to the new div
    button.append(icon);
    newDiv.append(hourDiv, textarea, button);
  
    
    // Set the hour content
    hourDiv.text(hour + ":00");
    
    // Append the new div to the container element
    container.append(newDiv);

  }

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. 



});



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. 
  // HINT: What does `this` reference in the click listener function? 
  // How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? 
  // How might the id be useful when saving the description in local storage?
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

