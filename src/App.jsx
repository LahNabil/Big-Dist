import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import Liste_Batterie from './pages/Liste_Batterie';
import BatteryDetails from './pages/BatteryDetails'
import{
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/batteries",
    element: <Liste_Batterie/>
  },
  {
    path:"/aboutUs",
    element:<About/>
  },
  {
    path:"/batterydetails/:batteryId",
    element:<BatteryDetails/>
  },
  {
    path:"/contactUs",
    element:<ContactUs/>
  }
]);



function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
