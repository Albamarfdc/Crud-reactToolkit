import './App.css';
import TasksForm from './componets/TasksForm';
import TasksList from './componets/TasksList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  //Cuando mi aplicacion cargue va a tener acceso a todo mi estado
  //const tasksState = useSelector(state => state.tasks);
  //Lo mismo que ver un useState por consola.
  //console.log(tasksState);

  return (
    <div className='bg-zinc-900 h-screen text-white'>
      <div className='flex items-center justify-center h-full '>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TasksList />} />
          <Route path='/create-task' element={<TasksForm />} />
          <Route path='/edit-task/:id' element={<TasksForm />} />
        </Routes>
      </BrowserRouter>
     </div>
    </div>
  );
}

export default App;
