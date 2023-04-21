const taskController = require("../controllers/task.controller");

const resolvers = {
  Query: {
    getTasks: (_,{_id}) => taskController.getTasks(_id),
  },
  Mutation: {
    //Tareas
    createTask: (_, { input }) => {
      return taskController.createTask(input);
    },
    updateTask: (_,{_id, input}) => taskController.updateTask(_id, input),
    deleteTask: async (_,{_id}) => taskController.deleteTask(_id),
  },
};

module.exports = resolvers;
