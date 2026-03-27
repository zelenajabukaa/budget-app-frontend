import AddEarningForm from "../components/forms/AddEarningForm.tsx";
import {Typography} from "antd";


function AddEarningPage(){
    return (
        <div>
            <Typography.Title style={{color: 'white', justifySelf: 'center'}}>Einnahme Hinzufügen</Typography.Title>
            <AddEarningForm/>
        </div>
    )
}

export default AddEarningPage