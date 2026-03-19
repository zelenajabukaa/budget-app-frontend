import {Route, Routes } from "react-router-dom"
import './App.css'
import AddEarningPage from "./pages/AddEarningPage.tsx";
import EarningPage from "./pages/EarningPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import ExpensesPage from "./pages/ExpensesPage.tsx";
import AddExpensePage from "./pages/AddExpensePage.tsx";

function App() {
    return(
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/earnings' element={<EarningPage/>}/>
            <Route path='/expenses' element={<ExpensesPage/>}/>
            <Route path='/add-earning' element={<AddEarningPage/>}/>
            <Route path='/add-expense' element={<AddExpensePage/>}/>
        </Routes>
    )
}

export default App
