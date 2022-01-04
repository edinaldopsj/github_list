import React from 'react';

/* My name */
const Name = function NameComponent() {
  return <h2>Edinaldo Pio da Silva Junior</h2>;
};

/* A catchphrase ;) */
const MyBio = function MyBioComponent() {
  return (
    <quote>
      Coding and dreaming with my own projects! Expecting to help companies to
      build complex web applications. Find my most relevant jobs for this
      opportunity below!
    </quote>
  );
};

/* What I do Best */
const MY_FRONTEND_SKILLS = ['React', 'React Hooks', 'React Redux', 'VueJS 2'];
const MY_BACKEND_SKILLS = ['NodeJS / Express.js', 'PHP / Laravel'];

const MySkills = function SkillComponent({ skills }) {
  return skills.map(skill => <li>{skill}</li>); // Loop and show into a list
};

/* The fullPiece */
const MyResume = function ResumeComponent() {
  return (
    <>
      <Name />
      <MyBio />
      <MySkills skills={MY_FRONTEND_SKILLS} />
      <MySkills skills={MY_BACKEND_SKILLS} />
    </>
  );
};

export default MyResume;
