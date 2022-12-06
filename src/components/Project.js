import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Layout } from "../layout";

const Project = () => (
    <Layout>
                    <h1>Portfolio of Projects</h1>

        <div className="d-flex justify-content-evenly flex-wrap">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="./assets/NoteTaker.png"
                    alt="project"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Note Taker
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        An app that will allow a user to take down, store and remove notes
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"><a href="https://dry-tor-76852.herokuapp.com/">Link to Deployed</a></Button>
                    <Button size="small"><a href="https://github.com/sm0526/Note-Taker">Link to Repo</a></Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="./assets/eCommerceBackEnd.png"
                    alt="project"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        E-Commerce Back End
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        This is a back end for an e-commerce site. There is a working Express.js API that uses Sequelize to interact with a MySQL database
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"><a href="https://github.com/sm0526/E-Commerce-Back-End">Link to Repo</a></Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="./assets/EmployeeTracker.png"
                    alt="project"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Employee Tracker
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        A command line application that will allow a business to keep track of their departments, employee roles, and employees
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"><a href="https://github.com/sm0526/Employee-Tracker">Link to Repo</a></Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="./assets/TeamProfileGenerator.png"
                    alt="project"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Team Profile Generator
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        A command-line application that takes in user information about a software engineering team and using that information generates an HTML webpage that displays a summary for each team member
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Link to Repo</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="./assets/ReadMeCreator.png"
                    alt="project"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        README Creator
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        A command-line application that will take in user information and create a README.md
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"><a href="https://github.com/sm0526/ReadMeCreator">Link to Repo</a></Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="./assets/PasswordCreator.png"
                    alt="project"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Password Generator
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        App that will generate a password with a certain number of characters, and type of characters.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"><a href="https://sm0526.github.io/Javascript-Password-Creator/">Link to Deployed</a></Button>
                    <Button size="small"><a href="https://github.com/sm0526/Javascript-Password-Creator">Link to Repo</a></Button>
                </CardActions>
            </Card>
        </div>
    </Layout>
    //needed for projects: for each project you feature in the portfolio you need to include an image of the deployed application, the title of the project, a link to the github repo, +/- a link to the deployed app(some weren't deployable)
);

export default Project