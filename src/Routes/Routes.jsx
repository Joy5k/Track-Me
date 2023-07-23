import { createBrowserRouter } from "react-router-dom";
import IncomeForm from "../Pages/Income/IncomeForm";
import ExpenseForm from "../Pages/Expense/ExpenseForm";
import Home from "../Pages/Home/Home";
import Main from "./layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/income',
                element:<IncomeForm></IncomeForm>
            },
            {
                path: "/expense",
                element:<ExpenseForm></ExpenseForm>
            },
            {
                path: "/",
                element:<Home></Home>
            }

        ])
    },
   
])