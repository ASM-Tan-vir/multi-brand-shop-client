// import { useContext } from "react";
// import { AuthContext } from "../Context/AuthProvider/AuthProvider";
// import { Navigate, useLocation } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);
//   const location = useLocation();

//   if (loading) {
//     return <span className="loading loading-bars loading-lg"></span>;
//   }

//   if (user) {
//     return children;
//   }

//   return <Navigate state={{ from: location }} to="/signIn" />;
// };

// export default PrivateRoute;
