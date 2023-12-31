import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Employees from "./pages/Employees";
import Customers from "./pages/Customers";
import Todo from "./pages/Todo";
import Practice from "./pages/Practice";


function App() {
  return (
    <>
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Employees />} />
          <Route path="/customers" element={<Customers />}/>
          <Route path="/todo-list" element={<Todo />}/>
          <Route path="/practice" element={<Practice />}/>
          <Route path="*" element={<h2>Page does not exist</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
