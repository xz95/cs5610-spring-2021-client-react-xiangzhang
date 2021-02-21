
import './App.css';
import CourseService from "./services/course-service";
import CourseEditor from "./components/course-editor";
import CourseManager from "./components/course-manager";

function App() {
  return (
    <div className="container-fluid">
      <CourseManager/>
      <CourseEditor/>
    </div>
  );
}

export default App;
