import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { TiTick } from "react-icons/ti";
import { textVariant2 } from "../../../utils/motion";
import { BiLinkExternal, BiTrash } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";

function Contact() {
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
    <div className="df-c !gap-10">
      <div className="df media mx-auto">
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
          <CiFacebook />
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
          <CiTwitter />
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
          <CiInstagram />
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
          <CiLinkedin />
          لينكدإن
        </label>
      </div>
      <div className="df mx-auto w-4/6">
        <div className="df-c flex1 pr g0">
          <label className="label-trans" htmlFor="">
            media link
          </label>
          <input
            type="text"
            value={mediaLink}
            className=""
            onChange={(e) => setMediaLink(e.target.value)}
          />
        </div>
        <div className="tick" onClick={handleAddMedia}>
          <TiTick />
        </div>
      </div>

      {}
      <div className="df-c w-4/6 mx-auto">
        <AnimatePresence>
          {mediaArray.length > 0 && (
            <div className="df-c">
              <AnimatePresence>
                {mediaArray.map((media, index) => (
                  <motion.div
                    variants={textVariant2}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="df jc-sb"
                    key={index}
                  >
                    <div className="df social-link">
                      <div>{getSocialMediaIcon(media.platform)} </div>
                      <a
                        href={media.link}
                        className="media-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {media.link}
                      </a>
                    </div>

                    <div className="df">
                      <BiLinkExternal />
                      <BsPencil onClick={() => handleEdit(index)} />
                      <BiTrash onClick={() => handleDelete(index)} />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </AnimatePresence>
      </div>
      <div className="df header-btns mr-auto">
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
  );
}

export default Contact;

function getSocialMediaIcon(name) {
  const socialMediaIcons = {
    facebook: <CiFacebook />,
    twitter: <CiTwitter />,
    instagram: <CiInstagram />,
    linkedin: <CiLinkedin />,
  };
  const lowerName = name.toLowerCase();
  return socialMediaIcons[lowerName] || <CgWebsite />;
}
