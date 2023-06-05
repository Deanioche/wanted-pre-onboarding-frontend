import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import useRedirect from "./hooks/useRedirect";

const Todo = lazy(() => import('./pages/Todo'));

function App() {
  useRedirect();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
