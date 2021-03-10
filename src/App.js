//
// import './App.css';
// import CourseService from "./services/course-service";
// import CourseEditor from "./components/course-editor";
// import CourseManager from "./components/course-manager";
// import {Route, BrowserRouter} from "react-router-dom";
//
// function App() {
//   return (
//       <BrowserRouter>
//         <Route path="/courses" component={CourseManager}/>
//         {/*<Route path="/editor" component={CourseEditor}/>*/}
//         <Route path="/editor" render={(props) => <CourseEditor {...props}/>}/>
//         {/*<div className="container-fluid">*/}
//         {/*  <CourseManager/>*/}
//         {/*  <CourseEditor/>*/}
//         {/*</div>*/}
//       </BrowserRouter>
//
//   );
// }
//
// export default App;

import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"

function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
          <Route path="/" exact={true}>
            <Home/>
          </Route>
          <Route path="/courses">
            <CourseManager/>
          </Route>
          {/*<Route path="/courses/:layout/edit/:courseId" exact={true} render={(props) => <CourseEditor {...props}/>}/>*/}
          <Route path={[
            "/courses/:layout/edit/:courseId",
            "/courses/:layout/edit/:courseId/modules/:moduleId",
            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"
          ]}
                 exact={true}

                 render={(props) => <CourseEditor {...props}/>}/>
        </div>
      </BrowserRouter>
  );
}

export default App;