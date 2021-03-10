import { Container, Grid, Paper, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import PinDropIcon from "@material-ui/icons/PinDrop";
import FlagIcon from "@material-ui/icons/Flag";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import { useParams } from "react-router";
import Banner from "../Banner/Banner";
import "./TeamDetails.css";
import maleImg from "../../images/male.png";
import famaleImg from "../../images/female.png";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const TeamDetails = () => {
    const { teamId } = useParams();
    const [team, setTeam] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        console.log(url);
        fetch(url)
            .then((res) => res.json())
            .then((data) => setTeam(data.teams[0]));
    }, [teamId]);

    //distructue team object
    const { strTeamBanner, strTeamBadge, strGender, strSport, strCountry, strDescriptionEN, strYoutube, strInstagram, strTwitter, strFacebook, intFormedYear, strTeam, strTeamShort } = team;

    return (
        <div>
            <Banner bannerBg={strTeamBanner} img={strTeamBadge}></Banner>


            <Container>
                <Grid className="team-details-covar" container justify="center" alignItems="center" spacing={4}>

                    <Grid className="team-details-desc" item xs={12} md={6}>
                        <h4>{`${strTeam}  ${strTeamShort === null ? "" : ", " + strTeamShort}`}</h4>
                        <h6>
                            <PinDropIcon className="icon" /> Founded on : {intFormedYear}{" "}
                        </h6>
                        <h6>
                            <FlagIcon className="icon" /> Country : {strCountry}{" "}
                        </h6>
                        <h6>
                            <SportsSoccerIcon className="icon" /> Sports Type : {strSport}
                        </h6>
                        <h6>
                            <i className=" icon fas fa-mars-stroke"></i> Gender : {strGender}
                        </h6>
                    </Grid>

                    <Grid className="team-details-img" item xs={12} md={6}>
                        <img src={strGender?.toLowerCase() === "male" ? maleImg : strGender?.toLowerCase() === "female" ? famaleImg : ""} alt="" />
                    </Grid>
                </Grid>


                <Paper className="team-details-large-desc" elevation={3}>
                    <Typography> {strDescriptionEN}</Typography>
                    <div className="social-icons">
                        <a rel="noreferrer" target="_blank" href={strYoutube ? `https://${strYoutube}` : "#"}>
                            <YouTubeIcon className="icon youtube " />
                        </a>
                        <a rel="noreferrer" target="_blank" href={`https://${strFacebook}`}>
                            <FacebookIcon className="icon facebook " />
                        </a>
                        <a rel="noreferrer" target="_blank" href={`https://${strInstagram}`}>
                            <InstagramIcon className="icon instagram" />
                        </a>
                        <a rel="noreferrer" target="_blank" href={`https://${strTwitter}`}>
                            <TwitterIcon className="icon twitter" />
                        </a>
                    </div>
                </Paper>


            </Container>
        </div>
    );
};

export default TeamDetails;
