import './App.css';
import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';
import toDoIcon from './assets/direct-hit.png';
import doingIcon from './assets/glowing-star.png';
import doneIcon from './assets/check-mark-button.png';

const oldTasks = localStorage.getItem('tasks');

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  const [searchResults, setSearchResults] = useState([]);
  const [taskData, setTaskData] = useState({
    task: '',
    status: 'todo',
    tags: [],
  });
  const [edit, setEdit] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    if (confirm('Are you sure you want to delete this task?')) {
      const newTasks = tasks.filter((task, index) => index !== taskIndex);
      setTasks(newTasks);
    }
  };

  const handleEdit = (title) => {
    const editTodo = tasks.find((task) => task.task === title);

    setTaskData(() => {
      return {
        task: editTodo.task,
        status: editTodo.status,
        tags: editTodo.tags,
      };
    });
    setEdit(title);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <h1 className="app__title">To do App</h1>
      <TaskForm
        taskData={taskData}
        setTaskData={setTaskData}
        tasks={tasks}
        setTasks={setTasks}
        setSearchResults={setSearchResults}
        edit={edit}
        setEdit={setEdit}
      />
      <main className="app__main">
        <TaskColumn
          header="To do"
          icon={toDoIcon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          searchResults={searchResults}
        />
        <TaskColumn
          header="Doing"
          icon={doingIcon}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          searchResults={searchResults}
        />
        <TaskColumn
          header="Done"
          icon={doneIcon}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          searchResults={searchResults}
        />
      </main>
    </div>
  );
};

export default App;
