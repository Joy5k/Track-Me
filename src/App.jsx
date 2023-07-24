import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import { AmountProvider } from './Pages/AmountProvider/AmountProvider';

const App = () => {
  return (
    <div>
      <AmountProvider>

            <RouterProvider router={router}></RouterProvider>
      </AmountProvider>
 </div>
  );
};

export default App;
