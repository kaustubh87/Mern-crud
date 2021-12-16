import React, { useState } from "react";

const Create = () => {
  //state
  const [state, setState] = useState({
    title: "",
    content: "",
    user: "",
  });

  const { title, content, user } = state;

  return (
    <div className="container p-5">
      <h1>Create Post</h1>
      <br />
      <form>
        <div className="form-group">
          <label className="text-muted">Title</label>
          <input
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
