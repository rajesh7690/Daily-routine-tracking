import './App.css';

//components

import Header from './components/Header';
import TodoForm from './components/TodoFom';
import Todos from './components/Todos';

function App() {
  return (
    <div >
      <Header/>
      <TodoForm/>
      <Todos/>
    </div>
  );
}

export default App;
