import React, { useContext } from 'react';
import { UserContext } from '../../App';
import UserDetails from './components/UserDetails';
import {Pagination, Stack, Box, Grid, styled, Paper} from '@mui/material';
import './home.scss';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = () => {
    const {userList, page, setPage} = useContext(UserContext);
    // console.log({userList, page});
    const handleChange = (event: React.ChangeEvent<unknown>, value: any = 0) => {
        console.log({page: value});
        setPage(value);
    };
    return (
        <React.Fragment>
            <Box className='container' sx={{ flexGrow: 1 }}>
                <Grid container spacing={0} columns={30}>
                    {
                        userList.length > 0
                        ? userList?.map((user: any) => {
                            return <Grid key={user?.id} className='card-body' item={true} xs={30} sm={15} md={15} lg={10}>
                                <Item>
                                    <UserDetails style={{margin: 'auto', justifyContent: 'center'}} user={user} />
                                </Item>
                            </Grid>
                        })
                        : null
                    }
                </Grid>
            </Box>
            <Stack spacing={2}>
                <Pagination 
                    style={{margin: 15, display: 'flex', justifyContent: 'center'}} 
                    count={2} 
                    page={page} 
                    onChange={handleChange} 
                    color="secondary"
                />
            </Stack>
        </React.Fragment>
    );
};

export default Home;