import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { collection, addDoc } from 'firebase/firestore';
import { db } from 'firebase/utils';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram  } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    Newsletter,
    NewsletterTitle,
    NewsletterBody,
    Form, 
    FormLabel,
    FormInput,
    FormButton,
    FooterLinkContainer,
    FooterLinkWrapper,
    FooterLinks,
    FooterLinkName,
    FooterLink,
    FooterCopyright
} from './FooterStyling';

/* Creates Footer section within the landing page that include newsletter subscription. */
/* Firebase configuration maanages email data storage for newsletter subscription. */
const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscriptionStatus, setSubscriptionStatus] = useState('');

    const handleSubmit = async (e) => {
        try {
            const newsletterData = {
                email
            };
            
            const docRef = await addDoc(collection(db, 'newsletters'), newsletterData);
            
            setEmail('');
            
            setSubscriptionStatus(true);
            setTimeout(() => {
                setSubscriptionStatus(null);
            }, 5000);
        } catch (error) {
            setSubscriptionStatus(false);
            
            setTimeout(() => {
                setSubscriptionStatus(null);
            }, 5000);
        }
    }
        
        return (
          <>
            <FooterContainer>
            <FooterWrap>
             <Newsletter>
                <NewsletterTitle>Subscribe to Our Monthly Newsletter.</NewsletterTitle>
                    <NewsletterBody>"Receive Specialized Information Carefully Selected by Professionals in the Field.".</NewsletterBody>
                    {subscriptionStatus === true && <Alert variant="success">Welcome to the CC Community!</Alert>}
                    {subscriptionStatus === false && <Alert variant="danger">Subscription Failed. Please try again.</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <div><FormLabel>Email Address</FormLabel></div>
                            <div><FormInput
                              type='email'
                              id='email'
                              value={email}
                              placeholder='Insert Email' 
                              onChange={(e) => setEmail(e.target.value)} required
                            />
                            </div>
                            <FormButton variant='primary' type='submit'>Subscribe</FormButton>
                        </Form>
             </Newsletter>

             <FooterLinkContainer>
                <FooterLinkWrapper>
                <FooterLinks>
                <FooterLinkName>ABOUT</FooterLinkName>
                    <FooterLink to='/about'>Company</FooterLink>
                    <FooterLink to='/about'>The Team</FooterLink>
                </FooterLinks>
                
                <FooterLinks>
                    <FooterLinkName>SERVICES</FooterLinkName>
                    <FooterLink to='/services'>Accident Prevention</FooterLink>
                    <FooterLink to='/services'>Crowd Control</FooterLink>
                    <FooterLink to='/services'>People Management</FooterLink>
                    <FooterLink to='/services'>Safety Training</FooterLink>
                    <FooterLink to='/services'>Handling Hazards and Accidents</FooterLink>
                    <FooterLink to='/services'>Corporate Counselling</FooterLink>
                </FooterLinks>
                </FooterLinkWrapper>

                <FooterLinkWrapper>
                <FooterLinks>
                    <FooterLinkName>CONTACT</FooterLinkName>
                    <FooterLink to='https://www.facebook.com/' target='_blank'><FaFacebook /> Facebook</FooterLink>
                    <FooterLink to='https://www.linkedin.com/' target='_blank'><FaLinkedin /> LinkedIn</FooterLink>
                    <FooterLink to='https://www.twitter.com/' target='_blank'><FaTwitter /> Twitter</FooterLink>
                    <FooterLink to='https://www.instagram.com/' target='_blank'><FaInstagram /> Instagram</FooterLink>
                </FooterLinks>

                <FooterLinks>
                    <FooterLinkName>RESOURCES</FooterLinkName>
                    <FooterLink to='https://www.medium.com/' target='_blank'>Blog</FooterLink>
                </FooterLinks>
                </FooterLinkWrapper>
             </FooterLinkContainer>
             <FooterCopyright to='https://github.com/MsGeeO/'>CC &copy; {new Date().getFullYear()} All Rights Reserved</FooterCopyright>
               </FooterWrap>
            </FooterContainer>
    </>
  );
};

export default Footer;