import React, { useState } from "react";

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

  return (
    <div className="container p-5">
      <h1>Create Post</h1>
      {JSON.stringify(state)}
      <br />
      <form>
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

        <div className="form-group">
          <button className="btn btn-primary">Create</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
