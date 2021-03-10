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
            <Banner bannerBg={"https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhZGl1bXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"} title="Teams Monitor"></Banner>
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