import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useModal } from '../context/ModalContext';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.isScrolled ? 'rgba(245, 245, 245, 0.95)' : 'rgba(0, 0, 0, 0.7)'};
  backdrop-filter: blur(5px);
  transition: ${props => props.theme.transitions.default};
  padding: ${props => props.isScrolled ? '0.5rem 0' : '1rem 0'};
`;

const NavContainer = styled.div`
  max-width: ${props => props.theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  color: ${props => props.isScrolled ? props.theme.colors.primary : 'white'};
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 700;
  text-decoration: none;
`;

const MenuButton = styled.button`
  display: none;
  color: ${props => props.isScrolled ? props.theme.colors.primary : 'white'};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: ${props => props.isMobileMenuOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(245, 245, 245, 0.95);
    padding: ${props => props.theme.spacing.md};
  }
`;

const NavLink = styled.a`
  color: ${props => props.isScrolled ? props.theme.colors.primary : 'white'};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.isScrolled ? props.theme.colors.green : props.theme.colors.cream};
  }
`;

const ReserveButton = styled(motion.button)`
  background-color: ${props => props.theme.colors.green};
  color: white;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav isScrolled={isScrolled}>
      <NavContainer>
        <Logo href="#" isScrolled={isScrolled}>The Verdant Fork</Logo>
        <MenuButton 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          isScrolled={isScrolled}
        >
          <span></span>
          <span></span>
          <span></span>
        </MenuButton>
        <NavLinks isMobileMenuOpen={isMobileMenuOpen}>
          <NavLink href="#menu" isScrolled={isScrolled}>Menu</NavLink>
          <NavLink href="#events" isScrolled={isScrolled}>Events</NavLink>
          <NavLink href="#location" isScrolled={isScrolled}>Location</NavLink>
          <ReserveButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openModal}
          >
            Reserve a Table
          </ReserveButton>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
