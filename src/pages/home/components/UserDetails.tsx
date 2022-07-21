import React from 'react';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { 
    Typography, 
    Card, CardContent, CardMedia, CardActionArea, 
    Box, Rating
} from '@mui/material';
const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
});

const UserDetails = ({user}: any) => {
    return (
        <React.Fragment>
            <Card className='user-details' sx={{ maxWidth: 400 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={user?.avatar || "https://picsum.photos/200"}
                        alt="user avatar"
                    />
                    <CardContent>
                        <Typography gutterBottom style={{color: 'purple'}} variant="h6" component="div">
                            Name: {user?.name || (user?.first_name + ' ' + user?.last_name)}
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div">
                            Email: {user?.email}
                        </Typography>
                        <Typography variant="overline" style={{color: '#5c2a63'}} color="text.secondary">
                            Dummy description: Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        <Box
                            sx={{
                                '& > legend': { mt: 2 },
                            }}
                        >
                            <StyledRating
                                name="customized-color"
                                defaultValue={2}
                                getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                precision={0.5}
                                icon={<FavoriteIcon fontSize="inherit" />}
                                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                            />
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </React.Fragment>
    );
};

export default UserDetails;