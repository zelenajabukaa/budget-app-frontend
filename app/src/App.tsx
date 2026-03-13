import {Route, Routes } from "react-router-dom"
import './App.css'
import AddEarningPage from "./pages/AddEarningPage.tsx";
import EarningPage from "./pages/EarningPage.tsx";

function App() {
    return(
        <Routes>
            <Route path='/' element={<EarningPage/>}/>
            <Route path='/add-earning' element={<AddEarningPage/>}/>
        </Routes>
    )
}

export default App
