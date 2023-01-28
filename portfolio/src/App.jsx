import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { mainRoutes } from "./routes/mainRoutes";

function App() {

    return (
      <Provider >
        <RouterProvider router={mainRoutes} />
      </Provider>
    );
}

export default App
