import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import TeamCard from '../TeamCard/TeamCard';

const Home = () => {

    const [allTeams,setAllTeams] = useState([])

    useEffect(() =>{
        fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League")
            .then((res) => res.json())
            .then((data) => setAllTeams(data.teams));
    },[])


    return (
        <div>
            <Banner title="Sport Mania"></Banner>
            <Container>
                <Grid container spacing={5} justify="center" alignItems="center">
                    {allTeams.map((team) => {
                        return (
                            <Grid item sm={12} lg={4} md={6}>
                                <TeamCard team={team}></TeamCard>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </div>
    );
};

export default Home;