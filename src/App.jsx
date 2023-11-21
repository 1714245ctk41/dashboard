import { useReducer } from "react";
import { RouterProvider } from "react-router-dom";
import {router} from "./routes";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { initialState, reducer } from './hooks/useAppContext';
import { AppContext } from './hooks/useContext';
import './App.css';
library.add(fas)


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
    <AppContext.Provider value={{state, dispatch}} >
      <RouterProvider router={router} />
    </AppContext.Provider>
  </div>
  )
};

export default App;
