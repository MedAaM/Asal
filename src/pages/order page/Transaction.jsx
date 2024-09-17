import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { BiMailSend, BiPhone, BiUser, BiUserMinus } from "react-icons/bi";

function Transaction() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    quantity: "",
    firstName: "",
    lastName: "",
    country: "",
    language: [],
    date: null,
    phoneNumber: "",
  });

  const handleReset = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      quantity: "",
      firstName: "",
      lastName: "",
      country: "",
      language: [],
      date: null,
      phoneNumber: "",
    });
  };

  return (
    <div className="df ai-stretch">
      
    
    <div className="section-card w-50">
      <CardHeader title="Basic with Icons" />
      <Grid container spacing={5}>
        <div className="bold-1">client details</div>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            placeholder="John Doe"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BiUser className="text-xl" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="email"
            label="Email"
            placeholder="johndoe@gmail.com"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BiMailSend className="text-xl" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone No."
            placeholder="123-456-7890"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BiPhone className="text-xl" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <div className="df w-100 pt-10 pl-10">
          <Grid item xs={6} className="w-50">
            <FormControl fullWidth>
              <InputLabel>Country</InputLabel>
              <Select
                label="Country"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              >
                <MenuItem value="UK">UK</MenuItem>
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="Australia">Australia</MenuItem>
                <MenuItem value="Germany">Germany</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Phone No."
              placeholder="123-456-7890"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BiPhone className="text-xl" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </div>

        <Grid item xs={12}>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
    <div className="section-card w-50">
      <div className="df-c">
        <div className="bold-1">your current stock</div>
      <div className="df-c ">
            <div className="actions pt-10 df-c">
            <div className="df">
              <span>صمرة</span>
              <div className="progress-container">
                <div className="progress-bar" style={{ width: `${30.23}%` }}>
                  <div className="progress-label">30.23%</div>
                </div>
              </div>
            </div>
            <div className="df">
              <span>سدر</span>
              <div className="progress-container cyan">
                <div
                  className="progress-bar cyan"
                  style={{ width: `${58.23}%` }}
                >
                  <div className="progress-label">58.23%</div>
                </div>
              </div>
            </div>
            <div className="df">
              <span>عسل أبيض</span>
              <div className="progress-container pink">
                <div
                  className="progress-bar pink"
                  style={{ width: `${60.73}%` }}
                >
                  <div className="progress-label">60.73%</div>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
      
      </div>
    </div>
  );
}

export default Transaction;
