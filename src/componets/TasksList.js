import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import { Link } from 'react-router-dom';

function TasksList() {
  const tasks = useSelector((state) => state.tasks);
  //console.log(tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className='w-4/6'>
      <h1 className='text-3xl font-bold text-center'>Crud Tasks</h1>
      <header className='flex justify-between items-center py-6'>
      <h1 className='text-lg text-center'>Tasks Number {tasks.length}</h1>
        <Link to='/create-task' className=' bg-green-500 px-2 py-1 rounded-md text-md hover: hover:bg-green-700'>Create Task</Link>
      </header>
      
      <div className='grid grid-cols-3 gap-4'>
      {tasks.map((task) => (
        <div key={task.id} className='bg-neutral-700 p-4 rounded-md'>
          <header className='flex justify-between'>
          <h3>{task.title}</h3>
            <div className='flex gap-x-2'>
              <Link to={`/edit-task/${task.id}`}
              className='bg-blue-400 px-2 py-1 text-xs rounded-md hover:bg-blue-600'>Edit</Link>
            <button onClick={() => handleDelete(task.id)} className='bg-red-500 px-2 py-1 text-xs rounded-md hover:bg-red-700'>Delete</button>
          </div>
          </header>
          <p>{task.description}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default TasksList;
