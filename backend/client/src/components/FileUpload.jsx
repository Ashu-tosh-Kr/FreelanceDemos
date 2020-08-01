import React, { useContext, useState } from "react";
import { DataContext } from "../Context";

export default function FileUpload() {
  const { handleUpload } = useContext(DataContext);

  const [task, setTask] = useState({
    img: "",
    imgName: "Choose File",
    title: "",
    slug: "",
    desc: "",
    submissions: [],
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpload(task);
        }}
      >
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Task Name
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="title"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) =>
              setTask({ ...task, title: e.target.value, slug: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Description</span>
          </div>
          <textarea
            className="form-control"
            aria-label="With textarea"
            onChange={(e) => setTask({ ...task, desc: e.target.value })}
          />
        </div>
        <div className="custom-file mt-4">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={(e) => {
              setTask({
                ...task,
                img: e.target.files[0],
                imgName: e.target.files[0].name,
              });
            }}
          />
          <label className="custom-file-label" htmlFor="customFile">
            {task.imgName}
          </label>
        </div>
        <input
          type="submit"
          value="upload"
          className="btn btn-primary btn-block mt-4"
        />
      </form>
    </div>
  );
}
