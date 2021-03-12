import React from "react";
import "./App.css";
import Nav from "./componene/nav";
import Main from "./componene/main";
import Education from "./componene/education";
import Skills from "./componene/skills";
import Project from "./componene/project";
import Footer from "./componene/Footer";

function App() {
  return (
    <>
      <header>
        <Nav />
        <Main />
        <Education></Education>
        <Skills />

        <h1 className="title">
          <i class="fa fa-suitcase"> Education</i>
        </h1>
        <div className="exp" id="3">
          <p>
            As a fresher, I don't have any work experience. If I got selected
            then with the help of my skills and knowledge, I will do my best in
            order to achieve all the goals of the company
          </p>
        </div>
        <Project />
        <Footer />
      </header>
    </>
  );
}

export default App;
