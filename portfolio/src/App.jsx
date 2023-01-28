import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { routes } from "./routes/routes";

function App() {

    return (
      <Provider >
        <RouterProvider router={routes} />
      </Provider>
    );
}

export default App
