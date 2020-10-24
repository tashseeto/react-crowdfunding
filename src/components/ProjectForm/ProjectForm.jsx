import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


function ProjectForm () {
    const [project, setProject] = useState({
        projectTitle: "",
        projectDescription: "",
        goal: 0,
        image: "",
        dateEnd: "",
    });

    const history = useHistory();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setProject((prevProject) => ({
            ...prevProject,
            [id]: value,
        }));
    };

    const postData = async () => {
        const response = await fetch(
        `${process.env.REACT_APP_API_URL}projects/`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Token ${token}`,
        },
        body: JSON.stringify(),
        }
        );
        return response.json();
    };

    const handleSubmit = (e) => {
        console.log(project.projectTitle)
        console.log(project.projectDescription)
        console.log(project.goal)
        console.log(project.image)
        console.log(project.dateEnd)
        e.preventDefault();
        if (project.projectTitle && project.projectDescription && project.goal && project.image && project.dateEnd) {
        postData().then((response) => {
            console.log(response)
        setProject("project", response.project);
        history.push("/");
        });
        }
    };

    return (
        <form>
        <div>
        <label htmlFor="projectTitle">Project Title:</label>
        <input
            type="text"
            id="projectTitle"
            placeholder="Enter Project Title"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="projectDescription">Description:</label>
        <input 
            type="text"
            id="projectDescription"
            placeholder="Project Description"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="goal">Goal:</label>
        <input
            type="number"
            id="goal"
            placeholder="Goal"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="image">Image:</label>
        <input
            type="text"
            id="image"
            placeholder="Image"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="dateEnd">Date end:</label>
        <input
            type="date"
            id="dateEnd"
            onChange={handleChange}
        />
        </div>
   
        <button type="submit" onClick={handleSubmit}>
        Submit
        </button>
        </form>
    );
}

export default ProjectForm;