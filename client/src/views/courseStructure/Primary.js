import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./primary.scss";
import Victoria from "../../assets/Victoria_teaching.jpg";

function Primary(props) {
  return (
    <div className="primary-info">
      <header>
        <h1>Primary</h1>
        <div className="link-container">
          <Link className="link" to="/kindergarten">
            Kindergarten
          </Link>
          <Link className="link red" to="#">
            Primary
          </Link>
          <Link className="link" to="/middle-secondary">
            Middle and Secondary
          </Link>
        </div>
      </header>
      <div className="body">
        <div className="body-left">
          <h2>What We Offer</h2>
          <p>
            Primary school children have a high ability to learn English because
            of their social tendency, curiosity and natural enthusiasm. They
            tend to work very actively and tend quickly if they are sitting for
            long periods without activity. Therefore, physical movement,
            gestures and activities are important parts of the learning process
            for this group.
          </p>
          <p>
            We use a good balance between motor and quiet activities to help
            keep these energetic minds awake and excited. Primary school
            children also interact well with imagination, so story-reading is a
            good way to improve or increase their ability to learn.
          </p>
          <p>
            Since good pronunciation and confidence are key features of learning
            English at an early age, we optimize the use of rhyming songs,
            poems, repetitve exercises, and activities that focus on individual
            sounds or divergent sounds and help to highligh the strengths and
            rhythm of English.
          </p>
          <img src={Victoria} />
        </div>
        <div className="body-right">
          <h2>General English for 6-12 years</h2>
          <p>
            With Cambridge Children's Books, we are confident that children will
            enjoy their lessons and achieve their goals.
          </p>
          <h2>Literacy for 4-8 years</h2>
          <p>
            Fun Sounds, the world's leading way of literacy for children, your
            child will be able to recognize letters, sounds and reading as never
            before. Ideal for children coming to school or those wandering in
            reading and writing in English.
          </p>
          <h2>Government Curriculum: English language for 6-12 years</h2>
          <p>
            Jolly Phonics, the world leader in child literacy will have your
            child recognizing letter, sounds, and reading in no time at all.
            Perfect for children going into school or those who are struggling
            with their English literacy.
          </p>
          <button>Register Now</button>
        </div>
      </div>
    </div>
  );
}

const PrimaryWithRouter = withRouter(Primary);

export default PrimaryWithRouter;
