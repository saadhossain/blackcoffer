import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routers/Routers';

function App() {
  const routers = routes;
  return (
    <div>
      <Toaster />
      <RouterProvider router={routers}>
      </RouterProvider>
    </div>
  );
}

export default App;