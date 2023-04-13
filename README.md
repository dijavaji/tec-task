"# tec-task"

# Technical Interview Proposal

This is my solution for To-do app: React code challenge Here's an overview of the application structure:

## Problem Description
The goal of this challenge is to create a simple To-Do mobile app in React. You can use NextJs or create-react-app to develop the frontend of this app.

The API must be developed with NodeJs, GraphQL and must allow the CRUD to a SQLite base or other similar To-Do ones.

dashboard screen

In this screen the user can see and manage all the tasks that were created, as well as select them as “complete”. Tasks appear in order of "creation" sorted from latest to earliest. Also, if the user goes to the "Completed Tab", the user can mark the task as "incomplete", if the user goes to Incomplete he will see all the incomplete tasks. When the user taps "Add a task", the app navigates to "Add tasks". The application must be connected to the API to allow its data persistence.

The Favorites, Search, Alert, Burger Menu tab is not required for the scope of this test, we only need the UI for those features.

API

It must allow the CRUD of TO-DOs and have the following Queries and Mutations: getTodos, createTodo, updateTodo, deleteTodo.

## Solution Overview
For development used the following technologies.
Development Ide
Atom
Apollo Client
Postman
Source control
• GIT
Database
• MongoDB
Backend
•Nodejs
•GraphQL
Frontend
Reactjs
Methodology
• Scrum


The tec-task solution contains a two project:
tec-task-app
Is the frontend project this project contains efficient and sophisticated single-page apps

tec-task-ws
Is the backend project this project contains all the classes which are used to manipulate the logic business of application, necessary data model and components the graphQl-api type.

## Available Scripts

In the project directory tec-task-ws , you can run:

## Development server

### `npm run start`

Builds the app for production to the `build` folder.\
It correctly bundles package in production mode and optimizes the build for the best performance.

### `npm run dev`
Run Nodejs applications Navigate to `http://127.0.0.1:4000/`. You have the nexts apis built for creating, retrieving, updating, deleting and searching tasks.


In the project directory tec-task-app , you can run:

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.


