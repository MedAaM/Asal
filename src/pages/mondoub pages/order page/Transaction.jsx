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
import { motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";

const PRICE_PER_KG = 15; // سعر الكيلو
function Transaction() {
  const targets = [
    { name: "سمر", total: 120, delivered: 85 },
    { name: "طلح", total: 100, delivered: 65 },
    { name: "عسل أبيض", total: 120, delivered: 100 },
  ];
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
      <div className="title">قم بعملية مباشرة</div>
        <div className="df-c w-full pr">
          <label htmlFor="" className="label-trans">اسم العميل</label>
          <input type="text" name="" className="w-full" id="" />
        </div>
        <div className="df-c w-full pr">
          <label htmlFor="" className="label-trans">بريد العميل الإلكتروني</label>
          <input type="text" name="" className="w-full" id="" />
        </div>
        <div className="df-c w-full pr">
          <label htmlFor="" className="label-trans">رقم هاتف العميل</label>
          <input type="text" name="" className="w-full" id="" />
        </div>
        <div className="df w-100">
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
            <div className="df-c pr flex1">
          <label htmlFor="" className="label-trans">الكمية للبيع</label>
          <input type="text" name="" className="w-full" id="" />
        </div>
            <div className="df-c pr flex1">
          <label htmlFor="" className="label-trans">المجموع للدفع</label>
          <input type="text" name="" className="w-full" id="" />
        </div>
        
          </div>
          <div className="df header-btns mr-auto mt-auto">
                <motion.div
                    className="details-btn df"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    إعادة تعيين
                </motion.div>
                <motion.div
                    className="details-btn df"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    تأكيد
                </motion.div>
            </div> 
        
        
      </div>
      <div className="section-card qte-left !px-12 jc-sb w-50">
        <div className="df-c">
          <div className="bold-1 text-indigo-700">مخزونك الحالي</div>
          <div className="df-c">
          <div className="df-c jc-sa pr">
        {targets.map((target, index) => {
          const percentage = (target.delivered / target.total) * 100;
          const remaining = target.total - target.delivered;
          return (
            <div key={index} className="CompactCard !text-xs">
              <div className={`radialBar ${(percentage === 100) ? "reached" : ""}`}>
                <CircularProgressbar value={percentage} text={`${Math.round(percentage)}%`} />
                <span>{remaining} كغ متبقية</span>
              </div>
              <div className="detail">
                <div className="df">
                  <GiHoneyJar />
                  {target.name}
                </div>
                <span>{target.total} كغ</span>
                <span>{target.delivered}/{target.total} تم التوصيل</span>
              </div>
            </div>
          );
        })}
      </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
