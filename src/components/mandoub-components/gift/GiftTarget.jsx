import React from "react";
import "./GiftTarget.css";
import ImgShapeContainer from "../../img shape/ImgShapeContainer";
import { TbCrown } from "react-icons/tb";
import { BsClock, BsTruck } from "react-icons/bs";
import { GiRank1 } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
function GiftTarget({isHidden}) {
  return (
    <div className={`df-c main--container section-card ${isHidden ? "bluried" : ""}`}>
      {
       isHidden === true && (
        <section class="coming-soon">
          <div class="coming-soon-inner">
            <h1 class="heading">مسابقة جديدة </h1>
            <h2 class="small-heading">استعدوا للمسابقة القادمة</h2>
            <div class="counter-timer">
              <ul>
                <li><span id="days">10</span>أيام</li>
                <li><span id="hours">05</span>ساعات</li>
                <li><span id="minutes">10</span>دقائق</li>
              </ul>
            </div>
          </div>
        </section>
      )
      
      }
      <div className={`df ${isHidden ? "blur" : ""}`}>
      <div className="df-c gift--container">
          <div className="gift--target df">
            <div className="uss w-20 h-20">
              <div className="magicpattern"></div>
              <img src="/img/about.png" className="object-cover" alt="" srcSet="" />
            </div>
            <div className="target">
              <div className="top">
                <img
                  src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="second">
                <img
                  src="https://www.indiafilings.com/learn/wp-content/uploads/2023/03/Can-a-single-person-own-a-firm-in-India.jpg"
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="line"></div>
            </div>
            <div className="uss w-20 h-20">
              <div className="magicpattern"></div>
              <img src="/img/iphone.png" className="object-cover" alt="" srcSet="" />
            </div>
          </div>
          <div className="df">
            <div className="uss gift-img-img ">
              <div className="magicpattern"></div>
              <img src="/img/iphone.png" className="object-cover" alt="" srcSet="" />
            </div>
            <ul>
              <li className="title">آيفون 12</li>
              <li>
                أحدث موديل بميزات متقدمة، <span className="pink-font">شاشة Super Retina XDR، كاميرا مزدوجة
                عالية الجودة</span>، ومعالج A14 Bionic
              </li>
            </ul>
          </div>
          <div className="df-c !g2">
            <div className="df w-full">
              <div className="df !gap-2 w-1/2">
                <div className="rounded-icon  !rounded-md">
                  <BsTruck />
                </div>
                <div className="df-c g0">
                  <div className='text-black font-bold'>1250</div>
                  <div className='text'>الكمية المباعة</div>
                </div>
              </div>
              <div className="df">
                <div className="rounded-icon yellowed  !rounded-md">
                  <GoGoal />
                </div>
                <div className="df-c g0">
                  <div className='text-black font-bold'>2500</div>
                  <div className='text'>الكمية المطلوبة</div>
                </div>
              </div>
            </div>
            <div className="df w-full">
              <div className="df !gap-2 w-1/2">
                <div className="rounded-icon pinked  !rounded-md">
                  <BsClock />
                </div>
                <div className="df-c g0">
                  <div className='text-black font-bold'>12, يناير 2025</div>
                  <div className='text'>الموعد النهائي</div>
                </div>
              </div>
              <div className="df">
                <div className="rounded-icon errored !rounded-md">
                  <GiRank1 />
                </div>
                <div className="df-c g0">
                  <div className='text-black font-bold'>50</div>
                  <div className='text'>ترتيبك</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="df-c leaderboard">
  <div className="df jc-sb">
    <div className="leader-box leader trans">
      <div className="img">
        <img
          src="https://www.indiafilings.com/learn/wp-content/uploads/2023/03/Can-a-single-person-own-a-firm-in-India.jpg"
          alt=""
          srcSet=""
        />
        <div className="rank">2</div>
      </div>
      <div className="df-c ai-c">
        <span>محمد الصبحي</span>
        <div className="score">2450 كغ</div>
        <div className="df-c w-full !gap-1">
          <div className="df w-full jc-sb">
            <span>55%</span>
            <span>النقاط</span>
          </div>
          <div className="range w-full">
            <div className="bar-cont">
              <div className="barprog"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="leader-box top1 leader">
      <div className="img">
        <img
          src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
          alt=""
          srcSet=""
        />
        <div className="rank">1</div>
        <TbCrown className="crown" />
      </div>
      <div className="df-c ai-c">
        <span>خالد الشمري</span>
        <div className="score">3000 كغ</div>
        <div className="df-c w-full !gap-1">
          <div className="df w-full jc-sb">
            <span>80%</span>
            <span>النقاط</span>
          </div>
          <div className="range w-full">
            <div className="bar-cont">
              <div className="barprog"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="leader-box leader trans">
      <div className="img">
        <img
          src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
          alt=""
          srcSet=""
        />
        <div className="rank">3</div>
      </div>
      <div className="df-c ai-c">
        <span>ليلى الحربي</span>
        <div className="score">2000 كغ</div>
        <div className="df-c w-full !gap-1">
          <div className="df w-full jc-sb">
            <span>65%</span>
            <span>النقاط</span>
          </div>
          <div className="range w-full">
            <div className="bar-cont">
              <div className="barprog"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="table-leader-container mt-3">
    <table className="content-table">
      <thead>
        <tr>
          <th>الاسم</th>
          <th>الترتيب</th>
          <th>الأوزان</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className={`df relative w-fit`}>
              <div className="rank">1</div>
              <div className="order-cus-img">
                <img src='/img/about.png' alt="customer" />
              </div>
              <div className="df-c g0">
                <div className='bold-1 h-4 leading-none text-right'>خالد الشمري</div>
                <div className='text leading-none h-4 text-xs'>khaled@gmail.com</div>
              </div>
            </div>
          </td>
          <td><span className="bold-1 text-indigo-600">3000 كغ</span></td>
          <td>
            <div className="df-c w-full !gap-1">
              <div className="df w-full jc-sb">
                <span>80%</span>
                <span>النقاط</span>
              </div>
              <div className="range w-full">
                <div className="bar-cont">
                  <div className="barprog"></div>
                </div>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div className={`df relative w-fit`}>
              <div className="rank">2</div>
              <div className="order-cus-img">
                <img src='/img/about.png' alt="customer" />
              </div>
              <div className="df-c g0">
                <div className='bold-1 h-4 leading-none text-right'>محمد الصبحي</div>
                <div className='text leading-none h-4 text-xs'>mohamed@gmail.com</div>
              </div>
            </div>
          </td>
          <td><span className="bold-1 text-indigo-600">2450 كغ</span></td>
          <td>
            <div className="df-c w-full !gap-1">
              <div className="df w-full jc-sb">
                <span>55%</span>
                <span>النقاط</span>
              </div>
              <div className="range w-full">
                <div className="bar-cont">
                  <div className="barprog"></div>
                </div>
              </div>
            </div>
          </td>
        </tr>

        <tr className="active-row">
          <td>
            <div className={`df relative w-fit`}>
              <div className="rank">3</div>
              <div className="order-cus-img">
                <img src='/img/about.png' alt="customer" />
              </div>
              <div className="df-c g0">
                <div className='bold-1 h-4 leading-none text-right'>ليلى الحربي</div>
                <div className='text leading-none h-4 text-xs'>layla@gmail.com</div>
              </div>
            </div>
          </td>
          <td><span className="bold-1 text-indigo-600">2000 كغ</span></td>
          <td>
            <div className="df-c w-full !gap-1">
              <div className="df w-full jc-sb">
                <span>65%</span>
                <span>النقاط</span>
              </div>
              <div className="range w-full">
                <div className="bar-cont">
                  <div className="barprog"></div>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className={`df relative w-fit`}>
              <div className="rank">2</div>
              <div className="order-cus-img">
                <img src='/img/about.png' alt="customer" />
              </div>
              <div className="df-c g0">
                <div className='bold-1 h-4 leading-none text-right'>محمد الصبحي</div>
                <div className='text leading-none h-4 text-xs'>mohamed@gmail.com</div>
              </div>
            </div>
          </td>
          <td><span className="bold-1 text-indigo-600">2450 كغ</span></td>
          <td>
            <div className="df-c w-full !gap-1">
              <div className="df w-full jc-sb">
                <span>55%</span>
                <span>النقاط</span>
              </div>
              <div className="range w-full">
                <div className="bar-cont">
                  <div className="barprog"></div>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className={`df relative w-fit`}>
              <div className="rank">2</div>
              <div className="order-cus-img">
                <img src='/img/about.png' alt="customer" />
              </div>
              <div className="df-c g0">
                <div className='bold-1 h-4 leading-none text-right'>محمد الصبحي</div>
                <div className='text leading-none h-4 text-xs'>mohamed@gmail.com</div>
              </div>
            </div>
          </td>
          <td><span className="bold-1 text-indigo-600">2450 كغ</span></td>
          <td>
            <div className="df-c w-full !gap-1">
              <div className="df w-full jc-sb">
                <span>55%</span>
                <span>النقاط</span>
              </div>
              <div className="range w-full">
                <div className="bar-cont">
                  <div className="barprog"></div>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className={`df relative w-fit`}>
              <div className="rank">2</div>
              <div className="order-cus-img">
                <img src='/img/about.png' alt="customer" />
              </div>
              <div className="df-c g0">
                <div className='bold-1 h-4 leading-none text-right'>محمد الصبحي</div>
                <div className='text leading-none h-4 text-xs'>mohamed@gmail.com</div>
              </div>
            </div>
          </td>
          <td><span className="bold-1 text-indigo-600">2450 كغ</span></td>
          <td>
            <div className="df-c w-full !gap-1">
              <div className="df w-full jc-sb">
                <span>55%</span>
                <span>النقاط</span>
              </div>
              <div className="range w-full">
                <div className="bar-cont">
                  <div className="barprog"></div>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className={`df relative w-fit`}>
              <div className="rank">2</div>
              <div className="order-cus-img">
                <img src='/img/about.png' alt="customer" />
              </div>
              <div className="df-c g0">
                <div className='bold-1 h-4 leading-none text-right'>محمد الصبحي</div>
                <div className='text leading-none h-4 text-xs'>mohamed@gmail.com</div>
              </div>
            </div>
          </td>
          <td><span className="bold-1 text-indigo-600">2450 كغ</span></td>
          <td>
            <div className="df-c w-full !gap-1">
              <div className="df w-full jc-sb">
                <span>55%</span>
                <span>النقاط</span>
              </div>
              <div className="range w-full">
                <div className="bar-cont">
                  <div className="barprog"></div>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className={`df relative w-fit`}>
              <div className="rank">2</div>
              <div className="order-cus-img">
                <img src='/img/about.png' alt="customer" />
              </div>
              <div className="df-c g0">
                <div className='bold-1 h-4 leading-none text-right'>محمد الصبحي</div>
                <div className='text leading-none h-4 text-xs'>mohamed@gmail.com</div>
              </div>
            </div>
          </td>
          <td><span className="bold-1 text-indigo-600">2450 كغ</span></td>
          <td>
            <div className="df-c w-full !gap-1">
              <div className="df w-full jc-sb">
                <span>55%</span>
                <span>النقاط</span>
              </div>
              <div className="range w-full">
                <div className="bar-cont">
                  <div className="barprog"></div>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className={`df relative w-fit`}>
              <div className="rank">2</div>
              <div className="order-cus-img">
                <img src='/img/about.png' alt="customer" />
              </div>
              <div className="df-c g0">
                <div className='bold-1 h-4 leading-none text-right'>محمد الصبحي</div>
                <div className='text leading-none h-4 text-xs'>mohamed@gmail.com</div>
              </div>
            </div>
          </td>
          <td><span className="bold-1 text-indigo-600">2450 كغ</span></td>
          <td>
            <div className="df-c w-full !gap-1">
              <div className="df w-full jc-sb">
                <span>55%</span>
                <span>النقاط</span>
              </div>
              <div className="range w-full">
                <div className="bar-cont">
                  <div className="barprog"></div>
                </div>
              </div>
            </div>
          </td>
        </tr>
        
      </tbody>
    </table>
  </div>
</div>

      </div>
    </div>
  );
}

export default GiftTarget;
