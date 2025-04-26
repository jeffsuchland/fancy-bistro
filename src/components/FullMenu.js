import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './common/Section';

const MenuSection = styled(Section)`
  background-color: white;
  ${({ showDivider }) => showDivider && `
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
  `}
  ${({ reducedPadding }) => reducedPadding && `
    padding: 20px;
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

const MenuNav = styled.div`
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.xl};
  flex-wrap: wrap;
`;

const MenuButton = styled.button`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border: 2px solid ${props => props.theme.colors.green};
  border-radius: 4px;
  color: ${props => props.active ? 'white' : props.theme.colors.green};
  background-color: ${props => props.active ? props.theme.colors.green : 'transparent'};
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.green};
    color: white;
  }
`;

const MenuContent = styled(motion.div)`
  margin-top: ${props => props.theme.spacing.lg};
`;

const MenuCategory = styled.div`
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.md};
  text-align: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 60px;
    height: 2px;
    background-color: ${props => props.theme.colors.green};
    margin: ${props => props.theme.spacing.xs} auto 0;
  }
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.lg};
`;

const MenuItem = styled(motion.div)`
  padding: ${props => props.theme.spacing.md};
  border-bottom: 1px dashed ${props => props.theme.colors.secondary}20;

  &:last-child {
    border-bottom: none;
  }
`;

const DishName = styled.h4`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.xs};
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  span {
    color: ${props => props.theme.colors.green};
    font-weight: 600;
  }
`;

const DishDescription = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-size: 0.95rem;
  line-height: 1.6;
`;

const DietaryIcon = styled.span`
  font-size: 0.7rem;
  margin-left: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.green};
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const menuData = {
  starters: [
    {
      name: "Northwest Oysters",
      description: "Half dozen fresh oysters, mignonette, lemon",
      price: "18",
      dietary: ["gf"]
    },
    {
      name: "Forest Mushroom Soup",
      description: "Local wild mushrooms, truffle cream, chives",
      price: "14",
      dietary: ["v", "gf"]
    },
    {
      name: "Beet & Goat Cheese Salad",
      description: "Roasted beets, local goat cheese, hazelnuts, honey vinaigrette",
      price: "16",
      dietary: ["v", "gf"]
    },
    {
      name: "Charcuterie Board",
      description: "Local cured meats, artisanal cheeses, house pickles, mustard",
      price: "24"
    }
  ],
  mains: [
    {
      name: "Pacific Northwest Salmon",
      description: "Wild-caught salmon, herb-crusted, seasonal vegetables",
      price: "32",
      dietary: ["gf"]
    },
    {
      name: "Forest Mushroom Risotto",
      description: "Local wild mushrooms, aged parmesan, fresh herbs",
      price: "26",
      dietary: ["v", "gf"]
    },
    {
      name: "Portland Craft Burger",
      description: "Grass-fed beef, artisanal cheddar, house-made pickles, hand-cut fries",
      price: "24"
    },
    {
      name: "Duck Confit",
      description: "Heritage duck, braised lentils, roasted root vegetables",
      price: "34",
      dietary: ["gf"]
    },
    {
      name: "Grilled Ribeye",
      description: "21-day aged beef, garlic butter, roasted potatoes",
      price: "42",
      dietary: ["gf"]
    }
  ],
  sides: [
    {
      name: "Roasted Seasonal Vegetables",
      description: "Local farm vegetables, herbs, olive oil",
      price: "12",
      dietary: ["v", "gf"]
    },
    {
      name: "Truffle Fries",
      description: "Hand-cut potatoes, truffle oil, parmesan",
      price: "10",
      dietary: ["v"]
    },
    {
      name: "Wild Mushroom Mac & Cheese",
      description: "Three cheese blend, forest mushrooms, breadcrumbs",
      price: "14",
      dietary: ["v"]
    }
  ],
  desserts: [
    {
      name: "Hazelnut Chocolate Torte",
      description: "Oregon hazelnuts, dark chocolate, vanilla ice cream",
      price: "12",
      dietary: ["v"]
    },
    {
      name: "Seasonal Fruit Crisp",
      description: "Local fruit, oat streusel, honey lavender ice cream",
      price: "11",
      dietary: ["v"]
    },
    {
      name: "Cheese Plate",
      description: "Selection of regional cheeses, honey, nuts, fruit",
      price: "16",
      dietary: ["v", "gf"]
    }
  ]
};

const FullMenu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const getDietaryIcons = (dietary) => {
    if (!dietary) return null;
    return dietary.map(icon => {
      switch(icon) {
        case 'v': return <DietaryIcon key="v" title="Vegetarian">V</DietaryIcon>;
        case 'gf': return <DietaryIcon key="gf" title="Gluten Free">GF</DietaryIcon>;
        default: return null;
      }
    });
  };

  const renderMenuItems = (items) => {
    return items.map((item, index) => (
      <MenuItem
        key={item.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <DishName>
          {item.name} {getDietaryIcons(item.dietary)}
          <span>${item.price}</span>
        </DishName>
        <DishDescription>{item.description}</DishDescription>
      </MenuItem>
    ));
  };

  const renderCategory = (title, items) => (
    <MenuCategory>
      <CategoryTitle>{title}</CategoryTitle>
      <MenuGrid>
        {renderMenuItems(items)}
      </MenuGrid>
    </MenuCategory>
  );

  return (
    <MenuSection showDivider reducedPadding>
      <Container>
        <Title>Our Menu</Title>
        <MenuNav>
          <MenuButton
            active={activeCategory === 'all'}
            onClick={() => setActiveCategory('all')}
          >
            All
          </MenuButton>
          <MenuButton
            active={activeCategory === 'starters'}
            onClick={() => setActiveCategory('starters')}
          >
            Starters
          </MenuButton>
          <MenuButton
            active={activeCategory === 'mains'}
            onClick={() => setActiveCategory('mains')}
          >
            Main Courses
          </MenuButton>
          <MenuButton
            active={activeCategory === 'sides'}
            onClick={() => setActiveCategory('sides')}
          >
            Sides
          </MenuButton>
          <MenuButton
            active={activeCategory === 'desserts'}
            onClick={() => setActiveCategory('desserts')}
          >
            Desserts
          </MenuButton>
        </MenuNav>

        <AnimatePresence mode="wait">
          <MenuContent
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeCategory === 'all' ? (
              <>
                {renderCategory('Starters', menuData.starters)}
                {renderCategory('Main Courses', menuData.mains)}
                {renderCategory('Sides', menuData.sides)}
                {renderCategory('Desserts', menuData.desserts)}
              </>
            ) : (
              renderCategory(
                activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1),
                menuData[activeCategory]
              )
            )}
          </MenuContent>
        </AnimatePresence>
      </Container>
    </MenuSection>
  );
};

export default FullMenu;
