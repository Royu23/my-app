import { Provider } from 'react-redux';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import MainContainer from './Components/Maincontainer';
import WatchPage from './Components/Watchpage';
import store from './Components/Utils/Store';



const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <MainContainer/>
    },
    {
      path: "watch",
      element: <WatchPage/>
    }

  ]
}])

function App() {
  return (
    <Provider store={store}>
    <div>
      <Header/>
      <RouterProvider router={appRouter}/>
      
    </div>
    </Provider>
  );
}

export default App;
