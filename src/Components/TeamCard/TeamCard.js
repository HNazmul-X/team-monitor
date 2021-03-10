import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grow } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { lightBlue } from "@material-ui/core/colors";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        marginBottom: 50,
        background: lightBlue[50],
        height: "100%"
    },
    cardButton: {
        width: "70%",
        display: "flex",
        margin: "auto",
        marginBottom:20,
    },
    cardImg: {
        objectFit: "contain",
        padding: 20,
        marginTop:20,
    },
    headTitle:{
        fontWeight:700,
        textAlign: "center",
    },
    cardDesc:{
        textAlign: "center",
        fontSize: 18,
    }
});

const TeamCard = ({team}) => {

    const classes = useStyles();
    const { strTeamBadge, strTeam, idTeam, strSport } = team;
    
    return (
        <>
            <Grow in={true}>
                <Card elevation={5} className={`${classes.root} my-card`}>
                    <CardActionArea>
                        <CardMedia className={`${classes.cardImg}`} component="img" alt="Contemplative Reptile" height="200" image={strTeamBadge} title="Contemplative Reptile" />
                        <CardContent>
                            <Typography mt="10px" className={`${classes.headTitle}`} gutterBottom variant="h4" component="h2">
                                {strTeam}
                            </Typography>
                            <Typography className={`${classes.cardDesc}`} variant="body2" textAlign="center" color="textSecondary" component="p">
                                Sport Type : {strSport}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions textAlign="center">
                        <Link onclick={() => document.title = (`welcome to ${strTeam} `)} className="link-button" to={`/details/${idTeam}`}>
                            <Button className={classes.cardButton} variant="outlined" color="primary">
                                Explore <ArrowRightAltIcon />
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grow>
        </>
    );
};

export default TeamCard;