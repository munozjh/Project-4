// Reusable component rendered for each individual task in the list
function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-info" onClick={() => onToggleTask(task.id)}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => {}} // Handled by parent div click
          aria-label={`Mark ${task.title} as completed`}
        />
        <span className="task-title">{task.title}</span>
        {/* Conditional badge styling based on task priority */}
        <span className={`badge badge-${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
      </div>

      <button
        className="btn-delete"
        onClick={() => onDeleteTask(task.id)}
        aria-label={`Delete ${task.title}`}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;