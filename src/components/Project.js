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
                    image=""
                    alt="project"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Project
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Description of Project
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Link to Deployed</Button>
                    <Button size="small">Link to Repo</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image=""
                    alt="project"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Project
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Description of Project
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Link to Deployed</Button>
                    <Button size="small">Link to Repo</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image=""
                    alt="project"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Project
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Description of Project
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Link to Deployed</Button>
                    <Button size="small">Link to Repo</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image=""
                    alt="project"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Project
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Description of Project
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Link to Deployed</Button>
                    <Button size="small">Link to Repo</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image=""
                    alt="project"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Project
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Description of Project
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Link to Deployed</Button>
                    <Button size="small">Link to Repo</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image=""
                    alt="project"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Project
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Description of Project
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Link to Deployed</Button>
                    <Button size="small">Link to Repo</Button>
                </CardActions>
            </Card>
        </div>
    </Layout>
    //needed for projects: for each project you feature in the portfolio you need to include an image of the deployed application, the title of the project, a link to the github repo, +/- a link to the deployed app(some weren't deployable)
);

export default Project