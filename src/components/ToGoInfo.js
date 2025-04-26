import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from './common/Section';

const ToGoSection = styled(Section)`
  background-color: ${props => props.theme.colors.cream};
`;

const Container = styled.div`
  max-width: ${props => props.theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
`;

const Content = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.primary};
    margin-bottom: ${props => props.theme.spacing.md};
  }

  p {
    color: ${props => props.theme.colors.secondary};
    line-height: 1.6;
    margin-bottom: ${props => props.theme.spacing.md};
    font-size: 1.1rem;
  }
`;

const OrderOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.md};
  margin: ${props => props.theme.spacing.lg} auto;
  max-width: 600px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const OrderOption = styled(motion.a)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.spacing.md};
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  i {
    font-size: 2rem;
    color: ${props => props.theme.colors.green};
    margin-bottom: ${props => props.theme.spacing.sm};
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: ${props => props.theme.spacing.xs};
    text-align: center;
  }

  p {
    font-size: 0.9rem;
    text-align: center;
    margin: 0;
  }
`;

const InfoBox = styled.div`
  background: ${props => props.theme.colors.green}10;
  border-left: 4px solid ${props => props.theme.colors.green};
  padding: ${props => props.theme.spacing.md};
  margin: ${props => props.theme.spacing.md} auto;
  border-radius: 0 8px 8px 0;
  max-width: 600px;
  text-align: left;

  h4 {
    color: ${props => props.theme.colors.green};
    margin-bottom: ${props => props.theme.spacing.xs};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${props => props.theme.spacing.sm};

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      grid-template-columns: 1fr;
    }
  }

  li {
    color: ${props => props.theme.colors.secondary};
    display: flex;
    align-items: center;

    &:before {
      content: "✓";
      color: ${props => props.theme.colors.green};
      margin-right: ${props => props.theme.spacing.xs};
    }
  }
`;

const ToGoInfo = () => {
  return (
    <ToGoSection>
      <Container>
        <Content
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Take The Verdant Fork Home</h2>
          <p>
            Enjoy our carefully crafted dishes in the comfort of your own space. 
            Whether it's a quiet dinner at home or a special gathering, we offer 
            our full menu for takeout with the same attention to quality and presentation.
          </p>
          
          <OrderOptions>
            <OrderOption 
              href="https://doordash.com" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <i className="fas fa-bicycle"></i>
              <h3>DoorDash</h3>
              <p>Delivery within 5 miles</p>
            </OrderOption>
            
            <OrderOption 
              href="tel:+1-503-555-0123"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <i className="fas fa-phone"></i>
              <h3>Direct Order</h3>
              <p>Call (503) 555-0123</p>
            </OrderOption>
          </OrderOptions>

          <InfoBox>
            <h4>To-Go Service Details</h4>
            <ul>
              <li>Orders ready in 30-45 minutes</li>
              <li>Eco-friendly packaging</li>
              <li>Curbside pickup available</li>
              <li>Special handling for wine orders</li>
              <li>Large party orders welcome</li>
              <li>Online payment available</li>
              <li>Contactless pickup option</li>
              <li>Reheating instructions included</li>
            </ul>
          </InfoBox>
        </Content>
      </Container>
    </ToGoSection>
  );
};

export default ToGoInfo;
