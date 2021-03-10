import React, { useEffect } from 'react';
import "./SelectionForm.css"

const SelectionForm = ({allLeague, setAllLeague,setSelectedLeague}) => {

    
    useEffect(() => {
        fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
            .then((res) => res.json())
            .then((data) => {
                setAllLeague(data.leagues);
            });
    }, [setAllLeague]);

    const getSelectedLeague = (e) =>{
        const selectedvalue = e.target.value;
        setSelectedLeague(selectedvalue.replace(/ /gi, "%20"))
    }

    return (
        <div className="selection-from-container">
            <h3>Select your League </h3>
            <select onChange={getSelectedLeague} className="selection-input">
                {
                allLeague?.map((league, idx) => (<option value={league.strLeague}> {league.strLeague} </option> ))
                }
            </select>
        </div>
    );
};

export default SelectionForm;