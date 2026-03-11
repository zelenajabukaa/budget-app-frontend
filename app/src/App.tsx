import {useState} from 'react';
import AddButton from './components/buttons/AddButton';
import Header from './components/header/Header';
import NoEntries from './components/notifications/NoEntries';
import {Button} from 'antd';

function App() {
    const [isPopupOpen, setIsPopupOpen] = useState(false)


    return (
        <>
            <Header/>
            <AddButton onClick={() => setIsPopupOpen(!isPopupOpen)}/>

            <NoEntries message='Einnahmen'/>

            {!isPopupOpen && (
                <>
                    <Button style={{
                        padding: '2rem',
                        minWidth: '12rem',
                        position: 'absolute',
                        bottom: '8rem',
                        right: '6rem'
                    }}>Einnahmen Erfassen</Button>

                    <Button style={{
                        padding: '2rem',
                        minWidth: '12rem',
                        position: 'absolute',
                        bottom: '14rem',
                        right: '6rem'
                    }}>Ausgaben Erfassen</Button>
                </>
            )}
        </>
    );
}

export default App
