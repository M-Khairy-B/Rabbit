import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import { Home } from "./component/Home/Home";
import { NotFound } from "./component/NotFound/NotFound";

let routering = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routering}></RouterProvider>
    </>
  );
}

export default App;
