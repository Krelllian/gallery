import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';

import BurgerNav from './components/BurgerNav/BurgerNav.tsx';
import Gallery from './components/Gallery/Gallery.tsx';
import PhotoCard from './components/PhotoCard/PhotoCard.tsx'
import AboutMe from './components/AboutMe/AboutMe.tsx'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BurgerNav />
      <Container style={{ paddingLeft: '95px' }}>
        <Routes>

          {/* <Route path='/' element={
            <>
              <Gallery />
            </>
          } /> */}

          <Route path={'/about'} element={
            <>
              <AboutMe />
            </>
          } />

          <Route path={'/card/' + ':id'} element={
            <>
              <PhotoCard />
            </>
          } />

        </Routes>
      </Container>
    </div>
  );
}

export default App;
