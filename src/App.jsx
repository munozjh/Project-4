import { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import FilterBar from './components/FilterBar';
import TaskTable from './components/TaskTable';
//import TaskItem from './components/TaskItem';
import AboutSection from './components/AboutSection';
import './App.css';

function App() {
  // Initialize tasks from LocalStorage if available
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('taskflow_tasks');
    return savedTasks ? JSON.parse(savedTasks) : [
      { 
        id: 1, 
        title: 'Review React components and props',
        priority: 'High', 
        startDate:'2026-11-25',
        endDate:'2026-11-27',
        completed: false, 
      },
      { id: 2, 
        title: 'Deploy frontend project to GitHub Pages', 
        priority: 'Medium', 
        startDate:'2026-11-26',
        endDate:'2026-12-05',
        completed: false }
    ];
  });

  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('tasks'); // Controls navigation view
  const [editingTask,setEditingTask] = useState(null);

  // Save tasks to LocalStorage whenever the tasks array changes
  useEffect(() => {
    localStorage.setItem('taskflow_tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add new task or update an existing one
  const handleSaveTask = (taskData) => {
    if (editingTask) {
      setTasks(
        tasks.map((task) => (task.id === taskData.id ? taskData : task))
      );
      setEditingTask(null);
    } else {
      setTasks([taskData, ...tasks]);
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setActiveTab('tasks');
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  // Toggle completed status
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
   if (editingTask && editingTask.id === id) {
      setEditingTask(null);
    }
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filter tasks based on status and search query
  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === 'All' ||
      (filter === 'Active' && !task.completed) ||
      (filter === 'Completed' && task.completed);

    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  // Calculate summary stats
  const taskStats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.completed).length,
    pending: tasks.filter((t) => !t.completed).length,
  };

  return (
    <div className="app-container">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        taskStats={taskStats}
      />

      <main className="main-content">
        {/* Conditional rendering based on active navigation tab */}
        {activeTab === 'tasks' ? (
          <>
            <TaskForm 
              onSaveTask={handleSaveTask}
              editingTask={editingTask}
              onCancelEdit={handleCancelEdit}
            />
            <FilterBar
              filter={filter}
              setFilter={setFilter}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <TaskTable
            tasks={filteredTasks}
            onToggleTask={toggleTask}
            onEditTask={handleEditTask}
            onDeleteTask={deleteTask}
            />
          </>
        ) : (
          <AboutSection />
        )}
      </main>
    </div>
  );
}

export default App;