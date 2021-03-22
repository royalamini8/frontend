import React from 'react'
import {Avatar, Button, Grid, Paper, TextField, Link, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Login=({handleChange})=> {
    const paperStyle={padding:20,height:'auto',width:370,margin:"0 auto"}
    const avatarStyle={backgroundColor: '#3f51b5'}
    const fieldstyle={margin:'5px 0'}
    const h2style={margin:'8px 0'}
    const btnstyle={margin:'5px 0'}
    return (
       <Grid>
           <Paper style={paperStyle}>
               <Grid align='center'>
               <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2 style={h2style}>Sign In</h2>
               </Grid>
               <form>
               <TextField style={fieldstyle} label="Username or ID" placeholder="Enter Username or ID" variant="filled" fullWidth required/>
               <TextField style={fieldstyle} label="Password" placeholder="Enter Password" type='password' variant="filled" fullWidth required/>
               </form>
               <FormControlLabel
          control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Remember me"
      />
      <Button style={btnstyle} type='submit' color='primary' variant='contained' fullWidth>Sign In</Button>
      <Typography>
      <Link href="#">
        Forgot Password?
      </Link>
      </Typography>
      <Typography> If you're not registered,
      <Link href="" onclick={()=>handleChange("event", 0)}> 
         Sign Up
      </Link>
      </Typography>
        </Paper>
       </Grid>
    )
}

export default Login
