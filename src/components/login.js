import React from "react";
import { Grid, Paper, Avatar, TextField , Button, Typography, Link } from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const Login = () => {
    const paperStyle={padding :20,height:'70vh', width:280, margin:"20px auto" }
    const avatarStyle={backgroundColor:'#09a95d'}
    const btnStyle={margin:'8px 0'}
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>Sign In</h2>
                </Grid>
              <TextField label='Username' placeholder='Enter Username' variant='standard' fullWidth required />
              <TextField label='Password' placeholder='Enter Password' type='password' variant='standard' fullWidth required />
              
              <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Remember me" />
              </FormGroup>
               <Button type='submit' color='primary' variant='contained'style={btnStyle} fullWidth >Sign In</Button>
               <Typography>
                    <Link href="#">
                         Forgot password?
                    </Link>
                </Typography>
                <Typography> Do you have an account ?
                    <Link href="#">
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    );
}
export default Login
