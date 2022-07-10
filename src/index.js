import React from 'react';
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './routes/Home';
import './App.css';
import AddTodo from './routes/AddTodo';
import EditTodo from './routes/EditTodo';
import Setting from './routes/Setting';

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="add" element={<AddTodo />} />
          <Route path="edit/:id" element={<EditTodo />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
