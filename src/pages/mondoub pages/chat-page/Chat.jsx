import React from 'react';
import "./styles.css";
import { ImLoop2 } from 'react-icons/im';
import { CiSearch } from 'react-icons/ci';

function Chat() {
  return (
    <div className='chat-page'>
        <div className="df ">
          <div className="contacts">
            <div className="df w-full my-4 ai-stretch">
              <div className="w-12 df ai-c justify-center">
                <CiSearch className='text-3xl' />
              </div>
              <div className="df-c flex1 pr">
                <label htmlFor="" className="label-trans">بحث</label>
                <input type="text" name="" id="" />
              </div>
            </div>
            <hr className='mb-7' />
            <div className="contact">
              <div className="pic rogers"></div>
              <div className="badge">
                14
              </div>
              <div className="name">
                ستيف روجرز
              </div>
              <div className="message">
              هل لديك شيء لي
              </div>
            </div>
            <div className="contact">
              <div className="pic stark"></div>
              <div className="name">
                توني ستارك
              </div>
              <div className="message">
                آه، هو من الفضاء، جاء إلى هنا لسرقة قلادة من ساحر.
              </div>
            </div>
            <div className="contact">
              <div className="pic banner"></div>
              <div className="badge">
                1
              </div>
              <div className="name">
                بروس بانر
              </div>
              <div className="message">
                هل هناك رجل نملة *ورجل عنكبوت*؟
              </div>
            </div>
            <div className="contact">
              <div className="pic thor"></div>
              <div className="name">
                ثور أودينسون
              </div>
              <div className="badge">
                3
              </div>
              <div className="message">
                أحب هذا
              </div>
            </div>
            <div className="contact">
              <div className="pic danvers"></div>
              <div className="badge">
                2
              </div>
              <div className="name">
                كارول دانفرز
              </div>
              <div className="message">
                مرحبًا بيتر باركر، هل لديك شيء لي؟
              </div>
            </div>
          </div>
          <div className="chat">
            <div className="contact bar">
              <div className="pic stark"></div>
              <div className="name">
                توني ستارك
              </div>
              <div className="seen">
                اليوم الساعة 12:56
              </div>
            </div>
            <div className="messages" id="chat">
              <div className="time">
                اليوم الساعة 11:41
              </div>
              <div className="message parker">
                مرحبًا، يا رجل! كيف حالك، مستر ستارك؟ 👋
              </div>
              <div className="message stark">
                يا فتى، من أين جئت؟
              </div>
              <div className="message parker">
                رحلة ميدانية! 🤣
              </div>
              <div className="message parker">
                آه، ما هي مشكلة هذا الرجل، مستر ستارك؟ 🤔
              </div>
              <div className="message stark">
                آه، هو من الفضاء، جاء هنا لسرقة قلادة من ساحر.
              </div>
              <div className="message stark">
                <div className="typing typing-1"></div>
                <div className="typing typing-2"></div>
                <div className="typing typing-3"></div>
              </div>
            </div>
            <div className="input">
              <i className="fas fa-camera"></i>
              <i className="far fa-laugh-beam"></i>
              <input placeholder="اكتب رسالتك هنا!" type="text" />
              <i className="fas fa-microphone"></i>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Chat;
