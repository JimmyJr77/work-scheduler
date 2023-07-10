$(function() {
  var today = dayjs();
  $('#currentDay').text(today.format('[Today is ] MMM D, YYYY [. This is the day you finally finish all your tasks.]'));
  
  var container = $("#day-container");
  var hourNow = dayjs().hour();

  // Iterate over the hours from 9 AM to 5 PM and identify past, present, or future time formatting
  for (var hour = 9; hour <= 17; hour++) {
    var divId = "hour-" + hour;
    var divClass;
    if (hour < hourNow) {
      divClass = "row time-block past";
    } else if (hour > hourNow) {
      divClass = "row time-block future";
    } else {
      divClass = "row time-block present";
    };
    
    // Create a new div element with the unique ID and class
    var newDiv = $("<div>").attr("id", divId).addClass(divClass);
    
    // Create the child elements within the new div
    var hourDiv = $("<div>").addClass("col-2 col-md-1 hour text-center py-3");
    var textarea = $("<textarea>").addClass("col-8 col-md-10 description").attr("rows", 3).attr("id", divId + "-textarea");
    var button = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save");
    var icon = $("<i>").addClass("fas fa-save").attr("aria-hidden", "true");
    
    // Append the child elements to the new div
    button.append(icon);
    newDiv.append(hourDiv, textarea, button);
  
    // Set the hour content
    hourDiv.text(hour + ":00");
    
    // Load saved user input from local storage, if available
    var savedInput = localStorage.getItem(divId);
    if (savedInput) {
      textarea.val(savedInput);
    }
    
    // Add event listener to the Save button
    button.on("click", createSaveButtonHandler(divId));
    
    // Append the new div to the container element
    container.append(newDiv);
  }
  
  function createSaveButtonHandler(id) {
    return function() {
      var textarea = $("#" + id + " textarea");
      var userInput = textarea.val();
      localStorage.setItem(id, userInput);
    };
  }
});  