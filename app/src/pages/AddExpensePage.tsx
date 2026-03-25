import Header from "../components/header/Header.tsx";
import AddExpenseForm from "../components/forms/AddExpenseForm.tsx";
import {Typography} from "antd";


function AddExpensePage(){
    return (
        <div>
            <Header/>
            <Typography.Title style={{color: 'white', justifySelf: 'center'}}>Ausgabe Hinzufügen</Typography.Title>
            <AddExpenseForm/>
        </div>
    )
}

export default AddExpensePage