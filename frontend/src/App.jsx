import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MainContent from "./components/MainContent";
import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import ViewTransaction from "./pages/ViewTransaction";

// import Footer from "./components/Footer";
function App() {
  const Layout = () => {
    return (
      <div className=" min-h-screen bg-[#fcf6f9]  ">
        <MainContent />

        {/* <Footer /> */}
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/income",
          element: <Income />,
        },
        {
          path: "/expense",
          element: <Expense />,
        },
        {
          path: "/transaction",
          element: <ViewTransaction />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
  // return (
  //   <>
  //     <div className=" p-5 m-5 bg-red-100">
  //       <MainContent />
  //     </div>
  //   </>
  // );
}

export default App;
