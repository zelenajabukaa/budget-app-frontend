import AddButton from './components/AddButton';
import Header from './components/header/Header';
import NoEntries from './components/NoEntries';

function App() {
  return (
    <>
      <Header />
      <AddButton />
      <NoEntries message='Einnahmen' />
    </>
  );
}

export default App
