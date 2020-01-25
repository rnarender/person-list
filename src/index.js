import React from "react";
import RenderDOM from "react-dom";
import "./index.css";

const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <img src={url} alt="person"></img>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="34" name="john" job="developer"></Person>
      <Person img="32" name="bob" job="designer">
        <p>lorem lorem</p>
      </Person>
      <Person img="44" name="devid" job="artist"></Person>
      <Person img="45" name="raju" job="Manager"></Person>
      <Person img="55" name="Shiv" job="Maker"></Person>
    </section>
  );
};

RenderDOM.render(<PersonList></PersonList>, document.getElementById("root"));
