import AddEarningForm from "../components/forms/AddEarningForm.tsx";
import Header from "../components/header/Header.tsx";


function AddEarningPage(){
    return (
        <div>
            <Header/>
            <AddEarningForm style={{marginTop: '2rem'}}/>
        </div>
    )
}

export default AddEarningPage