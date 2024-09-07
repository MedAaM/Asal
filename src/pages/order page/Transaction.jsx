import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

function Transaction() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        quantity: '',
        firstName: '',
        lastName: '',
        country: '',
        language: [],
        date: null,
        phoneNumber: ''
    });

    const handleReset = () => {
        setFormData({
            username: '',
            email: '',
            password: '',
            quantity: '',
            firstName: '',
            lastName: '',
            country: '',
            language: [],
            date: null,
            phoneNumber: ''
        });
    };

    return (
        <Card>
            <CardHeader title='Multi Column with Form Separator' />
            <Divider />
            <CardContent>
            <Grid item xs={12}>
                            <Typography variant='body2' className='font-medium' color='text.primary'>
                                your current stock
                            </Typography>
            </Grid>
          
            <CardContent>
            <div className="actions df-c">
            <div className="df">
              <span>صمرة</span>
              <div className="progress-container">
                <div className="progress-bar" style={{width: `${30.23}%`}}>
                  <div className="progress-label">30.23%</div>
                </div>
              </div>
            </div>
            <div className="df">
              <span>سدر</span>
              <div className="progress-container cyan">
                <div className="progress-bar cyan" style={{width: `${58.23}%`}}>
                  <div className="progress-label">58.23%</div>
                </div>
              </div>
            </div>
            <div className="df">
              <span>عسل أبيض</span>
              <div className="progress-container pink">
                <div className="progress-bar pink" style={{width: `${60.73}%`}}>
                  <div className="progress-label">60.73%</div>
                </div>
              </div>
            </div>
          </div>

            </CardContent>
            
          </CardContent>
            <Divider />
            <form onSubmit={e => e.preventDefault()}>
                <CardContent>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <Typography variant='body2' className='font-medium' color='text.primary'>
                                1. Client Details
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label='First Name'
                                placeholder='John'
                                value={formData.firstName}
                                onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label='Last Name'
                                placeholder='Doe'
                                value={formData.lastName}
                                onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel>Country</InputLabel>
                                <Select
                                    label='Country'
                                    value={formData.country}
                                    onChange={e => setFormData({ ...formData, country: e.target.value })}
                                >
                                    <MenuItem value='UK'>UK</MenuItem>
                                    <MenuItem value='USA'>USA</MenuItem>
                                    <MenuItem value='Australia'>Australia</MenuItem>
                                    <MenuItem value='Germany'>Germany</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label='Phone Number'
                                type='number'
                                placeholder='123-456-7890'
                                value={formData.phoneNumber}
                                onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label='Quantity in kg'
                                type='number'
                                value={formData.quantity}
                                onChange={e => setFormData({ ...formData, quantity: e.target.value })}/>
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider />
                <CardActions sx={{ display: 'flex', gap: 2 }}>
                    <Button type="submit" variant="contained">
                        Submit
                    </Button>
                    <Button
                        type="reset"
                        variant="outlined"
                        onClick={handleReset}
                    >
                        Reset
                    </Button>
                </CardActions>
            </form>
        </Card>
    );
}

export default Transaction;
