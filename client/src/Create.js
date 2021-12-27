import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  //state
  const [state, setState] = useState({
    title: "",
    content: "",
    user: "",
  });

  const { title, content, user } = state;

  // onChange event handler

  //   const handleChange = (value) => (event) => {
  //     setState({ ...state, [value]: event.target.value });
  //   };

  function handleChange(value) {
    return function (event) {
      setState({ ...state, [value]: event.target.value });
    };
  }

  const handleSubmit = (event) => {
    // console.table({ title, content, user });
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/post`, { title, content, user })
      .then((response) => {
        // Empty the state
        console.log(response);
        // show success alert
        setState({ ...state, title: "", content: "", user: "" });
        alert(`Post with ${response.data.title} is created `);
      })
      .catch((error) => {
        console.log(error.response);
        alert(error.response.data.error);
      });
  };

  return (
    <div className="container p-5">
      <h1>Create Post</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="text-muted">Title</label>
          <input
            onChange={handleChange("title")}
            value={title}
            type="text"
            className="form-control"
            placeholder="Post title"
            required
          />
        </div>
        <br />

        <div className="form-group">
          <label className="text-muted">Content</label>
          <textarea
            onChange={handleChange("content")}
            value={content}
            type="text"
            className="form-control"
            placeholder="Write something ..."
            required
          ></textarea>
        </div>
        <br />

        <div className="form-group">
          <label className="text-muted">User</label>
          <input
            onChange={handleChange("user")}
            value={user}
            type="text"
            className="form-control"
            placeholder="Your name"
            required
          />
        </div>
        <br />

        <div className="form-group">
          <button className="btn btn-primary">Create</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
