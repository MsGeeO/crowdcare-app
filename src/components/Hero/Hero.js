import { Button } from '../ButtonStyling';
import {
  HeroContainer,
  HeroContent,
  HeroContentText,
  HeroTitle,
  HeroParagraph
} from './HeroStyling';

/* Create Banner section that serves as the primary part of the landing page along with topbar. */
const Hero = () => {
  return (
    <>
     <HeroContainer>
       <HeroContent>
         <HeroContentText>
            <HeroTitle>Your Events Success and Safety Starts Here</HeroTitle>
            <HeroParagraph>
            Book Your First Appointment & Prioritize Your Event's
            Safety at Crowd Care.
            </HeroParagraph>
            <Button to='/services'>Learn More</Button>
         </HeroContentText>
        </HeroContent>        
     </HeroContainer>

    </>
  );
};

export default Hero;