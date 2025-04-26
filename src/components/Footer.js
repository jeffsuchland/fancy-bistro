import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterSection = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: ${props => props.theme.spacing.xl} 0 ${props => props.theme.spacing.md};
`;

const Container = styled.div`
  max-width: ${props => props.theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const Column = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: ${props => props.theme.spacing.md};
    color: ${props => props.theme.colors.cream};
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: ${props => props.theme.spacing.sm};
  }

  a {
    color: white;
    opacity: 0.8;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.md};
`;

const SocialIcon = styled(motion.a)`
  color: white;
  opacity: 0.8;
  font-size: 1.5rem;
  
  &:hover {
    opacity: 1;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: ${props => props.theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  opacity: 0.8;
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <Grid>
          <Column>
            <h3>The Verdant Fork</h3>
            <p>123 SE Division St</p>
            <p>Portland, OR 97202</p>
            <p>503-555-0123</p>
          </Column>
          <Column>
            <h3>Hours</h3>
            <ul>
              <li>Tuesday-Sunday: 5pm-10pm</li>
              <li>Brunch: Saturday-Sunday 10am-2pm</li>
              <li>Closed Mondays</li>
            </ul>
          </Column>
          <Column>
            <h3>Menu</h3>
            <ul>
              <li><a href="#dinner">Dinner</a></li>
              <li><a href="#brunch">Brunch</a></li>
              <li><a href="#drinks">Drinks</a></li>
              <li><a href="#specials">Weekly Specials</a></li>
            </ul>
          </Column>
          <Column>
            <h3>Connect</h3>
            <p>Follow us on social media for daily specials and updates</p>
            <SocialLinks>
              <SocialIcon 
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                📸
              </SocialIcon>
              <SocialIcon 
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                👥
              </SocialIcon>
              <SocialIcon 
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                🐦
              </SocialIcon>
            </SocialLinks>
          </Column>
        </Grid>
        <Copyright>
          © {new Date().getFullYear()} The Verdant Fork. All rights reserved.
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer;
