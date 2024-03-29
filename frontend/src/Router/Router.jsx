import {createBrowserRouter, Navigate,Route, Routes,useLocation} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import Contact from "../Pages/Contact";
import JobDetails from "../Pages/JobDetails";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import UpdateJob from "../Pages/UpdateJob";
import ResumeUploader from "../Pages/ResumeUploader";
import Mode from "../Pages/Mode";
import Dashboard from "../Pages/Dashboard";
import Error from "../Pages/Error";
import JobSeekerForm from "../Pages/JobSeekerForm";
import JobseekerInfo from "../Pages/JobseekerInfo";

// function Layout(){
//   const user = true;
//   const location = useLocation();

//   return 
// }


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      { path:"/:email", 
          element:<Home/>,
        },
        { 
          path:"/post-job/:email",  
          element:<CreateJob/>
        },
        {
          path:"/my-job/:email",  
          element:<MyJobs/>
        },
        {
          path:"/contact/:email",  
          element:<Contact/>
        },
        {
          path:"/job/:id",  
          element:<JobDetails/>
        },
        
      ]
  },
  {
      path:"/login",  
      element:<Login/>,      
  },
  {
      path:"/sign-up",  
      element:<SignUp/>
  },
  {
      path:"/resumeUploader",
      element:<ResumeUploader/>
  },
  {
      path:"/mode/:email",
      element:<Mode/>
  },
  {
      path:"/dashboard",
      element:<Dashboard/>
  },
  {
    path:"*",
    element:<Error/>
  },
  {
    path:"/jobseeker",
    element:<JobSeekerForm/>
  },
  {
      path:"/jobseeker-info/:id",
      element:<JobseekerInfo/>
  },
  {
    path:"/edit-jobs/:id",
    element:<CreateJob/>
}
  
  
  
]);

export default router;


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//        <Route path='' element={<Home/>} />
//        <Route path='about' element={<About/>} /> 
//        <Route path='contact' element={<Contact/>} />
//        <Route path='user/:userid' element={<User/>} />
//        <Route 
//          loader={githubInfoLoader}
//          path='github'
//          element={<Github/>} 
//        />
//     </Route>
//   )
// )

// export default router;


// const router =createBrowserRouter([
  // {
//       path : '/',
//       element:<Layout/>,
//       children:[
//           {
//               path:"",
//               element:<Home/>
//           },
//           {
//               path:"about",
//               element:<About/>
//           },
//           {
//             path:"contact",
//             element:<Contact/>
//           }
//       ]

//   }
// ])

// Approach -2
