import { useState, useEffect } from 'react';

function TaskForm({ onSaveTask, editingTask, onCancelEdit }) {
  // Local state to manage form inputs
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');  
  // Populate form fields when editing a task, or reset when cleared
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title || '');
      setPriority(editingTask.priority || 'Medium');
      setStartDate(editingTask.startDate || '');
      setEndDate(editingTask.endDate || '');
    } else {
      setTitle('');
      setPriority('Medium');
      setStartDate('');
      setEndDate('');
    }
  }, [editingTask]);
  
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload on form submit

    // Basic validation: ignore empty or whitespace-only inputs
    if (!title.trim()) return;

    // Pass new task data up to parent component (App.jsx)
   onSaveTask({
      id: editingTask ? editingTask.id : Date.now(),
      title: title.trim(),
      priority,
      startDate,
      endDate,
      completed: editingTask ? editingTask.completed : false,
    });

    if (!editingTask) {
      setTitle('');
      setPriority('Medium');
      setStartDate('');
      setEndDate('');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          aria-label="Task title"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          aria-label="Task priority"
        >
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>
        <button type="submit" className="btn-add">
          {editingTask ? 'Update Task' : 'Add Task'}
        </button>
        {editingTask && (
          <button
            type="button"
            className="btn-cancel"
            onClick={onCancelEdit}
          >
            Cancel
          </button>
        )}
      </div>

      <div className="form-dates">
        <label className="date-field">
          <span>Start date:</span>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            aria-label="Start date"
          />
        </label>

        <label className="date-field">
          <span>End date:</span>
          <input
            type="date"
            value={endDate}
            min={startDate || undefined}
            onChange={(e) => setEndDate(e.target.value)}
            aria-label="End date"
          />
        </label>
      </div>
    </form>
  );
}

export default TaskForm;