import React from 'react'
import {Grid, Paper, Avatar, Typography, TextField, Button, Checkbox} from '@material-ui/core'
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import StyledRadio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const Registration=()=>{
const paperStyle={padding:20,height:'auto',width:370,margin:"0 auto"}
const avatarStyle={backgroundColor: '#3f51b5'}
const fieldstyle={margin:'5px 0'}
const btnstyle={margin:'5px 0'}
return(
    <Grid>
        <Paper style={paperStyle}>
        <Grid align='center'>
            <Avatar style={avatarStyle}>
                <PersonAddOutlinedIcon/>
            </Avatar>
            <h2>Sign Up</h2>
            <Typography variant='caption'>Please fill this form to get registered!</Typography>
        </Grid>
        <form>
        <TextField style={fieldstyle} label="Username or ID" placeholder="Enter Username or ID" variant="filled" fullWidth required/>
        <TextField style={fieldstyle} label="Email" placeholder="Enter Email" variant="filled" fullWidth required/>
        <FormControl component="fieldset">
        <FormLabel component="legend">User</FormLabel>
        <RadioGroup aria-label="User" name="UserType" style={{display:'initial'}}>
         <FormControlLabel value="Instructor" control={<StyledRadio />} label="Instructor" />
         <FormControlLabel value="Student" control={<StyledRadio />} label="Student" />
        </RadioGroup>
        </FormControl>
        <TextField style={fieldstyle} label="Phone Number" placeholder="Enter Phone Number" variant="filled" fullWidth required/>
        <TextField style={fieldstyle} label="Password" type='password' placeholder="Enter Password" variant="filled" fullWidth required/>
        <TextField style={fieldstyle} label="Confirm Password" type='password' placeholder="Re-enter Password" variant="filled" fullWidth required/>
        <FormControlLabel
          control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="I accept the BSS terms and conditions"
      />
        <Button style={btnstyle} type='submit' color='primary' variant='contained'>Sign Up</Button>
        </form>
        </Paper>
    </Grid>
)

}
export default Registration;