import React from 'react'
import "./styles.css"
import { ImLoop2 } from 'react-icons/im'
import { CiSearch } from 'react-icons/ci'

function Chat() {
  return (
    <div className='chat-page'>
        <div class="df ">
  <div class="contacts">
    <div className="df w-full my-4 ai-stretch">
    <div className="w-12 df ai-c justify-center">
            <CiSearch className='text-3xl' />
        </div>
        <div className="df-c flex1 pr">
            <label htmlFor="" className="label-trans">search</label>
            <input type="text" name="" id="" />
        </div>
        
    </div>
    <hr className='mb-7'/>
    <div class="contact">
      <div class="pic rogers"></div>
      <div class="badge">
        14
      </div>
      <div class="name">
        Steve Rogers
      </div>
      <div class="message">
        That is America's ass 🇺🇸🍑
      </div>
    </div>
    <div class="contact">
      <div class="pic stark"></div>
      <div class="name">
        Tony Stark
      </div>
      <div class="message">
        Uh, he's from space, he came here to steal a necklace from a wizard.
      </div>
    </div>
    <div class="contact">
      <div class="pic banner"></div>
      <div class="badge">
        1
      </div>
      <div class="name">
        Bruce Banner
      </div>
      <div class="message">
        There's an Ant-Man *and* a Spider-Man?
      </div>
    </div>
    <div class="contact">
      <div class="pic thor"></div>
      <div class="name">
        Thor Odinson
      </div>
      <div class="badge">
        3
      </div>
      <div class="message">
        I like this one
      </div>
    </div>
    <div class="contact">
      <div class="pic danvers"></div>
      <div class="badge">
        2
      </div>
      <div class="name">
        Carol Danvers
      </div>
      <div class="message">
        Hey Peter Parker, you got something for me?
      </div>
    </div>
  </div>
  <div class="chat">
    <div class="contact bar">
      <div class="pic stark"></div>
      <div class="name">
        Tony Stark
      </div>
      <div class="seen">
        Today at 12:56
      </div>
    </div>
    <div class="messages" id="chat">
      <div class="time">
        Today at 11:41
      </div>
      <div class="message parker">
        Hey, man! What's up, Mr Stark? 👋
      </div>
      <div class="message stark">
        Kid, where'd you come from? 
      </div>
      <div class="message parker">
        Field trip! 🤣
      </div>
      <div class="message parker">
        Uh, what is this guy's problem, Mr. Stark? 🤔
      </div>
      <div class="message stark">
        Uh, he's from space, he came here to steal a necklace from a wizard.
      </div>
      <div class="message stark">
        <div class="typing typing-1"></div>
        <div class="typing typing-2"></div>
        <div class="typing typing-3"></div>
      </div>
    </div>
    <div class="input">
      <i class="fas fa-camera"></i><i class="far fa-laugh-beam"></i><input placeholder="Type your message here!" type="text" /><i class="fas fa-microphone"></i>
    </div>
  </div>
</div>
    </div>
  )
}

export default Chat