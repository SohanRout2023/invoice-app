// import logo from './logo.svg';
import './App.css';
import Dashboard from './component/dashboard/Dashboard';
import Login from './component/login/Login';
import Register from './component/register/Register';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './component/dashboard/Home';
import Invoices from './component/dashboard/Invoices';
import NewInvoice from './component/dashboard/NewInvoice';
import Setting from './component/dashboard/Setting';
import InvoiceDetail from './component/dashboard/InvoiceDetail';


function App() {

   const myrouter=createBrowserRouter([
    {path: '', Component:Login},
       {path:'/login',Component:Login},
       {path:'/register', Component:Register},
       {path:'/dashboard', Component:Dashboard,children:[
        {path:'',Component:Home},
          {path:'home',Component:Home},
          {path:'invoices',Component:Invoices},
          {path:'new-invoice',Component:NewInvoice},
          {path:'setting',Component:Setting},
          {path:'invoice-detail',Component:InvoiceDetail}
       ]}

   ])
  return (
    <div>
      <RouterProvider router ={myrouter}></RouterProvider>
    </div>
  );
}

export default App;
