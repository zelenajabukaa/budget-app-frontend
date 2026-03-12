import {useState} from 'react';
import AddButton from './components/buttons/AddButton';
import Header from './components/header/Header';
import NoEntries from './components/notifications/NoEntries';
import {Button} from 'antd';
import './App.css'

function App() {
    const [isPopupOpen, setIsPopupOpen] = useState(false)


    return (
        <>
            <Header/>
            <AddButton onClick={() => setIsPopupOpen(prevState => !prevState)}/>

            <NoEntries message='Einnahmen'/>
            <div className={`action-buttons ${isPopupOpen ? 'open' : ''}`}>
                <Button
                    className='action-button'
                    style={{bottom: '8rem'}}>Einnahmen Erfassen
                </Button>

                <Button
                    className='action-button'
                    style={{bottom: '14rem'}}>Ausgaben Erfassen
                </Button>
            </div>
        </>
    );
}

export default App
