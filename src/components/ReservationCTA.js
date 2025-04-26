import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from './common/Section';
import { useModal } from '../context/ModalContext';

const CTASection = styled(Section)`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/images/reservation-bg.jpg') center/cover no-repeat;
  color: white;
  text-align: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    z-index: -1;
  }
`;

const Container = styled.div`
  max-width: ${props => props.theme.breakpoints.wide};
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.xl};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: ${props => props.theme.spacing.lg};
  color: white;
  font-family: ${props => props.theme.fonts.primary};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: ${props => props.theme.spacing.xl};
  color: white;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const CTAButton = styled(motion.button)`
  background-color: ${props => props.theme.colors.green};
  color: white;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  font-size: 1.2rem;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;

const ContactInfo = styled.div`
  margin-top: ${props => props.theme.spacing.xl};
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${props => props.theme.spacing.md};
  }
`;

const InfoItem = styled.div`
  text-align: center;
`;

const InfoLabel = styled.h3`
  font-size: 1.2rem;
  margin-bottom: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.cream};
`;

const InfoValue = styled.p`
  font-size: 1.1rem;
`;

const ReservationCTA = () => {
  const { openModal } = useModal();

  return (
    <CTASection className="full-width">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title>Reserve Your Table</Title>
          <Description>
            Join us for an unforgettable dining experience. Reservations recommended for parties of all sizes.
          </Description>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openModal}
          >
            Reserve Now
          </CTAButton>
        </motion.div>

        <ContactInfo>
          <InfoItem>
            <InfoLabel>Hours</InfoLabel>
            <InfoValue>Tue-Sun: 5pm-10pm</InfoValue>
            <InfoValue>Brunch: Sat-Sun 10am-2pm</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Contact</InfoLabel>
            <InfoValue>503-555-0123</InfoValue>
            <InfoValue>info@verdantfork.com</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Location</InfoLabel>
            <InfoValue>123 SE Division St</InfoValue>
            <InfoValue>Portland, OR 97202</InfoValue>
          </InfoItem>
        </ContactInfo>
      </Container>
    </CTASection>
  );
};

export default ReservationCTA;
