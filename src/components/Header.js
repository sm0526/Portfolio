import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Layout } from "../layout";

const Header = () => (
    <Layout>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height=""
                    image="./assets/Selfie.jpg"
                    alt="Photo of Me"
                />
                <CardContent>
                    <Typography gutterBottom variant="h2" component="div">
                        About Me
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Hello, my name is Shanon Holland I am new to the world of coding but am loving everything I've learned so far. When I'm not learning new ways to code I can be found curled up with a good book or on a hike with my camera.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Layout>
    //needed for the header: developer's name, and navigation 
);

export default Header