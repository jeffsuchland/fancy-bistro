import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from './common/Section';

const FeedSection = styled(Section)`
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
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.primary};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.md};
`;

const ImageCard = styled(motion.div)`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    .overlay {
      opacity: 1;
    }
    
    img {
      transform: scale(1.05);
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: ${props => props.theme.spacing.md};
  color: white;
  text-align: center;
  font-size: 0.9rem;
`;

const instagramPosts = [
  {
    id: 1,
    image: '/images/insta-1.jpg',
    caption: 'Fresh from the garden: Today\'s harvest inspiring tonight\'s special'
  },
  {
    id: 2,
    image: '/images/insta-2.jpg',
    caption: 'Behind the scenes with our chef preparing the perfect dish'
  },
  {
    id: 3,
    image: '/images/insta-3.jpg',
    caption: 'Weekend brunch vibes at The Verdant Fork'
  },
  {
    id: 4,
    image: '/images/insta-4.jpg',
    caption: 'Craft cocktails that complement our seasonal menu'
  }
];

const InstagramFeed = () => {
  return (
    <FeedSection reducedPadding>
      <Container>
        <Title>Follow Our Journey</Title>
        <Grid>
          {instagramPosts.map((post, index) => (
            <ImageCard
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image src={post.image} alt={post.caption} />
              <Overlay className="overlay">
                {post.caption}
              </Overlay>
            </ImageCard>
          ))}
        </Grid>
      </Container>
    </FeedSection>
  );
};

export default InstagramFeed;
