import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from './common/Section';
import { useModal } from '../context/ModalContext';
import { chefsTable, jazzBrunch, wineTasting } from '../assets/images';

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
    title: "Chef's Table Experience",
    date: "Every Friday",
    description: "An intimate dining experience featuring a specially curated tasting menu by our head chef.",
    price: "$125 per person",
    image: chefsTable
  },
  {
    id: 2,
    title: "Sunday Jazz Brunch",
    date: "Sundays 10am-2pm",
    description: "Enjoy our farm-fresh brunch menu while listening to live jazz performances.",
    price: "$45 per person",
    image: jazzBrunch
  },
  {
    id: 3,
    title: "Wine Tasting Evening",
    date: "Last Thursday Monthly",
    description: "Sample our curated wine selection paired with regional cheeses and appetizers.",
    price: "$75 per person",
    image: wineTasting
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
