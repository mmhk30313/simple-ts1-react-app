import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './CreateUser.scss';
import { Button, styled, ButtonProps } from '@mui/material';
import { purple } from '@mui/material/colors';
import { create_user } from '../../utils/services/user_create';
import { toast, ToastContainer } from 'react-toastify';
import { UserContext } from '../../App';
const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
}));
const CreateUser = () => {
    const {setUserList, userList} = useContext(UserContext);
    const handleSubmit = async(values: any, resetForm: any) => {
        // console.log(values);
        const user_res = await create_user(values);
        console.log({user_res});
        if(user_res?.statusCode === 201){
            const allUsers = [...userList,user_res];
            setUserList(allUsers);
            toast(`🦄 User ${user_res?.name} is created`, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => {
                resetForm();
            }, 2000);
        }else{
            toast.info(`🦄 User ${user_res?.name} is not created`, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <React.Fragment>
            <ToastContainer />
            <Formik
                initialValues={{ name: '', job: '', email: '', password: '' }}
                validate={(values: any) => {
                    const errors: any = {};
                    if (!values.name) {
                        errors.name = 'Name is required';
                    } else if (!values.email) {
                        errors.email = 'Email is required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values: any, {resetForm}: any) => {
                    handleSubmit(values, resetForm);
                }}
            >
                {({ isSubmitting }: any) => (
                    <div className="form-container">
                        <Form className='form'>
                            <h2 style={{textAlign: 'center', color: '#9C27B0'}}>Create User</h2>
                            <label htmlFor="name">Name</label>
                            <Field className='form-control' type="text" name="name" placeholder="Enter your name" required />
                            <ErrorMessage className='error-message' name="name" component="div" />
                            <label htmlFor="job">Job Title</label>
                            <Field className='form-control' type="text" name="job" placeholder="Enter your job title" />
                            <label htmlFor="email">Email</label>
                            <Field className='form-control' type="email" name="email" placeholder="Enter your email" />
                            <ErrorMessage className='error-message' name="email" component="div" />
                            <label htmlFor="password">Password</label>
                            <Field className='form-control' type="password" name="password" placeholder="password" />
                            <ErrorMessage className='error-message' name="password" component="div" />
                            <ColorButton className='form-btn' type="submit">
                                Submit
                            </ColorButton>
                        </Form>
                    </div>
                )}
            </Formik>
        </React.Fragment>
    );
};

export default CreateUser;