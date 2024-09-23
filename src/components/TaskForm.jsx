import './TaskForm.css';
import Tag from './Tag';

const TaskForm = ({
  setTasks,
  setSearchResults,
  taskData,
  setTaskData,
  edit,
  setEdit,
  tasks,
}) => {
  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return {
          ...prev,
          tags: filterTags,
        };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setTaskData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit !== '') {
      const editTask = tasks.find((task) => task.task === edit);
      const updatedTasks = tasks.map((task) =>
        task.task === editTask.task
          ? (task = {
              task: taskData.task,
              status: taskData.status,
              tags: taskData.tags,
            })
          : { task: task.task, status: task.status, tags: task.tags }
      );

      setTasks(updatedTasks);
      setEdit('');
      setTaskData({
        task: '',
        status: 'todo',
        tags: [],
      });
    }

    if (taskData.task !== '' && edit === '') {
      setTasks((prev) => {
        return [...prev, taskData];
      });
      setTaskData({
        task: '',
        status: 'todo',
        tags: [],
      });
    }
  };

  return (
    <header className="app__header header">
      <form>
        <input
          type="text"
          name="task"
          className="header__task-input"
          placeholder="Enter your task"
          onChange={handleChange}
          value={taskData.task}
        />

        <div className="header__task-form-bottom-line">
          <div className="header__task-wrapper">
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              selected={checkTag('HTML')}
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              selected={checkTag('CSS')}
            />
            <Tag
              tagName="JavaScript"
              selectTag={selectTag}
              selected={checkTag('JavaScript')}
            />
            <Tag
              tagName="React"
              selectTag={selectTag}
              selected={checkTag('React')}
            />
          </div>

          <div className="header__task-wrapper">
            <select
              className="header__task-status"
              onChange={handleChange}
              name="status"
              value={taskData.status}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button
              className="header__task-submit"
              type="submit"
              onClick={handleSubmit}
            >
              {edit ? 'Edit' : '+ Add Task'}
            </button>
          </div>
        </div>

        <div className="header__search-wrapper">
          <input
            className="header__search-input"
            type="text"
            placeholder="Search by title..."
            onChange={(e) => setSearchResults(e.target.value)}
          />
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
