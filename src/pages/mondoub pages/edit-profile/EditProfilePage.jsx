import React, { useState } from "react";
import "./edit.css";
import { BsPencil } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";

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

  return (
    <div className="df-c">
    <div className="section edit df-c">
      <h3>تعديل معلوماتك</h3>
      <div className="df">
        <div className="edit--img--profile">
          <img src="/img/about.png" alt="" srcSet="" />
          <div className="edit--svg">
            <BsPencil />
          </div>
        </div>
        <div className="df-c g0">
          <h4>مراد بن علي</h4>
          <span>مجموعة VIP</span>
        </div>
      </div>
      <div className="df ai-fs">
        <div className="df-c">
          <div className="df">
            <div className="df-c g0">
              <label htmlFor="name">الاسم</label>
              <input type="text" name="" id="name" />
            </div>
            <div className="df-c g0">
              <label htmlFor="fname">اللقب</label>
              <input type="text" name="" id="fname" />
            </div>
          </div>

          <div className="df-c g0">
            <label htmlFor="fname">السيرة الذاتية</label>
            <textarea name="" id=""></textarea>
          </div>
        </div>
        
      </div>
      <div className="df-c">
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
          <label htmlFor="">Link</label>
          <input
            value={mediaLink}
            onChange={(e) => setMediaLink(e.target.value)}
            type="text"
            name=""
            id=""
          />
          <div className="btn1" onClick={handleAddMedia}>
            {editIndex !== null ? "Update" : "Add"}
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

      <div className="btn w-fc">Save Info</div>
    </div>
        <div className="section df-c ai-c">
          <h3>security</h3>
          <div className="df-c password">
            <div className="df-c">
              <label htmlFor="">password</label>
              <input type="text" name="" id="" />
            </div>
            <div className="df-c">
              <label htmlFor="">new password</label>
              <input type="text" name="" id="" />
            </div>
            <div className="btn">change password</div>

          </div>
        </div>
    </div>
  );
}

export default EditProfilePage;
