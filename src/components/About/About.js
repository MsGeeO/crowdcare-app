import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {
  PageContainer,
  HeaderContainer,
  HeaderContent,
  HeaderContentText,
  HeaderTitle,
  Highlight,
  HeaderText,
  AboutTitle,
  SectionContainer,
  ValueContentText,
  ValueText,
  Paragraph,
  SectionTitle,
  InformationContainer,
  TeamCard,
  Image,
  TeamCardHeader,
  TeamCardContent,
  IconWrapper
} from './AboutStyling';
import { Link } from 'react-router-dom';

/* Creates page layout for Company's About Page. */
const AboutPage = () => {
  return (
    <>
     <PageContainer>
       <HeaderContainer>
         <HeaderContent>
         <HeaderContentText>
           <HeaderTitle>Demonstrating <Highlight>Strong</Highlight> Coordination, Each <Highlight>Event</Highlight> Great Service</HeaderTitle>
            <HeaderText>Our team of experienced crowd managers and handlers promises to bring decorium and orderliness to your event.
             We strongly believe that with the right approach and organization, accidents and rowdyness during events can be avoided. 
            </HeaderText>
         </HeaderContentText>
         </HeaderContent>
       </HeaderContainer>

       <AboutTitle>About Portfolio Project - Crowd Care Management.</AboutTitle>

       <SectionContainer>
         <ValueContentText>
         <ValueText>
          <Paragraph>This Portfolio Project for <Link to='https://www.holbertonschool.com/' target='_blank'>Holberton School's</Link> <Link to='https://www.alxafrica.com/' target='_blank'>Software Engineering</Link> Program
          [offered by ALX Africa], is my final project for the ALX Software Engineering Programme, was born out of a need pointed out during our church's worker's congress about a crowd control mechanism during our annual outreach
          program held at Abuja, Nigeria. This led to me seeking a way to minimize the accident, stampede occurences during the said outreach as
          this is not the intention of our senior pastors and the entire organizers.</Paragraph>
         
          <Paragraph>This application not only endeavors to act as a comprehensive solution for effective crowd control but also strives to enhance the management of large gatherings by seamlessly integrating technology into the process.
          The primary objective is to bridge the gap between event organizers and attendees, thus ensuring smoother and more engaging crowd control. Through the embrace of cutting-edge technology, Crowd-Care aims to empower event planners 
          and attendees, equipping them with the necessary tools to actively participate in the crowd management process.</Paragraph>
        
                 
          <Paragraph>
           <Link to='https://linkedin.com/in/glory-ogbondah' target='_blank'><FaLinkedin  size='18px' color='#8B0000'/> LinkedIn Profile</Link>
          </Paragraph>

          <Paragraph>
           <Link to='https://github.com/MsGeeO/crowd-care' target='_blank'><FaGithub size='20px' color='#000' /> Project Repository</Link>
          </Paragraph>

         </ValueText>
         </ValueContentText>
      </SectionContainer>

      <SectionTitle>Meet Our Carers</SectionTitle>
       <InformationContainer>
       <TeamCard><Image src={require('../../images/Carer01.jpg')} alt='person' />
          <TeamCardHeader>Mrs. Glory Ada Ogbondah</TeamCardHeader>
          <TeamCardContent>Head Carer | Director</TeamCardContent>
          <IconWrapper>
           <FaLinkedin  size='20px' color='#900C3F' />
           <FaFacebook  size='20px' color='#900C3F' />
           <FaTwitter size='20px' color='#900C3F' />
          </IconWrapper>
       </TeamCard>
       
       <TeamCard><Image src={require('../../images/Carer02.jpg')} alt='person' />
         <TeamCardHeader>Mr. Emmanuel C. Ogbondah</TeamCardHeader>
         <TeamCardContent>Technical Carer | Technical Director</TeamCardContent>
         <IconWrapper>
          <FaLinkedin  size='20px' color='#900C3F' />
          <FaFacebook  size='20px' color='#900C3F' />
          <FaTwitter size='20px' color='#900C3F' />
         </IconWrapper>
       </TeamCard>
       
       <TeamCard><Image src={require('../../images/Carer03.jpg')} alt='person' />
         <TeamCardHeader>Mrs. Lauretta Ojimba-Amadi</TeamCardHeader>
         <TeamCardContent>Administrative Carer | Admin. Director</TeamCardContent>
         <IconWrapper>
          <FaLinkedin  size='20px' color='#900C3F' />
          <FaFacebook  size='20px' color='#900C3F' />
          <FaTwitter size='20px' color='#900C3F' />
         </IconWrapper>
       </TeamCard>
       
       <TeamCard><Image src={require('../../images/Carer04.jpg')} alt='person' />
         <TeamCardHeader>Mr. Malvin Otonye Ene</TeamCardHeader>
         <TeamCardContent>Security Carer | Security Director</TeamCardContent>
         <IconWrapper>
          <FaLinkedin  size='20px' color='#900C3F' />
          <FaFacebook  size='20px' color='#900C3F' />
          <FaTwitter size='20px' color='#900C3F' />
         </IconWrapper>
       </TeamCard>
       
       <TeamCard><Image src={require('../../images/Carer05.jpg')} alt='person' />
         <TeamCardHeader>Mrs. Chinyere-Nma Chinenyeze</TeamCardHeader>
         <TeamCardContent>Monitoring and Evaluation Lead</TeamCardContent>
         <IconWrapper>
          <FaLinkedin  size='20px' color='#900C3F' />
          <FaFacebook  size='20px' color='#900C3F' />
          <FaTwitter size='20px' color='#900C3F' />
         </IconWrapper>
       </TeamCard>
       </InformationContainer>
      </PageContainer>
    </>
  );
};

export default AboutPage;