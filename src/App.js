
import './App.css';
import CourseService from "./services/course-service";
import CourseEditor from "./components/course-editor";

function App() {
  return (
    <div className="container-fluid">
      <CourseService/>
      <CourseEditor/>
    </div>
  );
}

export default App;
