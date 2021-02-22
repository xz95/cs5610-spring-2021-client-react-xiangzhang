
import './App.css';
import CourseService from "./services/course-service";
import CourseEditor from "./components/course-editor";
import CourseManager from "./components/course-manager";
import {Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Route path="/courses" component={CourseManager}/>
        {/*<Route path="/editor" component={CourseEditor}/>*/}
        <Route path="/editor" render={(props) => <CourseEditor {...props}/>}/>
        {/*<div className="container-fluid">*/}
        {/*  <CourseManager/>*/}
        {/*  <CourseEditor/>*/}
        {/*</div>*/}
      </BrowserRouter>

  );
}

export default App;
