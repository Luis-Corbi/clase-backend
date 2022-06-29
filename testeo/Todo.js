class Todos {
    constructor() {
      this.todos = [];
    }
  
    // Metodos
    list() {
      return this.todos;
    }
    add(tittle) {
      let todo = {
        title: tittle,
        complete: false,
      };
      this.todos.push(todo);
    }
  
    complete(title) {
      if (this.todos.length === 0) {
        throw new Error("No hay tareas");
      }
  
      let todoFound = false;
      this.todos.forEach((todo) => {
        if (todo.title === title) {
          todo.complete = true;
          todoFound = true;
          return;
        }
      });
      if (!todoFound) {
        throw new Error("Tarea no completada");
      }
    }
  }
  
  module.exports = Todos;
  