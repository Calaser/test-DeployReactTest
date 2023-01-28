import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const firstName = useRef();
  const lastName = useRef();
  const course = useRef();
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let teacherFirstName = firstName.current.value;
    let teacherLastName = lastName.current.value;
    let courseName = course.current.value;
    let path = `teachers/${courseName}/${teacherFirstName}-${teacherLastName}`
    nav(path);
  }

  return (
    <div className="main-content home">
      <h2>Front End Course Directory</h2>
      <p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
      <p>Learn front end web development and much more! This simple directory app offers a preview of our course library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the skills you need to launch a new career in front end web development.</p>
      <p>We have thousands of videos created by expert teachers on web design and front end development. Our library is continually refreshed with the latest on web technology so you will never fall behind.</p>
      <hr />
    <h3>Featured Teachers</h3>
    <Link to="teachers/HTML/Cal-Lin">Cal Lin</Link>
    <Link to="teachers/CSS/Cel-Lin">Cel Lin</Link>
    <Link to="teachers/JS/Cil-Lin">Cil Lin</Link>
    <h4>Manual Search</h4>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="FirstName" ref={firstName}/>
    <input type="text" placeholder="LastName" ref={lastName}/>
    <input type="text" placeholder="Course" ref={course}/>
    <button type="submit">Go!</button>
</form>
    </div>
  );
}

export default Home;