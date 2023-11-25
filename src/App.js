import {RouterProvider,createBrowserRouter} from "react-router-dom";
import Chatpage from "./pages/Chatpage";
import "./App.css"
import Login from "./pages/Login";
import SignUp from "./pages/SignUp"
import Welcome from './pages/Welcome'
import ChatArea from './pages/ChatArea'
import CreateGroup from "./pages/CreateGroup"
import Onlineuser from './pages/Onlineuser'
import Onlinegroup from './pages/Onlinegroup'
const router=createBrowserRouter([
  {path:"/",
  element:<Login></Login>,
  },
  {
    path:"/signup",
    element:<SignUp></SignUp>,
  },
  {
    path:"/chat",
    element:<Chatpage/>,
    children:[
      {
        index:true,
        element:<Welcome></Welcome>,
      },{
        path:"chatarea",
        element:<ChatArea/>
      },{
        path:"useronline",
        element:<Onlineuser/>
      },{
        path:"grouponline",
        element:<Onlinegroup/>
      },{
        path:"creategroup",
        element:<CreateGroup/>
      }
    ]
  }

])
function App() {
  return (
    <>
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div> 
    </>
  );
}

export default App;
