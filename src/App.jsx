import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Home from './pages/Home';
import Auth from './pages/Auth';
import useRedirect from "./hooks/useRedirect";

const Todo = lazy(() => import('./pages/Todo'));

function App() {
  useRedirect();

  const authPath = ["/signin", "/signup"];

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Auth path="/signin"/>} />
        <Route path="/signup" element={<Auth path="/signup"/>} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
