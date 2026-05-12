import gulp from "gulp";
import shell from "gulp-shell";

// default task 
const build = shell.task("parcel index.html");

// test task 
const test = shell.task("mocha test/shuffle.js");

// cypress task 
const cypress = shell.task("npx cypress run");

export { build as default, test, cypress };