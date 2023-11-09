import React from 'react';
import { FaHandHoldingHeart, FaMoneyBill } from 'react-icons/fa';
import { renderStars } from '../../utility/renderStars';
import {
    PageContainer,
    HeaderContainer,
    HeaderTitle,
    HeaderText,
    IconContainer,
    IconWrapper,
    HeaderSubtext,
    ButtonContainer,
    Button,
    ServiceTitle,
    ServiceText,
    InformationContainer,
    ServiceCard,
    ServiceCardHeader,
    ServiceCardContent
} from './ServicesStyling';

/* Creates page layout that emphasizes full-scale clinic services. */
/* Creates header button that routes to Booking page. */
const ServicesPage = () => {
    const averageRating = 4.5;

    return (
    <>
     <PageContainer>
      <HeaderContainer>
       <HeaderText>Customer Rating: {renderStars(averageRating)} </HeaderText>
        <HeaderTitle>Your Safety, Our Priority.</HeaderTitle>
          <HeaderText>With an attendee-centered approach, we emphasize active collaboration and transparent communication. We are committed to nurturing a
          robust event-goer relationship founded on trust, empathy, and respect. Together, we'll strive for a successful event experience.</HeaderText>
          <IconContainer>
            <IconWrapper>
              <FaHandHoldingHeart size='25px' color='#000' />
          </IconWrapper>
           <HeaderSubtext>Quality Services</HeaderSubtext>
          <IconWrapper>
           <FaMoneyBill size='25px' color='#000' />
          </IconWrapper>
            <HeaderSubtext>Affordable Prices </HeaderSubtext>
              <ButtonContainer><Button to='/book'>Book Now</Button></ButtonContainer>
          </IconContainer>
      </HeaderContainer>

      <ServiceTitle>Our Expertise</ServiceTitle>
       <ServiceText>Discover our unparalleled expertise in various aspects of crowd control at events. Our committed team of professionals excels
        in delivering customized solutions to meet the diverse needs of different event audiences. We remain continuously  informed about the latest
        research and cutting-edge methods, guaranteeing you the utmost standard of service. 
       </ServiceText>
       
       <InformationContainer>
        <ServiceCard>
         <ServiceCardHeader>Accident Prevention</ServiceCardHeader>
           <ServiceCardContent>Our accident prevention program is at the core of our crowd care company's mission, ensuring the safety of our staff
            and event attendees. We invest in rigorous training, employ safety experts, and utilize best practices to proactively mitigate potential hazards.
            This unwavering commitment to safety makes us the trusted choice for event organizers and attendees, guaranteeing a secure and enjoyable experience for all.
         </ServiceCardContent>
        </ServiceCard>
        
        <ServiceCard>
         <ServiceCardHeader>Crowd Control</ServiceCardHeader>
          <ServiceCardContent>Our crowd care's training measures are designed to equip our personnel with the essential skills and knowledge to effectively
           manage and ensure the safety of large gatherings. Through comprehensive training programs and ongoing development, we ensure our team is well-prepared to handle
           any crowd control scenario with professionalism and expertise. 
         </ServiceCardContent>
        </ServiceCard>
        
        <ServiceCard>
         <ServiceCardHeader>People Management</ServiceCardHeader>
          <ServiceCardContent>The people management training program for our crowd care company focuses on equipping our team with effective communication,
           conflict resolution, and crowd-handling techniques to ensure safe and smooth event experiences.
          </ServiceCardContent>
        </ServiceCard>
         
         <ServiceCard>
          <ServiceCardHeader>Safety Training</ServiceCardHeader>
           <ServiceCardContent>Our safety training measures for our crowd care company focus on equipping our team with the knowledge and skills to ensure
            the security and well-being of event attendees while maintaining a safe and controlled environment.
          </ServiceCardContent>
         </ServiceCard>

         <ServiceCard>
         <ServiceCardHeader>Corporate Counselling</ServiceCardHeader>
          <ServiceCardContent>Our corporate counseling feature offers tailored consultation and guidance to businesses, 
          ensuring seamless and efficient crowd control management for their events and facilities.
          </ServiceCardContent>
         </ServiceCard>

         <ServiceCard>
         <ServiceCardHeader>Handling Hazards and Accidents</ServiceCardHeader>
          <ServiceCardContent>Providing comprehensive training on hazard identification, prevention, and swift response protocols, our crowd care company
           ensures staff are equipped to effectively handle emergencies and accidents, ensuring the safety and well-being of event attendees.
          </ServiceCardContent>
         </ServiceCard>

      </InformationContainer>
     </PageContainer>
    </>
  );
};

export default ServicesPage;