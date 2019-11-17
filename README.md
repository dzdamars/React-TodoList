Author : Dzumaratin Damar Sasongko

# To Do List

### Run locally

* Run `yarn-install`
* Run `yarn start`

-- If any errors Like This when The application was Running
"
	./src/index.scss
	Module build failed: Error: Node Sass does not yet support your current environm
	ent: Windows 64-bit with Unsupported runtime (72)
	For more information on which environments are supported please see:
	https://github.com/sass/node-sass/releases/tag/v4.9.2
"

* Please Run `yarn add --force node-sass`
* Then Run `yarn start` again

### Description

This project uses React.js as a UI library and Redux for state management.

Data is saved in localStorage and Redux state.

User can:

* Add, edit and remove todo items
* See filtered todos: all, complete and incomplete
* Search through todos (lowercase and uppercase letters matters)
* Mark todos as completed or incompleted
* Drag and drop todos to change their index
