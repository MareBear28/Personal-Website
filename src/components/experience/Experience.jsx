import React from "react";
import "./experience.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__languages">
          <h3>Languages</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details-icon"/>
              <div>
                <h4>SQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details-icon"/>
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details-icon"/>
              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details-icon"/>
              <div>
                <h4>Kotlin</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__tools">
          <h3>Tools</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details-icon"/>
              <div>
                <h4>VS Code</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details-icon"/>
              <div>
                <h4>IntelliJ</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details-icon"/>
              <div>
                <h4>GitHub</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details-icon"/>
              <div>
                <h4>Figma</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details-icon"/>
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details-icon"/>
              <div>
                <h4>Android Studio</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
