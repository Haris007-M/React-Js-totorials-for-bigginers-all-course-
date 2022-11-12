import React, { useState } from "react";

export default function Form() {
  const [state, setState] = useState({
    name: "",
    post: "",
  });
  const [posts, setPosts] = useState([]);
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const submit = { ...state, id: new Date().getTime().toString() };
    setPosts([...posts, submit]);
    setState({ name: "", post: "" });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Form</h1>
        <h5>Create a Post</h5>
        <label>Name </label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          value={state.name}
          onChange={onChange}
        />{" "}
        <br />
        <label>Post </label>
        <input
          type="text"
          name="post"
          id="post"
          autoComplete="off"
          value={state.post}
          onChange={onChange}
        />{" "}
        <br />
        <button type="submit">Post</button>
      </form>
      <div>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              Name : <p>{post.name}</p>
              Post : <p>{post.post}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
