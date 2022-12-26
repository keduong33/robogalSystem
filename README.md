## Getting Started
### Setup:
Install the dependencies:
```bash
npm install
```
### Test Run
Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## File Structure
### Pages Folder
- The files in this folder should act as skeletons of the page. It should have minimum customized CSS and number of functionalities
- The file should mostly call components from the Component folder
- **index** --> OUR USER HOMEPAGE
- *Current Convention*:
 - I try to use folders as little as I can --> because nextjs routes pages like a directory
 - The naming I am not too sure for now but I try to make it as simple and easy to understand as possible

### Component Folder
- Most of the files in this folder should be reusable in different context
- These files will have the functionalities and design of the feature
- *Current convention*:
  - Most of the files end with **Comp** to indicate it is a component (except for SecurityCheck --> right now i'm using it like a class? Maybe in the future I'll create a folder outside for Security Only Purpose)
  - The naming should be easy to understand as it is written/said
  - If multiple components is part of a feature, we should put it in a folder

### Authentication Folder
- The file has different functions that manage the authentication process of user (login, logout, etc.)
- If you wanna add different sign-in methods, do it here
- I still haven't implemented Google Sign-in :P

### Config Folder
The configuration file of firebase is stored in here --> Replace the SDK to hook it up to your database

### Styles Folder
This folder has all the global styles (default and customised) --> modify the 

## OTHERS
- Nextjs has some naming conventions itself so be careful when you do it --> It will warn you anw, don't worry about it