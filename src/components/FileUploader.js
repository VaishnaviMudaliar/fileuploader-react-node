import './fileuploader.css';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
export default function FileUploader() {
  const [file, setFile] = useState(null);
  const onInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', file);
    axios
      .post('//localhost : 8000/Upload', data)
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
        <div class="form-group files">
          <label>Upload Your File </label>
          <input
            type="file"
            onChange={onInputChange}
            className="form-control"
            multiple=""
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
