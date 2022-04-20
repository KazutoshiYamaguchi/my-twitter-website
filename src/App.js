import "./App.css";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Timeline } from "./components/timeline/Timeline";

function App() {
  return (
    <div className="app">
      <Sidebar className="sidebar" />
      <Timeline className="timeline" />
    </div>
  );
}

export default App;
