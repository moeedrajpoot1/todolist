const { models } = require("./index");

module.exports = {
  taskCreate: async (body) => {
    try {
      const task = await models.tasks.create({ ...body });
      return {
        response: task,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getTask: async () => {
    try {
      const task = await models.tasks.findAll({
        attributes: ["taskName", "taskInfo", "taskId"],
      });
      return {
        response: task,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  deleteTask: async (taskId) => {
    try {
      console.log("inside the model 1");
      const deleteTask = await models.tasks.destroy({
          where: { taskId: taskId },
        });
        console.log("inside the model ");

      return {
        response: deleteTask,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  updateTask: async ({ taskId, ...body }) => {
    try {
      const update = await models.tasks.update({ ...body },{where:{taskId:taskId}});
      return {
        response: update,
      };
      
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
