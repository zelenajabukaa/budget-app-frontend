import { ExclamationCircleOutlined } from '@ant-design/icons';
import Header from './components/header/Header';
import NoEntries from './components/NoEntries';

function App() {
  return (
    <>
      <Header />
      <NoEntries message='Einnahmen' />
    </>
  );
}

export default App
