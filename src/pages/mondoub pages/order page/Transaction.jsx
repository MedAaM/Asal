import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import CardHeader from "@mui/material/CardHeader";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { BiDollar, BiMailSend, BiPhone, BiUser } from "react-icons/bi";
import { GiHoneyJar, GiWeight } from "react-icons/gi";

const PRICE_PER_KG = 15; // سعر الكيلو

function Transaction() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    quantity: 0,
    country: "",
  });

  const [totalToPay, setTotalToPay] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    const total = formData.quantity * PRICE_PER_KG;
    setTotalToPay(total);
  }, [formData.quantity]);

  const handleReset = () => {
    setFormData({
      username: "",
      email: "",
      phoneNumber: "",
      quantity: 0,
      country: "",
    });
    setTotalToPay(0);
  };

  return (
    <div className="df ai-stretch">
      <div className="section-card w-50">
        <CardHeader title="إجراء معاملة خارجية" />
        <Grid container spacing={5}>
          <div className="bold-1">تفاصيل العميل</div>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="الاسم"
              placeholder="جون دو"
              name="username"
              value={formData.username}
              onChange={handleChange}
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
              label="البريد الإلكتروني"
              placeholder="johndoe@gmail.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              label="رقم الهاتف"
              placeholder="123-456-7890"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
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
                <InputLabel className="labeled">العسل</InputLabel>
                <Select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <MenuItem value="UK"><GiHoneyJar /> سدرة</MenuItem>
                  <MenuItem value="USA"><GiHoneyJar /> عسل أبيض</MenuItem>
                  <MenuItem value="Australia"><GiHoneyJar /> سمرة</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="الوزن بالكيلو"
                placeholder="123kg"
                type="number"
                name="quantity"
                className="total-to-pay-input"
                value={formData.quantity}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <GiWeight className="text-xl" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </div>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="المبلغ الإجمالي للدفع"
              value={`$${totalToPay}`}
              disabled
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BiDollar className="text-xl" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" style={{ marginLeft: '10px' }}>
              تقديم
            </Button>
          </Grid>
        </Grid>
      </div>
      <div className="section-card !px-12 jc-sb current-stock w-50">
        <div className="df-c">
          <div className="bold-1 text-indigo-700">مخزونك الحالي</div>
          <div className="df-c">
            <div className="actions !w-full pt-10 df-c">
              {/* مثال على عناصر المخزون; استبدل بالبيانات الديناميكية إذا لزم الأمر */}
              <div className="df">
                <div className="df text-xs w-2/6">
                  <GiHoneyJar />
                  <span>صمرة (54kg متبقية من 100 kg)</span>
                </div>
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: `${30.23}%` }}>
                    <div className="progress-label">30.23%</div>
                  </div>
                </div>
              </div>
              <div className="df">
                <div className="df text-xs w-2/6">
                  <GiHoneyJar />
                  <span>صمرة (54kg متبقية من 100 kg)</span>
                </div>
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
                <div className="df text-xs w-2/6">
                  <GiHoneyJar />
                  <span>صمرة (54kg متبقية من 100 kg)</span>
                </div>
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
        <div className="avatar">
          <img
            className="w-2/5 mr-auto"
            src="https://cdn3d.iconscout.com/3d/premium/thumb/purple-shirt-woman-3d-icon-download-in-png-blend-fbx-gltf-file-formats--wanita-rambut-urai-avatar-person-people-happiness-pack-icons-4935222.png?f=webp"
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Transaction;
