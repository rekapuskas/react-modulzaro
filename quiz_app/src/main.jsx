import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Results from "./Results.jsx";
import PointContextProvider from "./PointContextProvider.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "results", element: <Results /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PointContextProvider>
      <RouterProvider router={router} />
    </PointContextProvider>
  </StrictMode>
);
