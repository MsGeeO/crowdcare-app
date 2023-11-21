// Hero.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ButtonStyling';
import {
  HeroContainer,
  HeroContent,
  HeroContentText,
  HeroTitle,
  HeroParagraph
} from './HeroStyling';

// Import your banner image
import backgroundImage from '../../images/background.jpg';

const Hero = () => {
  return (
    <>
      <HeroContainer style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        <HeroContent>
          <HeroContentText>
            <HeroTitle>Your Events Success and Safety Starts Here</HeroTitle>
            <HeroParagraph>
              Book Your First Appointment & Prioritize Your Event's Safety at Crowd Care.
            </HeroParagraph>
            <Button to='/services'>Learn More</Button>
          </HeroContentText>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;