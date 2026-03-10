import { useState } from 'react';
import AddButton from './components/buttons/AddButton';
import Header from './components/header/Header';
import NoEntries from './components/notifications/NoEntries';
import { Button, Card } from 'antd';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)


  return (
    <>
      <Header />
      <AddButton onClick={() => setIsPopupOpen(!isPopupOpen)} />
      {!isPopupOpen && (
        <NoEntries message='Einnahmen' />
      )}
      {isPopupOpen && (
        <Card variant={'outlined'}
          style={{
            position: 'absolute',
            width: '40%',
            height: '7rem',
            display: 'flex',
            top: '30%',
            justifySelf: 'center',
            justifyContent: 'space-evenly',
            backgroundColor: '#648ee2',
            borderColor: '#3a5ea7'
          }} >
          <Button style={{ padding: '2rem' }}>Einnahmen Erfassen</Button>
          <Button style={{ padding: '2rem', marginLeft: '2rem' }}>Ausgaben Erfassen</Button>
        </Card >
      )
      }
    </>
  );
}

export default App
