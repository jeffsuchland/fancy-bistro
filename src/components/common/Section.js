import styled from 'styled-components';

const Section = styled.section`
  padding: ${props => props.reducedPadding ? props.theme.spacing.lg : props.theme.spacing.xl} 0;
  background-color: ${props => props.background || 'white'};
  position: relative;

  // Add extra padding for sections that come after the hero
  &:nth-child(2) {
    padding-top: ${props => props.theme.spacing.xl};
  }

  // Add subtle separation between sections with different backgrounds
  &:not(:last-child) {
    margin-bottom: ${props => props.noPadding ? '0' : props.theme.spacing.md};
  }

  // Add divider for white sections
  ${props => props.showDivider && `
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
      height: 1px;
      background: linear-gradient(
        to right,
        transparent,
        ${props.theme.colors.secondary}20,
        ${props.theme.colors.secondary}20,
        transparent
      );
    }
  `}

  // Full-width override
  &.full-width {
    padding-left: 0;
    padding-right: 0;
  }
`;

export default Section;
