const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Task {
    id: ID
    name: String!
    description: String
    limitDate: String!
    startTime: String
    finishTime: String
    remind: String
    repeat: String
    complete: Boolean!
    createAt: String
  }
  input TaskInput {
    name: String!
    limitDate: String!
    complete: Boolean!
    createdBy: String!
    createAt: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  type Query {
    getTasks: [Task]
  }
  type Mutation {
    #Tareas
    createTask(input: TaskInput): Task,
    updateTask(_id: String, input: TaskInput): Task,
    deleteTask(_id: String): Task
  }
`;

module.exports = typeDefs;
