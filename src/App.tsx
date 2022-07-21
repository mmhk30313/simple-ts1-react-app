import React, { createContext } from 'react';
import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import { get_users } from './utils/services/user_list';
import AllRoutes from './routes/Routes';
import 'react-toastify/dist/ReactToastify.css';
import { Stack, CircularProgress, Typography } from '@mui/material';

export const UserContext = createContext({
  userList: [], 
  setUserList: (value: any[]) => {},
  page: 1,
  setPage: (value: number) => {},
  totalUsers: 0,
  setTotalUsers: (value: number) => {}
});


function App() {
  const [userList, setUserList]: any[] = React.useState([]);
  const [totalUsers, setTotalUsers]: any = React.useState(0);
  const [page, setPage]: any = React.useState(1);
  
  const getData = async () => {
    const userData = await get_users(page);
    // console.log(userData?.data);
  
    if(!userData?.data){
      toast.error('🦄 Sorry! Data is not found', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }else{
      notify(`🦄 Wow! page-${userData?.page} is uploaded`);
      setUserList(userData?.data);
      setPage(userData?.page);
      setTotalUsers(userData?.total);
    }
  }

  React.useEffect(() => {
    getData();
  }, [page]);

  const notify = (message: string) => toast(message, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  return (
    <UserContext.Provider value={{
      userList, setUserList,
      page, setPage,
      totalUsers, setTotalUsers,
    }}>
      {
        userList?.length > 0
        ? <AllRoutes />
        : <div className='loading'>
          <CircularProgress  color="secondary" />
          <Typography variant="h6" color="secondary">Loading...</Typography>
        </div>
      }
      <ToastContainer />
    </UserContext.Provider>
  );
}

export default App;
