import { memo } from "react";
import { BrowserRouter,  RouterProvider } from "react-router-dom";
import {router} from "./routes";

const App = () => {
  console.log("hahah");
  return (
    <RouterProvider router={router} />
  )
};

export default App;
