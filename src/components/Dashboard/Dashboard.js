import React from "react";
import { Row, Col, Card } from "antd";
import BookingImg from "../../images/Booking.jpeg";
import TrackerImg from "../../images/Tracker.jpeg";
import CrowdResourcesImg from "../../images/CrowdResources.jpeg";
import NotesImg from "../../images/Notes.jpeg";
import PaymentImg from "../../images/Payment.jpeg";
import {
  DashboardContainer,
  DashboardTitle,
  Paragraph,
  DashboardCard,
} from "./DashboardStyling";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

/* Creates private dashboard for logged in users to access. */
const Dashboard = () => {
  const navigate = useNavigate();

  const clientData = [
    {
      id: 1,
      title: "Schedule Appointments",
      description: "View your previous events and Book New Ones.",
      image: BookingImg,
      route: "/scheduleappointment",
    },

    {
      id: 2,
      title: "Event Tracker",
      description: "Track and Manage Your Scheduled Events Information.",
      image: TrackerImg,
      route: "/eventtracker",
    },

    {
      id: 3,
      title: "Event Notes",
      description: "Access Notes, Details and Feedback regarding your event.",
      image: NotesImg,
      route: "/eventnote",
    },

    {
      id: 4,
      title: "Payment Service",
      description:
        "Choose Your Payment Plan and Manage Your Fees all in One Place.",
      image: PaymentImg,
      route: "/payment-services",
    },

    {
      id: 5,
      title: "Library",
      description: "Read More on How to Manage Crowd in your Events.",
      image: CrowdResourcesImg,
      route: "/library",
    },
  ];

  return (
    <>
      <DashboardContainer>
        <DashboardTitle>
          Welcome
          <Paragraph>
            Access Everything You Require with Just a Single Click.
          </Paragraph>
        </DashboardTitle>
        <Row gutter={20}>
          {clientData.map((item) => (
            <Col
              span={8}
              key={item.id}
              onClick={() => {
                navigate(item.route);
              }}
            >
              <DashboardCard
                hoverable
                cover={<img alt={item.title} src={item.image} />}
              >
                <Meta title={item.title} description={item.description} />
              </DashboardCard>
            </Col>
          ))}
        </Row>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;