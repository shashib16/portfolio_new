import {create} from 'zustand';

const useStore = create(set => ({
  todos: [],
  addTodo: (todo) => set(state => ({ todos: [...state.todos, todo] })),
  removeTodo: (index) => set(state => ({
    todos: state.todos.filter((_, i) => i !== index)
  })),
  updateTodo : (updatedTodos) => set({todos: updatedTodos})
}));

export default useStore;
