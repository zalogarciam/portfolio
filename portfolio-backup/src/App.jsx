import "./App.css";
import { mainRoutes } from "./routes/mainRoutes";
import { RouterProvider } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={mainRoutes} er/>;
    </Provider>
  );
}

export default App;
