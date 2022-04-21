import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import BurgerNav from './components/BurgerNav/BurgerNav.tsx';

function App() {
  return (
    <div className="App">
      <BurgerNav />
      <Container style={{ paddingLeft: '95px' }}>


      </Container>
    </div>
  );
}

export default App;
