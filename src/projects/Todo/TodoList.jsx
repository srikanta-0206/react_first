import { MdDeleteForever } from "react-icons/md";
import { IoMdCheckbox } from "react-icons/io";

export const TodoList = ({ tasks, onDelete, onToggle, onClear }) => {
  return (
    <section className="task-section">
      <ul className="task-list">
        {tasks.map((task) => (
          <li className="task-item" key={task.id}>
            <span
              style={{
                textDecoration: task.checked ? "line-through" : "none",
              }}
            >
              {task.content}
            </span>
            <div className="task-actions">
              <button onClick={() => onToggle(task.id)}>
                <IoMdCheckbox color={task.checked ? "green" : "gray"} />
              </button>
              <button onClick={() => onDelete(task.id)}>
                <MdDeleteForever />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {tasks.length > 0 && (
        <button className="btn-clear" onClick={onClear}>
          Clear All
        </button>
      )}
    </section>
  );
};
