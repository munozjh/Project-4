// Helper function to calculate deadline traffic light status
function getDeadlineStatus(endDate, completed) {
  if (completed) {
    return { color: 'green', label: 'Done', title: 'Task completed' };
  }

  if (!endDate) {
    return { color: 'neutral', label: 'No due date', title: 'No end date set' };
  }

  // Compare dates at midnight local time to avoid timezone shifts
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [year, month, day] = endDate.split('-').map(Number);
  const due = new Date(year, month - 1, day);
  due.setHours(0, 0, 0, 0);

  const diffTime = due - today;
  const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (daysLeft <= 1) {
    return {
      color: 'red',
      label: daysLeft < 0 ? 'Overdue' : daysLeft === 0 ? 'Due today' : 'Due tomorrow',
      title: `${daysLeft} day(s) remaining`,
    };
  }

  if (daysLeft <= 3) {
    return {
      color: 'yellow',
      label: `${daysLeft} days left`,
      title: `${daysLeft} days remaining`,
    };
  }

  return {
    color: 'green',
    label: `${daysLeft} days left`,
    title: `${daysLeft} days remaining`,
  };
}

function TaskTable({ tasks, onToggleTask, onEditTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p className="empty-state">No tasks match your current view.</p>;
  }

  return (
    <div className="table-responsive">
      <table className="task-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            const status = getDeadlineStatus(task.endDate, task.completed);
            const hasDates = task.startDate || task.endDate;

            return (
              <tr
                key={task.id}
                className={task.completed ? 'row-completed' : ''}
              >
                {/* Column 1: Task title, checkbox & dates */}
                <td className="task-cell">
                  <div className="task-cell-main">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => onToggleTask(task.id)}
                      aria-label={`Mark ${task.title} as completed`}
                    />
                    <div>
                      <span className="task-title">{task.title}</span>
                      {hasDates && (
                        <div className="task-dates">
                          {task.startDate && <span>Start: {task.startDate}</span>}
                          {task.startDate && task.endDate && <span> • </span>}
                          {task.endDate && <span>End: {task.endDate}</span>}
                        </div>
                      )}
                    </div>
                  </div>
                </td>

                {/* Column 2: Priority */}
                <td>
                  <span className={`badge badge-${task.priority.toLowerCase()}`}>
                    {task.priority}
                  </span>
                </td>

                {/* Column 3: Traffic light dot (Red, Yellow, Green) */}
                <td>
                  <div className="status-cell" title={status.title}>
                    <span className={`status-dot dot-${status.color}`} />
                    <span className="status-text">{status.label}</span>
                  </div>
                </td>

                {/* Column 4: Edit & Delete buttons */}
                <td className="actions-cell">
                  <button
                    type="button"
                    className="btn-edit"
                    onClick={() => onEditTask(task)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn-delete"
                    onClick={() => onDeleteTask(task.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;