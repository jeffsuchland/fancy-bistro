import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from './common/Section';
import { useModal } from '../context/ModalContext';

const EventsSection = styled(Section)`
  background-color: ${props => props.theme.colors.cream};
  ${props => props.reducedPadding && `
    padding: ${props.theme.spacing.sm};
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
  margin-bottom: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.primary};
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.lg};
`;

const EventCard = styled(motion.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const EventImage = styled.div`
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const EventContent = styled.div`
  padding: ${props => props.theme.spacing.md};
`;

const EventDate = styled.p`
  color: ${props => props.theme.colors.green};
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const EventTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.primary};
`;

const EventDescription = styled.p`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing.md};
  line-height: 1.6;
`;

const EventButton = styled(motion.button)`
  background-color: ${props => props.theme.colors.green};
  color: white;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: 4px;
  font-weight: 600;
  width: 100%;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;

const events = [
  {
    id: 1,
    title: "Wine Tasting Evening",
    date: "May 15, 2025",
    description: "Join our sommelier for an evening of Pacific Northwest wines paired with seasonal appetizers.",
    image: "/images/wine-tasting.jpg",
    price: "$75 per person"
  },
  {
    id: 2,
    title: "Chef's Table Experience",
    date: "May 22, 2025",
    description: "An intimate 7-course tasting menu with our executive chef, featuring the season's finest ingredients.",
    image: "/images/chefs-table.jpg",
    price: "$120 per person"
  },
  {
    id: 3,
    title: "Sunday Jazz Brunch",
    date: "Every Sunday",
    description: "Enjoy live jazz with our special brunch menu featuring local musicians and fresh pastries.",
    image: "/images/jazz-brunch.jpg",
    price: "$45 per person"
  }
];

const Events = () => {
  const { openModal } = useModal();

  return (
    <EventsSection id="events" reducedPadding>
      <Container>
        <Title>Upcoming Events</Title>
        <EventsGrid>
          {events.map((event, index) => (
            <EventCard
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <EventImage>
                <img src={event.image} alt={event.title} />
              </EventImage>
              <EventContent>
                <EventDate>{event.date}</EventDate>
                <EventTitle>{event.title}</EventTitle>
                <EventDescription>{event.description}</EventDescription>
                <EventButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openModal}
                >
                  Book Now • {event.price}
                </EventButton>
              </EventContent>
            </EventCard>
          ))}
        </EventsGrid>
      </Container>
    </EventsSection>
  );
};

export default Events;
