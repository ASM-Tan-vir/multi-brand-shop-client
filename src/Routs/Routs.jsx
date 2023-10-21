// import { createBrowserRouter } from "react-router-dom";
// import Root from "../Layout/Root";
// import Home from "../pages/Home/Home";
// import Accessories from "../pages/Accessories/Accessories";
// import About from "../pages/About/About";
// import Login from "../pages/Login/Login";
// import Registration from "../pages/Registration/Registration";
// import Event from "../pages/Event/Event";
// import PrivateRoute from "./PrivateRout";
// import NotFound from "../pages/NotFound";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root></Root>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>,
//         loader: () => fetch("/cardData.json"),
//       },
//       {
//         path: "/events/:id",
//         element: (
//           <PrivateRoute>
//             <Event></Event>
//           </PrivateRoute>
//         ),
//         loader: () => fetch("/cardData.json"),
//       },

//       {
//         path: "/accessories",
//         element: (
//           <PrivateRoute>
//             <Accessories></Accessories>
//           </PrivateRoute>
//         ),
//         loader: () => fetch("/productData.json"),
//       },
//       {
//         path: "/about",
//         element: (
//           <PrivateRoute>
//             <About></About>
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "/login",
//         element: <Login></Login>,
//       },
//       {
//         path: "/registration",
//         element: <Registration></Registration>,
//       },
//     ],
//   },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
// ]);

// export default router;
