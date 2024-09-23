import './TaskColumn.css';
import TaskCard from './TaskCard';

const TaskColumn = ({
  header,
  icon,
  tasks,
  status,
  handleDelete,
  handleEdit,
  searchResults,
}) => {
  const taskArray = tasks
    .filter((task) => task.task.toLowerCase().includes(searchResults))
    .map(
      (task, index) =>
        task.status === status && (
          <TaskCard
            key={index}
            title={task.task}
            tags={task.tags}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            index={index}
          />
        )
    );

  return (
    <section className="task__column">
      <h2 className="task__column-heading">
        <img
          className="task__column-icon"
          src={icon}
          alt=""
        />
        {header}
      </h2>
      {taskArray}
    </section>
  );
};

export default TaskColumn;
