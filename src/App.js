import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { ModalProvider } from './context/ModalContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuHighlights from './components/MenuHighlights';
import FullMenu from './components/FullMenu';
import ToGoInfo from './components/ToGoInfo';
import Events from './components/Events';
import ReservationCTA from './components/ReservationCTA';
import Location from './components/Location';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  background-color: ${props => props.theme.colors.background};
`;

const MainContent = styled.main`
  width: 100%;
  
  > * {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 ${props => props.theme.spacing.md};
  }

  > section.full-width {
    max-width: none;
    padding: 0;
    width: 100%;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <GlobalStyles />
        <AppContainer>
          <Navbar />
          <MainContent>
            <Hero />
            <About />
            <MenuHighlights />
            <FullMenu />
            <ToGoInfo />
            <Events />
            <ReservationCTA />
            <Location />
            <InstagramFeed />
          </MainContent>
          <Footer />
        </AppContainer>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
