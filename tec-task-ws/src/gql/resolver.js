const taskController = require("../controllers/task.controller");

const resolvers = {
  Query: {
    getTasks: (_, ) => taskController.getTasks(null),
  },
  Mutation: {
    //Tareas
    createTask: (_, { input }) => {
      return taskController.createTask(input);
    },
    updateTask: (_,{_id, input}) => taskController.updateTask(_id, input),
  },
};

module.exports = resolvers;
