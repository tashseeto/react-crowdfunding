import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import convertDateTime from "../components/Helpers/DateConverter";


function ProjectPage(){
    const [projectData, setProjectData] = useState({ pledges: [] });
    const { id } = useParams();



    useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
    .then((results) => {
    return results.json();
    })
    .then((data) => {
    setProjectData(data);
    });
    }, []);


    return (
        <div>
        <h1>{projectData.title}</h1>
        <img src={projectData.image} />
        <h3>{projectData.description}</h3>

        <h3>Project created by {projectData.owner}</h3>
        <h3>Project goal {projectData.goal}</h3>
        <h3>Amount raised so far {projectData.total_raised}</h3>
        <h3>Project ends on {convertDateTime(projectData.date_end,0)}</h3>
        {/* <h3>{`Status: ${projectData.is_open}`}</h3> */}
        <h3>Pledges so far</h3>
        <ul>
            {projectData.pledges.map((pledgeData, key) => {
                return (
                    <li>
                        {pledgeData.amount} dollars from supporter # {pledgeData.supporter}
                    </li> 
                );
            })}
        </ul>
        </div>
    );
}

export default ProjectPage;