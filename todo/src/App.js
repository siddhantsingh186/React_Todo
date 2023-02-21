import './App.css';
import {Provider} from 'react-redux'
import TodoList from './TodoList';
import store from './store';
import TodoForm from './TodoForm';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
