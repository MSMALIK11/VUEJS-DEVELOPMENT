import { defineStore } from "pinia";

export const useMyTaskStore = defineStore("myTask", {
  state: () => ({
    myTask: [],
    id: 0,
  }),
  actions: {
    addMyTask(item) {
      this.myTask.push({ item, id: this.id++, completed: false });
    },

    deleteMyTask(itemId) {
      this.myTask = this.myTask.filter((obj) => {
        return obj.id !== itemId;
      });
    },

    toggleMyTask(idToFind) {
      const todo = this.myTask.find((obj) => obj.id === idToFind);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});
