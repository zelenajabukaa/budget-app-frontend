import {Route, Routes } from "react-router-dom"
import './App.css'
import HomePage from "./pages/HomePage.tsx";
import AddEarningPage from "./pages/AddEarningPage.tsx";

function App() {
    return(
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/add-earning' element={<AddEarningPage/>}/>
        </Routes>
    )
}

export default App
