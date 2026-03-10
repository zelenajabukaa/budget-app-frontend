import { useState } from 'react';
import AddButton from './components/AddButton';
import Header from './components/header/Header';
import NoEntries from './components/NoEntries';
import { Card } from 'antd';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)


  return (
    <>
      <Header />
      <AddButton onClick={() => setIsPopupOpen(true)} />
      <NoEntries message='Einnahmen' />

      {isPopupOpen && (
        <Card onClick={() => setIsPopupOpen(false)} style={{ position: 'absolute', width: '50%' }} />
      )}
    </>
  );
}

export default App
