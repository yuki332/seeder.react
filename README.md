# seeder.react

This is a seeder for any project that uses React.js and Sass.
It uses Webppack4 but manages js and css file differently.

<hr>

### Directory Structure

src --> sorce directory (all raw js / sass files here)

public --> all static files here

dist --> all compiled files here

[Reference Website](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)

### Usage

Run `npm install` to install all dependencies.
It uses Webpack4 and babel to compile React.

Run `npx webpack` after `npm install` has done successfully.

`main.js` and `main.css` will be created inside of `dist` directory by running `npx webpack` (this command is just test command. you will use `npm run watch` for develop).
