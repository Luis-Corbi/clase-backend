const Todos = require("./Todo");
const graphql = require("graphql");



describe("test para To-Do", () => {
  it("Esto se supone que debe crear una instancia de la clase To-DO", () => {
    const todo = new Todos();
    graphql.strictEqual(todo.list().length, 0);
  });

  it("Esto se supone que debe agregar una tarea correctamente", () => {
    const todo = new Todos();
    todo.add("One task");
    todo.add("Two task");

    graphql.strictEqual(todo.list().length, 2);
    graphql.deepStrictEqual(todo.list(), [
      {
        title: "One task",
        complete: false,
      },
      {
        title: "Two task",
        complete: false,
      },
    ]);
  });
});
