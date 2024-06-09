import "./App.css";
import { FlowBuilder } from "./pages/flowBuilder/FlowBuilder";
import { Home } from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/chatflow" element={<FlowBuilder />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
