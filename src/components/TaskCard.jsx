import './TaskCard.css';
import Tag from './Tag';
import deleteIcon from '../assets/delete.png';
import editIcon from '../assets/edit.png';

const TaskCard = ({ title, tags, handleDelete, index, handleEdit }) => {
  return (
    <article className="task__card">
      <p className="task__text">{title}</p>
      <div className="task__card-bottom-line">
        <div className="task__card-tags">
          {tags.map((tag, index) => (
            <Tag
              key={index}
              tagName={tag}
              selected
            />
          ))}
        </div>
        <div className="task__icons">
          <div
            className="task__edit"
            onClick={() => handleEdit(title)}
          >
            <img
              src={editIcon}
              alt="Edit icon"
              className="task__edit-icon"
            />
          </div>
          <div
            className="task__delete"
            onClick={() => handleDelete(index)}
          >
            <img
              src={deleteIcon}
              alt="Delete icon"
              className="task__delete-icon"
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
