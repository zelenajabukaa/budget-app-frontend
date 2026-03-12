import {Button} from "antd";
import {useNavigate} from 'react-router-dom';
import NoEntries from "../components/notifications/NoEntries.tsx";
import AddButton from "../components/buttons/AddButton.tsx";
import {useState} from "react";
import Header from "../components/header/Header.tsx";

function HomePage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const navigate = useNavigate()

    const openAddEarningForms = () => {
        navigate('/add-earning')
    }
    return (
        <>
            <Header/>
            <AddButton onClick={() => setIsPopupOpen(prevState => !prevState)}/>

            <NoEntries message='Einnahmen'/>
            <div className={`action-buttons ${isPopupOpen ? 'open' : ''}`}>
                <Button
                    className='action-button'
                    style={{bottom: '8rem'}}
                    onClick={openAddEarningForms}
                >
                    Einnahmen Erfassen
                </Button>

                <Button
                    className='action-button'
                    style={{bottom: '14rem'}}
                >
                    Ausgaben Erfassen
                </Button>
            </div>
        </>
    )
}

export default HomePage