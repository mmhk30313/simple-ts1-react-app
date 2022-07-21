import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const UserDetails = ({user}: any) => {
    return (
        <React.Fragment>
            <Card className='user-details' sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={user?.avata || "https://picsum.photos/200"}
                        alt="user avatar"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        Name: {user?.first_name + ' ' + user?.last_name}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div">
                        Email: {user?.email}
                    </Typography>
                    <Typography variant="overline" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </React.Fragment>
    );
};

export default UserDetails;