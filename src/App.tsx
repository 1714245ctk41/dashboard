import { memo } from "react";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";

const App = () => {
  console.log("hahah");
  return <RouterProvider router={routers} />;
};

export default memo(App);
