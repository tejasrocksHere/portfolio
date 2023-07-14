import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Tejas Mundhe </span>
            from <span className="purple"> Mumbai, India. </span>
            <br /> I am a third-year student pursuing a degree in Computer Science with a specialization in Artificial Intelligence and Machine Learning.  <br />
            <br />
            Apart from coding, some other activities that I love to do!
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games😊
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating Python/Web Projects📲
            </li>
            <li className="about-activity">
              <ImPointRight /> Movie/Web Critisms😍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Work Hard till Success"{" "}
          </p>
          <footer className="blockquote-footer">Tejas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
