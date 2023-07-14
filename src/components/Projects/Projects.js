import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import dino from "../../Assets/Projects/dino.jpg";
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
              description="Application built using ReactJS and Firebase. As we all know, e-commerce websites are essential for developers, which is why I decided to create my own version of the Amazon app.learn advanece concept of web-dev"
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://preview.redd.it/wrpe2necimp91.png?width=640&crop=smart&auto=webp&s=86995d49be70d89793af0cdce800dff3158ad302'
              isBlog={false}
              title="Youtube Clone"
              description="
              The Youtube Clone is a web app that mimics YouTube, offering video search, playback, playlist management, channel subscriptions, comments, and likes/dislikes. It leverages React, Node.js/Express, and the YouTube Data API, providing developers with hands-on experience in building a feature-rich web application and understanding video-sharing platform concepts."
              // ghLink="
  
              demoLink="https://tejatube.netlify.app/"      
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
  
  
              imgPath='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8tu0jfWhePEbFfWazySPI2Bt0nMCQ65DaDA&usqp=CAU'
              isBlog={false}
              title="Tick-tac-toe"
              description="
              
The Tic Tac Toe Game is a timeless and engaging web-based game developed using HTML, CSS, and JavaScript. It allows players to compete against each other in a classic battle of X's and O's on a grid of 3x3 squares. With a simple and intuitive user interface, players take turns marking their symbols on the board, aiming to create a winning pattern horizontally, vertically, or diagonally. "
              // ghLink="
  
              demoLink="https://tejachi1stgame.netlify.app/"      
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dino}
              isBlog={false}
              title="Dino-Game🦖"
              description="The Dino Game is a classic web-based game built with HTML, CSS, and JavaScript. Inspired by the popular Chrome offline dinosaur game, it challenges players to control a pixelated dinosaur and help it navigate through an endless desert, avoiding obstacles by jumping over them. The game features simple yet addictive gameplay, minimalist graphics, and an increasing difficulty level as the player progresses. "
              // ghLink="
  
              demoLink="https://tejasorousgame.netlify.app/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
