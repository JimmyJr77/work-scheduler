# Work Day Scheduler

## Description

The Work Day Scheduler is a simple calendar application that allows users to save events for each hour of a typical working day (9am-5pm). The motivation behind building this project was to create a tool that helps individuals with busy schedules effectively manage their time. By providing a user-friendly interface, the Work Day Scheduler enables users to easily add important events and stay organized throughout the day.

The problem this project solves is the need for a convenient and accessible way to plan and track daily activities. With the Work Day Scheduler, users can quickly add events, view time blocks color-coded to indicate past, present, and future time periods, and save their events for later reference.

Throughout the development of this project, I learned how to leverage the Day.js library to handle date and time manipulation in the browser. This library proved to be a valuable tool for working with time-based data and provided the necessary functionality to create a dynamic and responsive calendar application.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To install and run the Work Day Scheduler locally, follow these steps:

1. Clone the GitHub repository [https://github.com/JimmyJr77/work-scheduler](https://github.com/JimmyJr77/work-scheduler) to your local machine.
2. Navigate to the project's root directory.
3. Open the `index.html` file in your preferred web browser.

alternatively, you can access the deployed application at https://jimmyjr77.github.io/work-scheduler/

## Usage

Once you have the Work Day Scheduler running, you can start utilizing its features to manage your daily schedule. Here's a brief overview of how to use the application:

1. The current day is displayed at the top of the calendar.
2. Scroll down to view the time blocks for the standard business hours of 9am-5pm.
3. Each time block is color-coded to indicate whether it is in the past, present, or future.
4. Click into a time block to enter an event or update an existing event.
5. To save an event, click the save button for the respective time block. The text for that event will be saved in local storage.
6. If you refresh the page, the saved events will persist.

Below is an example screenshot of the Work Day Scheduler:

Full site view:
![Work Day Scheduler](/Assets/images/wd_sched_full.png)

Current date displayed at top:
![Current date](/Assets/images/wd_sched_date.png)

Form fillable schedule blocks that save to local:
![Schedule blocks](/Assets/images/wd_sched_formfill.png)

## Credits

This was an individual project, but credit is always due to my instructors, mentors, and classmates at edX.

The Work Day Scheduler project utilizes the following third-party assets:

- [Day.js](https://day.js.org/en/) - A date utility library used for working with date and time.

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).  
