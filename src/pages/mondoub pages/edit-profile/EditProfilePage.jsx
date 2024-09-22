import React, { useState } from "react";
import "./edit.css";
import { BsPencil } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";
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
import ChangePassword from "./ChangePassword";

function EditProfilePage() {
  const [selectedSocialMedia, setSelectedSocialMedia] = useState("");
  const [mediaLink, setMediaLink] = useState("");
  const [mediaArray, setMediaArray] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddMedia = () => {
    if (selectedSocialMedia && mediaLink) {
      const newMedia = {
        platform: selectedSocialMedia,
        link: mediaLink,
      };

      const existingIndex = mediaArray.findIndex(
        (media) => media.platform === selectedSocialMedia
      );

      if (existingIndex !== -1) {
        const updatedArray = [...mediaArray];
        updatedArray[existingIndex] = newMedia;
        setMediaArray(updatedArray);
      } else {
        setMediaArray([...mediaArray, newMedia]);
      }

      setMediaLink("");
      setSelectedSocialMedia("");
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setSelectedSocialMedia(mediaArray[index].platform);
    setMediaLink(mediaArray[index].link);
  };

  const handleDelete = (index) => {
    const updatedArray = mediaArray.filter((_, i) => i !== index);
    setMediaArray(updatedArray);
    if (editIndex === index) {
      setEditIndex(null);
      setSelectedSocialMedia("");
      setMediaLink("");
    }
  };

  const [droppedFiles, setDroppedFiles] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length) {
      setDroppedFiles(files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Prevent default to allow drop
  };

  const handleFileChange = (e) => {
    setDroppedFiles(e.target.files[0]);
  };

  return (
    <div className="df-c">
      <div className="section-card edit df-c">
        <h3>تعديل معلوماتك</h3>
        <div className="df comment-user-img ai-stretch">
          <img
            className="!w-40"
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            alt="user"
          />
          <div className="df-c jc-sb flex-1">
            <label
              htmlFor="images"
              className="drop-container"
              id="dropcontainer"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <span className="drop-title">اسحب الملفات هنا</span>
              أو
              <div className="df file-uploader">
                <input
                  type="file"
                  id="images"
                  accept="image/*"
                  className="dnone"
                  onChange={handleFileChange}
                  required
                />
                <div className="imgupload">اختر صورة</div>
                {droppedFiles && (
                  <div className="uploaded-file">
                    <p>{droppedFiles.name}</p>
                  </div>
                )}
                {!droppedFiles && (
                  <div className="uploaded-file">
                    <p>لم يتم اختيار ملفات</p>
                  </div>
                )}
              </div>
            </label>
          </div>
        </div>
        <div className="df comment-user-img ai-stretch">
          <img
            className="!w-1/2 cover-edit"
            src="/img/banner.avif"
            alt="user"
          />
          <div className="df-c jc-sb flex-1">
            <label
              htmlFor="images"
              className="drop-container"
              id="dropcontainer"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <span className="drop-title">اسحب الملفات هنا</span>
              أو
              <div className="df file-uploader">
                <input
                  type="file"
                  id="images"
                  accept="image/*"
                  className="dnone"
                  onChange={handleFileChange}
                  required
                />
                <div className="imgupload">اختر صورة</div>
                {droppedFiles && (
                  <div className="uploaded-file">
                    <p>{droppedFiles.name}</p>
                  </div>
                )}
                {!droppedFiles && (
                  <div className="uploaded-file">
                    <p>لم يتم اختيار ملفات</p>
                  </div>
                )}
              </div>
            </label>
          </div>
        </div>

        <div className="df ai-fs">
          <div className="w-50">
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="الاسم"
                  placeholder="جون دو"
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
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BiPhone className="text-xl" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12}></Grid>
            </Grid>
          </div>
          <div className="df-c">
            <div className="df-c">
              <div className="df w-100 pl-10">
                <Grid item xs={6} className="w-50">
                  <FormControl fullWidth>
                    <InputLabel>البلد</InputLabel>
                    <Select label="البلد">
                      <MenuItem value="UK">المملكة المتحدة</MenuItem>
                      <MenuItem value="USA">الولايات المتحدة</MenuItem>
                      <MenuItem value="Australia">أستراليا</MenuItem>
                      <MenuItem value="Germany">ألمانيا</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="رقم الهاتف"
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
              <div className="df media">
                <label
                  className={`radio-label ${
                    selectedSocialMedia === "facebook" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="socialMedia"
                    value="facebook"
                    onChange={(e) => setSelectedSocialMedia(e.target.value)}
                  />
                  فيسبوك
                </label>

                <label
                  className={`radio-label ${
                    selectedSocialMedia === "twitter" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="socialMedia"
                    value="twitter"
                    onChange={(e) => setSelectedSocialMedia(e.target.value)}
                  />
                  تويتر
                </label>

                <label
                  className={`radio-label ${
                    selectedSocialMedia === "instagram" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="socialMedia"
                    value="instagram"
                    onChange={(e) => setSelectedSocialMedia(e.target.value)}
                  />
                  إنستغرام
                </label>

                <label
                  className={`radio-label ${
                    selectedSocialMedia === "linkedin" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="socialMedia"
                    value="linkedin"
                    onChange={(e) => setSelectedSocialMedia(e.target.value)}
                  />
                  لينكدإن
                </label>
              </div>
              <div className="df">
                <TextField
                  value={mediaLink}
                  onChange={(e) => setMediaLink(e.target.value)}
                  fullWidth
                  label="الرابط"
                  placeholder="رابطك هنا"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BiUser className="text-xl" />
                      </InputAdornment>
                    ),
                  }}
                />
                <div className="btn1" onClick={handleAddMedia}>
                  {editIndex !== null ? "تحديث" : "إضافة"}
                </div>
              </div>
            </div>

            {}
            <div className="df-c">
              {mediaArray.length > 0 && (
                <div className="df-c">
                  {mediaArray.map((media, index) => (
                    <div className="df" key={index}>
                      <strong>{media.platform}: </strong>
                      <a
                        href={media.link}
                        className="media-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {media.link}
                      </a>
                      <div className="df">
                        <BsPencil onClick={() => handleEdit(index)} />
                        <BiTrash onClick={() => handleDelete(index)} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="btn w-fc">حفظ المعلومات</div>
      </div>
      <div className="section-card ">
        <ChangePassword />
      </div>
    </div>
  );
}

export default EditProfilePage;
