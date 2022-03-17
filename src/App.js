import React from 'react';
import './style.css';
import FileUploader from './components/FileUploader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <FileUploader />
      <ToastContainer />
    </div>
  );
}
