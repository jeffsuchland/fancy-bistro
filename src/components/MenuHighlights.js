import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from './common/Section';
import { burger, risotto, salmon } from '../assets/images';

const HighlightsSection = styled(Section)`
  background-color: ${props => props.theme.colors.cream};
  ${props => props.showDivider && `
    border-bottom: 1px solid ${props.theme.colors.lightGray};
    margin-bottom: ${props.theme.spacing.lg};
  `}
  ${props => props.reducedPadding && `
    padding: ${props.theme.spacing.sm};
  `}
`;

const Container = styled.div`
  max-width: ${props => props.theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.primary};
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.lg};
  margin-top: ${props => props.theme.spacing.xl};
`;

const MenuItem = styled(motion.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const ItemImage = styled.div`
  height: 250px;
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

const ItemContent = styled.div`
  padding: ${props => props.theme.spacing.md};
`;

const ItemTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.primary};
`;

const ItemDescription = styled.p`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing.sm};
  line-height: 1.6;
`;

const Price = styled.span`
  color: ${props => props.theme.colors.green};
  font-weight: 600;
  font-size: 1.2rem;
`;

const menuItems = [
  {
    id: 1,
    name: 'Pacific Northwest Salmon',
    description: 'Wild-caught salmon with roasted seasonal vegetables and herb-infused oil',
    price: '$32',
    image: salmon,
    dietary: ['gf']
  },
  {
    id: 2,
    name: 'Wild Mushroom Risotto',
    description: 'Creamy arborio rice with locally foraged mushrooms and aged parmesan',
    price: '$26',
    image: risotto,
    dietary: ['v']
  },
  {
    id: 3,
    name: 'Artisanal Burger',
    description: 'House-ground beef with aged cheddar, caramelized onions, and house-made brioche',
    price: '$24',
    image: burger
  }
];

const MenuHighlights = () => {
  return (
    <HighlightsSection id="menu" showDivider reducedPadding>
      <Container>
        <SectionTitle>Menu Highlights</SectionTitle>
        <MenuGrid>
          {menuItems.map((item, index) => (
            <MenuItem
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ItemImage>
                <img src={item.image} alt={item.name} />
              </ItemImage>
              <ItemContent>
                <ItemTitle>{item.name}</ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
                <Price>{item.price}</Price>
              </ItemContent>
            </MenuItem>
          ))}
        </MenuGrid>
      </Container>
    </HighlightsSection>
  );
};

export default MenuHighlights;
