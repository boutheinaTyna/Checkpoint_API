import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Layout from "./components/Layout";
import ListProfile from "./components/ListProfile";
import ListUsers from "./components/ListUsers";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="ListUsers" element={<ListUsers />} />
                        <Route path="ListProfile/:id" element={<ListProfile />} />
                    </Route>
                </Routes>
      </header>
    </div>
  );
} 

export default App;

