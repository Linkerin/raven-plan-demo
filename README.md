[![header](./readme_images/header.svg)](https://ravenplan.com)

# Raven Plan

## Contents

[Project description](#description)
[Technology stack](#stack)
[Planned features](#features)

## About <a id="about"></a>

This is an interactive _demo_ version of a task manager application that started as a [CS50x](https://cs50.harvard.edu/x) final project - **Raven Plan**. The main idea was to create a convenient, easy-to-use and a fancy looking application to manage a simple tasks list. This is not a daily planner or calendar, just a to-do list that uses emoji to distingush your tasks.

> Currently this project is **frozen** and its' further development is questionable. The last version was commited in December, 2021 and since then only minor changes were made to publish a demo version.

![Raven Plan mockup](./readme_images/rp_screen.png)

There was a bunch of ideas how to improve the application:

- [ ] Create a different route and logic for everyday routine tasks.
- [ ] Embed _Spotify_ or other music provider controls.
- [ ] Implement Task creation from e-mails and via Telegram bot.
- [ ] Bussiness functions: automatic reports for managers, collaboration on tasks with colleagues, task proposal from the manager.
- [ ] The Eisenhower Matrix generation based on the tasks list.
- [ ] Implement a storage for images.
- [ ] Make **Raven Plan** a PWA.

## Technology stack <a id="stack"></a>

### Frontend <a id="frontend"></a>

The demo version uses [React](https://reactjs.org) template by [Vite](https://vitejs.dev). Routing is implemented with [React Router](https://reactrouter.com/). [i18next](https://www.i18next.com) is used for different laguages support and [emoji-picker-react](https://www.npmjs.com/package/emoji-picker-react) provides Emoji during task creation. Weather forecast is received from [OpenWeather](https://openweathermap.org).

### Backend <a id="backend"></a>

Initially, Raven Plan was a RESTful application that used [Express.js](https://expressjs.com) as an API server. Authentication was implemented via JWT (using access and refresh tokens) and for that purpose [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) and [bcrypt](https://www.npmjs.com/package/bcrypt) packages were used in the project. [MongoDB](https://www.mongodb.com) was chosen as a fast and easy-to-use database operated from Express.js via [mongoose](https://mongoosejs.com). [Nodemailer](https://www.npmjs.com/package/nodemailer) was chosen for sending account activation e-mails.
