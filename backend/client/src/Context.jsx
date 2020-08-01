import React, { useState } from "react";
import items from "./data.js";
import axios from "axios";

const DataContext = React.createContext();

function DataProvider({ children }) {
  const [data, setData] = useState(items);
  const [msg, setMsg] = useState();

  //Task Upload functionality
  async function handleUpload(task) {
    const formData = new FormData();
    formData.append("file", task.img);
    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { filePath } = res.data;
      task.img = filePath;
      setMsg("File Uploaded");
      setData([...data, task]);
    } catch (err) {
      if (err.response.status === 500) {
        setMsg("There was a problem with the server");
      } else {
        setMsg(err.response.data.msg);
      }
    }
  }

  function getSubmission(slug) {
    const tempData = [...data];
    const task = tempData.find((task) => task.slug === slug);
    return task;
  }

  //Rating functionality
  function rating(e, task, student) {
    let tempData = [...data];
    tempData = tempData.filter((tempItem) => tempItem !== task);

    const value = +e.target.value;
    const submission = task.submissions.find(
      (item) => item.student === student
    );
    submission.rating = value;
    setData([...tempData, task]);
  }

  return (
    <DataContext.Provider
      value={{ data: [...data], getSubmission, handleUpload, msg, rating }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { DataContext, DataProvider };
