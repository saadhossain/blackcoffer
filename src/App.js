import { ToastBar } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routers/Routers';

function App() {
  const routers = routes;
  return (
    <div>
      <RouterProvider router={routers}>
        <ToastBar/>
      </RouterProvider>
    </div>
  );
}

export default App;