import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from './common/Section';

const AboutSection = styled(Section)`
  background-color: white;
`;

const Container = styled.div`
  max-width: ${props => props.theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.xl};
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Content = styled(motion.div)`
  max-width: 600px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.primary};
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.secondary};
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  height: 500px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Content
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title>Our Story</Title>
          <Description>
            The Verdant Fork embodies Portland's vibrant culinary spirit, bringing together
            local ingredients and artisanal craftsmanship. Our journey began with a simple
            vision: to create a space where sustainable dining meets creative excellence.
          </Description>
          <Description>
            Every dish tells a story of our local farmers, foragers, and producers,
            celebrating the rich bounty of the Pacific Northwest. Our seasonal menus are
            a testament to our commitment to freshness and innovation.
          </Description>
        </Content>
        <ImageContainer
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src="/images/about-interior.jpg" alt="The Verdant Fork Interior" />
        </ImageContainer>
      </Container>
    </AboutSection>
  );
};

export default About;
