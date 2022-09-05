import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Description',
    completed: false,
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Description',
    completed: false,
  },
  {
    id: '3',
    title: 'Task 3',
    description: 'Description',
    completed: false,
  },
];

// es lo mismo que hacer:
//  const [state, setState] = useState(initialState)
const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;

      const updateTask = state.find((task) => task.id === id);
      if (updateTask) {
        updateTask.title = title;
        updateTask.description = description;
      }
    },

    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
  },
});

// Cuando se export const... solo una parte
//Cuando se exporta asi, se exporta todo.
export default taskSlice.reducer;
export const { addTask, deleteTask, editTask } = taskSlice.actions;
//para poder acceder a la funcion addTask la importo
