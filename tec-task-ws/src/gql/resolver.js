const taskController = require("../controllers/task.controller");

const resolvers = {
  Query: {
    getTasks: (_, {id }) => taskController.getTasks(id),
  },
  Mutation: {
    //Tareas
    createTask: (_, { input }) => {
      return taskController.createTask(input);
    },
    //login: (_,{input}) => userController.login(input),
    //updateAvatar: (_,{file})=> userController.updateAvatar(file),
  },
};

module.exports = resolvers;
