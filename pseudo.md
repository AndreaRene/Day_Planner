 AS AN employee with a busy schedule
======
## I WANT to add important events to a daily planner
### *SO THAT I can manage my time effectively*

GIVEN I am using a daily planner to create a schedule
======
 WHEN I open the planner
------

### *THEN the current day is displayed at the top of the calendar*

* moment

 WHEN I scroll down
------

### *THEN I am presented with time blocks for standard business hours*

* 9 - 5
* bootstrap grids 
..* 3 columns: 1 10 1 or 2 9 1

 WHEN I view the time blocks for that day
------

### *THEN each time block is color-coded to indicate whether it is in the past, present, or future*

*moment

WHEN I click into a time block
------ 

*click event?

 ### *THEN I can enter an event*

* bootstrap modals?
* text inputs?
* some other api?

WHEN I click the save button for that time block
------ 
* Save Button
* Need seperate identifiers
*something like 9am, 10am, etc?

### *THEN the text for that event is saved in local storage*

* get and set

 WHEN I refresh the page
------

### *THEN the saved events persist*

* Add Clear Events Button