import Login from "./Login"

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";

const Body = () => {

  const appRoute = createBrowserRouter([
    {
      path: '/',
      element :<Login/>

    },
    {
      path: '/browse',
      element:<Browse/>
    }
  ])
  return (
    <div>
      <RouterProvider router={appRoute}/>
    </div>
  );
}
export default Body;