# ✅ TaskFlow

A clean, responsive frontend task management (To-Do) web application built with **React**, **HTML5**, and **CSS3**, designed to help users organize daily tasks, filter by status or keyword, and persist data automatically in the browser via `LocalStorage`[cite: 1, 3].

## 🔗 Live Links

- **Live Demo**: project4taskmanager.netlify.app
- **GitHub Repository**: [https://github.com/munozjh/project-4](https://github.com/munozjh/project-4)

## ✨ Features

- **Add & Prioritize Tasks (`TaskForm.jsx`)**: Create tasks with a title and priority level (`Low`, `Medium`, `High`) using controlled form inputs, trim/empty-input validation, and `onSubmit` / `onChange` event handlers[cite: 3].
- **Interactive Task Management (`TaskItem.jsx`)**: Reusable task card/item component supporting completion toggles, strikethrough styling for completed tasks, color-coded priority badges (`High`, `Medium`, `Low`), and task deletion[cite: 3].
- **Search & Status Filtering (`FilterBar.jsx`)**: Filter tasks by `All`, `Active`, or `Completed` with `.active` button states, alongside instant keyword search filtering[cite: 3].
- **Multi-View Navigation & Live Stats (`Header.jsx` & `AboutSection.jsx`)**: Switch between `My Tasks` and `About` views while tracking real-time `Total`, `Completed`, and `Pending` task counts passed via props[cite: 2, 3].
- **LocalStorage Persistence (`App.jsx`)**: Automatically initializes tasks from `localStorage` (`taskflow_tasks`) and syncs updates whenever tasks change[cite: 3].
- **Responsive Modular CSS (`App.css`)**: Styled with CSS3, Flexbox, clean card/badge hierarchy, and mobile/tablet responsive adjustments (`@media (max-width: 600px)`)[cite: 2, 3].

## 🛠️ Tech Stack

- React (Functional Components, `useState`, `useEffect`, Props, Events & Conditional Rendering)[cite: 3]
- HTML5 & CSS3 (Flexbox & Media Queries)[cite: 2, 3]
- Vite
- Browser `LocalStorage` API[cite: 3]

## 🚀 How To Run

```bash
# Clone the repository
git clone [https://github.com/munozjh/project-4.git](https://github.com/munozjh/project-4.git)

# Open the project folder
cd project-4

# Install dependencies
npm install

# Start the development server
npm run dev