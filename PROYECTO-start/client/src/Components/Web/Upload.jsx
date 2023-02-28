import React from 'react'
import axios from 'axios';
import { Component } from 'react';

const Upload = () => {
    let state = {
        // Initially, no file is selected
        selectedFile: null
    };

    // On file select (from the pop up)
    let onFileChange = event => {
        // Update the state
        this.setState({ selectedFile: event.target.files[0] });
    };
    // On file upload (click the upload button)
    let onFileUpload = () => {
        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        // Details of the uploaded file
        console.log(this.state.selectedFile);

        // Request made to the backend api
        // Send formData object
        axios.post("api/uploadfile", formData);
    };

    // File content to be displayed after
    // file upload is complete
    const fileData = () => {
        if (this.state.selectedFile) {
            
            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>
                    <p>File Type: {this.state.selectedFile.type}</p>
                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };

    
    return (
        <div>
            <h1>
                GeeksforGeeks
            </h1>
            <h3>
                File Upload using React!
            </h3>
            <div>
                <input type="file" onChange={onFileChange} />
                <button onClick={onFileUpload}>
                    Upload!
                </button>
            </div>
            {fileData()}
        </div>
    );
    
}

export default Upload