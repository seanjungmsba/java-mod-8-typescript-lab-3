# How to Run TypeScript Programs

## Introduction

The repo has the `ts-node` and `nodemon` dependencies installed to make running
TypeScript programs easier. Here's what they do:

- `ts-node`: runs TypeScript code without compilation.
- `nodemon`: watches a file for change and automatically runs the script again
  when changes are made.

## Commands

There are two script commands in this package:

- `start`: running `npm start` will invoke `ts-node` to run the `index.ts` file
  in the `src` directory without compilation.
- `watch`: running `npm run watch` will invoke `nodemon` to watch the `index.ts`
  file.
- `build`: running `npm build` will generate a `dist` folder with JavaScript
  files.

If you want to use `ts-node` or `nodemon` to run other files, use
the `ts-node {filepath}` or `nodemon {filepath}` commands.
