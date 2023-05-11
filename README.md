## TMA Notezy - A Note Taking App
**Started on:** April 12, 2023
**Finished on:** May 12, 2023
> **Deploy app: https://tma-notezy.vercel.app/**

**Developer:** Nguyen Tri Minh
**Major:** Front-end Web Developer
**TMA Batch 40 Internship Program**


------------
### Main features
User could:
- Create new accounts
- Sign in to the web
- Create new notes
- Search for notes via their titles
- View notes
- Edit and delete notes
- Sign out (user is automatically signed out if session is expired)

------------

### Back-end Side
Source code is available at the **/api** directory
Technologies and toolkits used:
- **Node.js** and **Express.js** to build the API
- **MySQL** as the database, remote using **[CleverCloud](https://www.clever-cloud.com/ "CleverCloud")**
- Deploy using **[Cyclic](https://www.cyclic.sh/ "Cyclic")**
- Encode user passwords, sign and validate token using **JSON Web Token**. As a result, user passwords in the database are all encoded; sign in sessions are managed accordingly
- API is structured using the **Service** -** Controller** -** Router** concept:
1. **Service:** Handles direct connections with the database
2. **Controller:** Manages functions to be executed on requesting the API
3. **Router:** Exports the API endpoints

------------
### Front-end Side
Source code is available at the **/front-end** directory
Technologies and toolkits used:
- **[React](https://react.dev/ "React")**, **HTML**  and **CSS** to build the UIs
- CSS libraries: **[Bootstrap](https://getbootstrap.com/ "Bootstrap") and [React Bootstrap](https://react-bootstrap.github.io/ "React Bootstrap")**
- Deploy using **[Vercel](https://vercel.com/ "Vercel")**
- App is structured using the **Model** -** Controller** -** View** (**MVC**) concept:
1. **Model:** Handles direct requests to the API endpoints
2. **Controller:** Manages functions to be executed from the UI components
3. **View:** Handles the UI components of the app. View is divided into multiple components in order to reuse them if possible
- Save states using **[Redux](https://redux.js.org/ "Redux")** and **[Redux Thunk](https://github.com/reduxjs/redux-thunk "Redux Thunk")**. Redux system is structured using the **Reducer** - **Container** - **Actions** concept. Some states such as sign in detection or token validation are needed to be implemented with Redux

------------

Any feedback or contribution is always welcome!
