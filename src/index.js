import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="profile1.jpg" alt="Mobolaji Ola" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Mobolaji Ola</h1>
      <p>
        Full-stack Web Developer and Cybersecurity. When not coding or securing
        a system, I like to listen to music, watch movies, or to just enjoy the
        silence/sleep.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="💪🏾" bg="orangered" />
      <Skill skill="JavaScript" emoji="💪🏾" bg="yellow" />
      <Skill skill="Web Design" emoji="👌🏾" bg="lime" />
      <Skill skill="Git and GitHub" emoji="💪🏾" bg="ash" />
      <Skill skill="React" emoji="💪🏾" bg="lightblue" />
      <Skill skill="Tailwind" emoji="✌🏾" bg="skyblue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.bg }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
