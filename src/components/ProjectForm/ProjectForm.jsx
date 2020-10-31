import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import "./ProjectForm.css"


function ProjectForm () {
    const [projectData, setProjectData] = useState({
        title: "",
        description: "",
        goal: 0,
        image: "",
        date_created: "",
        date_end: "",
    });

    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState(null)
    const [newProjectId, setNewProjectId] = useState()

    // methods
    const handleChange = (e) => {
        // e.preventDefault()
        const { id, value } = e.target;
        setProjectData((prevProjectData) => ({
            ...prevProjectData,
            [id]: value,
        }));
    };


    //when you get a newProjectId, if it is a number (project id number), take you to the preview of the project
    useEffect(() => {
        if (!isNaN(newProjectId)) {
            const projectPath = "/project/" + newProjectId + "/"
            history.push(projectPath)
        }
    }, [newProjectId]);


    const postData = async () => {
        let token = window.localStorage.getItem("token");

        // POST request using fetch with async
        const response = await fetch(
        `${process.env.REACT_APP_API_URL}projects/`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify(projectData),
        });
        return response.json();
    };


    const handleSubmit = (e) => {
        // console.log(projectData.title)
        // console.log(projectData.description)
        // console.log(projectData.goal)
        // console.log(projectData.image)
        // console.log(projectData.date_created)
        // console.log(projectData.date_end)
        e.preventDefault();
        if (
            projectData.title &&
            projectData.description &&
            projectData.goal &&
            projectData.image &&
            projectData.date_created &&
            projectData.date_end
        ) {
            postData().then((response) => {
                console.log(response)
                setErrorMessage(response[Object.keys(response) [0]])
                setNewProjectId(response.id)
            })}
            else {
                setErrorMessage("Please complete all fields")
            }
    };

    return (

        <div className="form-wrap">
        <h1>New Project</h1>

        <form>
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
                type="text"
                id="title"
                placeholder=""
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <input 
                type="text"
                id="description"
                placeholder="What's your project about?"
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="goal">Goal</label>
            <input
                type="number"
                id="goal"
                placeholder="Enter amount"
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
                type="text"
                id="image"
                placeholder=""
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="date_created">Date created</label>
            <input
                type="datetime-local"
                id="date_created"
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="date_end">Date end</label>
            <input
                type="datetime-local"
                id="date_end"
                onChange={handleChange}
            />
        </div>
   
        <button type="submit" onClick={handleSubmit}>
            Save
        </button>
        </form>

        {errorMessage != null ? <p className="error">{errorMessage}</p> : null}
        </div>
    )
};

export default ProjectForm;