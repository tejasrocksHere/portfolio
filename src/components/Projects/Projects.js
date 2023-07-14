import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import helmet from "../../Assets/Projects/img.jpg";
import painter from "../../Assets/Projects/aipainter.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={helmet}
              isBlog={false}
              title="Smart Helmet For Visually Impaired People Using IOT and ML"
              description=" The project aims to develop a device that will help visually impaired individuals navigate through their environment with ease using ultrasonic sensors, GSM technology, and a camera sensor. We believe that our project has the potential to significantly improve the quality of life for visually impaired individuals "
              ghLink="https://drive.google.com/file/d/1r7W8w5Iu8ebyge6ORWC3T9dvKD066r-Z/view?usp=sharing"
              demoLink="https://drive.google.com/file/d/1r7W8w5Iu8ebyge6ORWC3T9dvKD066r-Z/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Amazon-Clone"
              description="application built using ReactJS and Firebase. As we all know, e-commerce websites are essential for developers, which is why I decided to create my own version of the Amazon app."
              ghLink="https://github.com/tejasrocksHere/amazon-full-stack-clone.git"
              demoLink="https://www.linkedin.com/posts/tejas-mundhe-578bb6232_react-reactjs-learning-activity-7048645973606100992-f5SS?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={painter}
              isBlog={false}
              title="AI-Virtual Painter"
              description="An air virtual painter is a software application that allows users to paint on a screen using only their hands. The application uses computer vision and OpenCV to track the user's hand movements and to translate them into brush strokes. This allows users to paint in the air, without the need for any physical tools."
              
              ghLink="https://github.com/tejasrocksHere/AI-Virtual-Painter"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="My Cool Python Projects"
              description="Al-Virtual Paint, data_analysis, face-attendance-sys, face-recgn-attendence, FingerCounting, image-resizer, live_paint, opencv, pdf-merger, robospeak, SignLangunageDetection, weather, weatherapp, youtubeDownloader"
              ghLink="https://github.com/tejasrocksHere/My-Python-Projects"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://user-images.githubusercontent.com/60054130/124419060-6e3a5f80-dd7a-11eb-8bb8-76b910e84728.png'
              isBlog={false}
              title="Handgesture Volume control and Games"
              description="This is a Python module that utilizes the MediaPipe library for hand detection in real-time video streams. The module provides functionality to detect and track hand landmarks, such as finger tips and palm positions, and enables the development of interactive hand-based games or applications."
              ghLink="https://github.com/tejasrocksHere/Python-gesture-control"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Image Classifier"
              description="Both face recognition and image classification have revolutionized various industries by enabling advanced visual understanding and decision-making capabilities. They have immense potential for improving security, automating processes, enhancing user experiences, and advancing research in computer vision and AI."
              // ghLink="
  
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
