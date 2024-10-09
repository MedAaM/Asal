import { motion } from 'framer-motion';
import { useState } from 'react';
import { CgAttachment } from "react-icons/cg";

function EditInfo() {
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
        <>
            <div className="df-c">
                <div className="df">
                    <div className="df-c !gap-2 w-45">
                        <div className="df-c pr">
                            <label className="label-trans" htmlFor="">الاسم</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="df-c !gap-2 w-45">
                        <div className="df-c pr">
                            <label className="label-trans" htmlFor="">الكنية</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                </div>
                <div className="df">
                    <div className="df-c !gap-2 w-45">
                        <div className="df-c pr">
                            <label className="label-trans" htmlFor="">البريد الإلكتروني</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="df-c !gap-2 w-45">
                        <div className="df-c pr">
                            <label className="label-trans" htmlFor="">رقم الهاتف</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                </div>
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
                            <span className="rounded-icon"><CgAttachment /></span>
                            <div className="text-center"><span>انقر لتحميل</span> أو اسحب وأفلت <br />
                                SVG، JPEG، PNG أو GIF
                            </div>
                            <div className="df file-uploader">
                                <input
                                    type="file"
                                    id="images"
                                    accept="image/*"
                                    className="dnone"
                                    onChange={handleFileChange}
                                    required
                                />
                                {droppedFiles && (
                                    <div className="">
                                        <p>{droppedFiles.name}</p>
                                    </div>
                                )}
                            </div>
                        </label>
                    </div>
                </div>
                <div className="df comment-user-img ai-stretch">
                    <img
                        className="!w-40 cover-edit"
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
                            <span className="rounded-icon"><CgAttachment /></span>
                            <div className="text-center"><span>انقر لتحميل</span> أو اسحب وأفلت <br />
                                SVG، JPEG، PNG أو GIF
                            </div>
                            <div className="df file-uploader">
                                <input
                                    type="file"
                                    id="images"
                                    accept="image/*"
                                    className="dnone"
                                    onChange={handleFileChange}
                                    required
                                />
                                {droppedFiles && (
                                    <div className="">
                                        <p>{droppedFiles.name}</p>
                                    </div>
                                )}
                            </div>
                        </label>
                    </div>
                </div>
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
        </>
    );
}

export default EditInfo;
