import React from "react";
import "./GiftTarget.css";
import ImgShapeContainer from "../../img shape/ImgShapeContainer";
import { TbCrown } from "react-icons/tb";
function GiftTarget() {
  return (
    <div className="df-c main--container section-card">
      <div className="df">
        <div className="df-c gift--container">
          <div className="gift--target df">
            <ImgShapeContainer path={"/img/about.png"} width={5} height={5} />
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
            <div className="gift">
              <img src={"/img/iphone.png"} />
            </div>
          </div>
          <div className="df">
            <ImgShapeContainer path={"/img/iphone.png"} />
            <ul>
              <li>آيفون 12</li>
              <li>
                أحدث موديل بميزات متقدمة، شاشة Super Retina XDR، كاميرا مزدوجة
                عالية الجودة، ومعالج A14 Bionic
              </li>
            </ul>
          </div>
          <ul>
            <li>تاريخ الاستحقاق: 2025/01/01</li>
            <li>إجمالي الكمية للتسليم: 1500</li>
            <li>تم التسليم: 600</li>
            <li>تصنيفك: 27</li>
          </ul>
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
