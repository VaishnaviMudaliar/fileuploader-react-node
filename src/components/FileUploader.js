import './fileuploader.css';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
export default function FileUploader() {
  const [files, setFiles] = useState([]);
  const onInputChange = (e) => {
    setFiles(e.target.files);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      data.append('file', files[i]);
    }

    axios
      .post('http://localhost:8000/upload', data)
      .then((e) => {
        console.log('Success');
      })
      .catch((e) => {
        console.error('Error', e);
      });
  };
  return (
    <div className="FileUploader">
      <form method="post" action="#" id="#" onSubmit={onSubmit}>
        <div className="form-group files">
          <label>Upload Your File </label>
          <input
            type="file"
            onChange={onInputChange}
            className="form-control"
            multiple
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
