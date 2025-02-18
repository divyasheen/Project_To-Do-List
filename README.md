# 'TO DO' App Project
Our group presents an App of To-Do Tasks with some additional features that are not usually inplemented in mobile versions of such sort of apps. The choice was made on basis of the time frame for creating the code, solving issues of combining data from different branches, proper styling and finally deployment of the project.

<details>
  <summary>Contents: 🔽</summary>

- [About The Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Workflow](#workflow)
- [Usage](#usage)

</details>

### Built With

🔹[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
🔹[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)

## Getting Started
Work starts with an idea of which App we want to create. Then with the sketch in Excalidraw we create the structure of our App.

![Alt Text](.//src/assets/excalidraw_todo.png)

The next step is to assign tasks for every group-member based on quantity of components and complexity of project's functionality. For that purpose we choose Jira.
We also assign responsible manager for GitHub for creating the repo, branches, etc. And team-Lead for time-management and organisational matters.

![Alt Text](.//src/assets/jira_todo.png)

Taking into consideration requirements:

  - multiple pages components (react-router-dom, preferably also sending params from one page to another)
  - nested components (preferably sending props from one to another at least once)
  - use 3rd party API to fetch some data (get request) like: weather API, recipes API...
  - deploy on render
  - extra: one global state (useContext)
  - extra: useReducer

following steps are:

  * Picking colour scheme: #FFE9D0, #FFFED3, #FFD0D0, #BBE9FF, #B1AFFF
  * Creating 2 main and 9 subordinate components (routing and linking them)
  * Creating individula css file for each component. Handful approach for our project.
  * Nested components are imported and data is shared with sueState hook
  * Using 3rd party API to fetch data for insiprational quotes
  * Deploying on render
  * extra: one global state (useContext) is highly in use

[🔼 Back to top](#contents)
 
## Workflow 
Important daily procedure is to push, pull and merge branches for solving small portions of conflicts. Tracking daily updates to continue coding with up-to-date information. Also live communication to discuss following steps and required changes is a good practice for smooth workflow.

🔹To push your changes and get updated code from main to continue working:

-> Work in your branch
-> Push changes to your branch occassionally!
-> At EOD, merge your changes to main after taking a pull from main
-> Once your changes are merged to main, inform Github manager
-> After Github manager's successfully merging of all changes (Conflict resolution), come back in your branch
-> Make sure you do the following:
  -> git checkout main
  -> git pull
  -> git checkout "your branch"
  -> git merge main
-> VOILA! Now your code is UP-TO-DATE!

! After getting the code from main, if you get conflicts, resolve it and push again and if any error occures:

git push -f -u origin branchName

[🔼 Back to top](#contents)

## Usage
At first glance at our TO-DO App, it welcomes you with random phrase of wisdom or inspiration and surprises with animated logo. 

Button "Add" opens for you the form to create your to-do, choosing (or not) priority, category and due date. Although writing the text of your task is mandatory if you want it to be created. 
When deciding to assign "Due date", you will get a warning alert if you accidentally forgot about your task's deadline.
Also you can use "Go back" button if you change your mind.

For the list of your tasks, which are presented as colorful cards divided (or not) into various groups you are welcome to "Sort" them according to the level of priority (important, medium, low) and date of creation (new, old). And "Filter" will show you all, completed and pending tasks. 
For more convenience if the list of tasks is long, "Go up" button is a t your service.

Finally, the footer will revocer the contact information of our project-members.

We appreciate your time to discover the result of our work and trust in our skills and creativity!

[🔼 Back to top](#contents)