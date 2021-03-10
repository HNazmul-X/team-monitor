import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router';

const TeamDetails = () => {
    const {teamId} = useParams()
    const [team, setTeam] = useState({});

    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data))

    },[teamId])
    console.log(team)

    return (
        <div>
            <h1>Hello This is Team Details {teamId}</h1>
        </div>
    );
};

export default TeamDetails;