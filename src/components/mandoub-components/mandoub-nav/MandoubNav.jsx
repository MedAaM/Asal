import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import "./style.css";
import { IoIosArrowBack, IoIosNotificationsOutline } from "react-icons/io";
import { RiFullscreenExitLine, RiFullscreenLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { translatePath } from "../../../utils/arabic-settings";
import useModal from "../../../hooks/useModal";
import ModalContainer from "../../Modal/ModalContainer";
import NotificationsModal from "../../Modal/NotificationsModal";

function MandoubNav() {
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  const handleFullscreen = () => {
    const elem = document.documentElement;

    if (!isFullscreen) {
      
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen(); 
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(); 
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen(); 
      }
      setIsFullscreen(true);
    } else {
      
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen(); 
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen(); 
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen(); 
      }
      setIsFullscreen(false);
    }
  };

  
  const currentPath = location.pathname
    .split("/")
    .filter((segment) => segment !== "") 
    .filter((item) => isNaN(item)); 

  
  const handleClick = (index) => {
    
    const pathTo = "/" + currentPath.slice(0, index + 1).join("/");
    navigate(pathTo); 
  };
  const { modalOpen, close, open } = useModal();

  return (
    <div className="mandoub-nav df jc-sb">
        <ModalContainer>
                {modalOpen && (
                    <NotificationsModal
                        modalOpen={modalOpen}
                        handleClose={close}
                    />
                )}
        </ModalContainer>
      <div className="df !gap-6">
        <div id="nav-footer-heading">
          <div id="nav-footer-avatar">
            <img
              src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547"
              alt="avatar"
            />
          </div>
          <div id="nav-footer-titlebox">
            <div id="nav-footer-title">أزلوك أحمد</div>
            <span id="nav-footer-subtitle">مجموعة VIP</span>
          </div>
          <label htmlFor="nav-footer-toggle">
            <i className="fas fa-caret-up"></i>
          </label>
        </div>
        <div className="nav-icon" onClick={open}>
          <IoIosNotificationsOutline />
          <div className="indicator" >
            <span>3</span>
          </div>
        </div>
        <div className="nav-icon" onClick={handleFullscreen} >
        {isFullscreen ? <RiFullscreenExitLine /> : <RiFullscreenLine />}
        </div>
      </div>

      {}
      <div className="path df !gap-1">
        <IoIosArrowBack className="separator" />
        {currentPath.length > 0 ? (
          currentPath.map((segment, index) => (
            <React.Fragment key={index}>
              <span
                className={`breadcrumb-segment ${
                  index === currentPath.length - 1 ? "active-path" : ""
                }`} 
                onClick={() => handleClick(index)}
              >
                {translatePath(segment)}
              </span>
              {index < currentPath.length - 1 && (
                <IoIosArrowBack className="separator" />
              )}
            </React.Fragment>
          ))
        ) : (
          <span className="breadcrumb-segment" onClick={() => navigate("/")}>
            الرئيسية
          </span>
        )}
      </div>

      <div className="df">
        <div className="nav-icon">
          <CiLogout />
        </div>
      </div>
    </div>
  );
}

export default MandoubNav;
