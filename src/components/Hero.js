import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useModal } from '../context/ModalContext';

const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/images/hero-bg.jpg') center/cover no-repeat;
  z-index: 1;
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.xl};
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: 4rem;
    color: white;
    margin-bottom: ${props => props.theme.spacing.md};
    font-family: ${props => props.theme.fonts.primary};
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.5rem;
    color: white;
    margin-bottom: ${props => props.theme.spacing.lg};
    font-family: ${props => props.theme.fonts.secondary};
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 1.2rem;
    }
  }
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: ${props => props.theme.spacing.md};
  font-weight: 700;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: ${props => props.theme.spacing.lg};
  font-family: ${props => props.theme.fonts.heading};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.25rem;
  }
`;

const CTAButton = styled(motion.button)`
  background-color: ${props => props.theme.colors.green};
  color: white;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;

const Hero = () => {
  const { openModal } = useModal();

  return (
    <HeroSection className="full-width">
      <HeroBackground />
      <HeroContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          The Verdant Fork
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Farm-to-Table Pacific Northwest Cuisine
        </Subtitle>
        <CTAButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          onClick={openModal}
        >
          Reserve a Table
        </CTAButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
