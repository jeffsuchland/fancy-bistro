import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from './common/Section';
import { map } from '../assets/images';

const LocationSection = styled(Section)`
  background-color: white;
  padding: ${props => props.reducedPadding ? props.theme.spacing.md : props.theme.spacing.xl} 0;
  ${props => props.showDivider && `
    border-bottom: 1px solid ${props.theme.colors.divider};
  `}
`;

const Container = styled.div`
  max-width: ${props => props.theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.primary};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.xl};
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  background: url(${map}) center/cover no-repeat;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: ${props => props.theme.spacing.md};
`;

const InfoContainer = styled(motion.div)`
  padding: ${props => props.theme.spacing.lg};
`;

const InfoBlock = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};

  h3 {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.primary};
    margin-bottom: ${props => props.theme.spacing.sm};
  }

  p {
    color: ${props => props.theme.colors.secondary};
    line-height: 1.6;
    margin-bottom: ${props => props.theme.spacing.xs};
  }
`;

const DirectionsButton = styled(motion.button)`
  background-color: ${props => props.theme.colors.green};
  color: white;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border-radius: 4px;
  font-weight: 600;
  margin-top: ${props => props.theme.spacing.md};
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;

const ParkingInfo = styled.div`
  margin-top: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.md};
  background-color: ${props => props.theme.colors.cream};
  border-radius: 4px;

  h4 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: ${props => props.theme.spacing.xs};
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    color: ${props => props.theme.colors.secondary};
    margin-bottom: ${props => props.theme.spacing.xs};
    padding-left: ${props => props.theme.spacing.md};
    position: relative;

    &:before {
      content: "•";
      color: ${props => props.theme.colors.green};
      position: absolute;
      left: 0;
    }
  }
`;

const Location = () => {
  return (
    <LocationSection id="location" showDivider reducedPadding>
      <Container>
        <Title>Find Us</Title>
        <Grid>
          <InfoContainer
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <InfoBlock>
              <h3>Address</h3>
              <p>123 SE Division St</p>
              <p>Portland, OR 97202</p>
            </InfoBlock>
            <InfoBlock>
              <h3>Hours</h3>
              <p>Tuesday - Sunday: 5pm - 10pm</p>
              <p>Brunch: Saturday & Sunday 10am - 2pm</p>
              <p>Closed Mondays</p>
            </InfoBlock>
            <DirectionsButton
              as="a"
              href="https://maps.google.com/?q=123+SE+Division+St+Portland+OR+97202"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Directions
            </DirectionsButton>
            <ParkingInfo>
              <h4>Parking & Transportation</h4>
              <ul>
                <li>Free street parking available on Division St</li>
                <li>Public parking lot one block north</li>
                <li>Bike racks located in front</li>
                <li>Bus lines 4 and 14 stop nearby</li>
              </ul>
            </ParkingInfo>
          </InfoContainer>

          <MapContainer />
        </Grid>
      </Container>
    </LocationSection>
  );
};

export default Location;
