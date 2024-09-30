import React from 'react'
import { CiDeliveryTruck, CiDollar, CiExport } from 'react-icons/ci'
import { FcCancel } from 'react-icons/fc'
import { GiCancel, GiPresent } from 'react-icons/gi'
import "./styles.css"
import { BiCartAdd, BiDollar } from "react-icons/bi";
import { MdReviews } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { ImCancelCircle } from "react-icons/im";

function Notifications() {
    const notifications = [
        { id: 1, name: "أزلوك أحمد", message: "لقد تلقيت طلبًا جديدًا من أحمد أزلوك", icon: BiCartAdd, time: "منذ 6 ساعات", isSeen: false },
        { id: 2, name: "المدراء", message: "تم استلام راتبك بنجاح", icon: BiDollar, time: "منذ 6 ساعات", isSeen: true },
        { id: 3, name: "المدراء", message: "لقد حصلت على المرتبة الأولى في المسابقة، يمكنك الحصول على جائزتك في أي وقت", icon: GiPresent, time: "منذ 6 ساعات", isSeen: true },
        { id: 4, name: "إيمان الشريف", message: "تلقيت مراجعة جديدة من إيمان الشريف", icon: MdReviews, time: "منذ 6 ساعات", isSeen: false },
        { id: 5, name: "منظم الفعاليات", message: "هناك مسابقة جديدة قادمة قريبًا بين مجموعتك والمجموعة الخاصة", icon: GrGroup, time: "منذ 6 ساعات", isSeen: false },
        { id: 6, name: "أزلوك أحمد", message: "تم إلغاء الطلب", icon: ImCancelCircle, time: "منذ 6 ساعات", isSeen: true },
        { id: 7, name: "أزلوك أحمد", message: "لقد تلقيت طلبًا جديدًا من أحمد أزلوك", icon: BiCartAdd, time: "منذ 6 ساعات", isSeen: false },
    ];

    const iconStyles = {
        BiCartAdd: { bg: "--light-primary", color: "--primary" },
        BiDollar: { bg: "--purple-light", color: "--purple" },
        GiPresent: { bg: "--cyan-light", color: "--cyan" },
        MdReviews: { bg: "--pink-light", color: "--pink" },
        GrGroup: { bg: "--pending-light", color: "--pending" },
        ImCancelCircle: { bg: "--canceled-light", color: "--canceled" },
        GiLoveLetter: { bg: "--cyan-light", color: "--cyan" }
    };

    return (
        <div className="df-c section-card !gap-8 w-3/5 mx-auto">
            <div className="df notif-nav">
                <div className="df flex1 bordered !px-3 !py-2 jc-c active-nav">
                    الكل <span className='count'>24</span>
                </div>
                <div className="df flex1 bordered !px-3 !py-2 jc-c">
                    <div className="df !gap-1"><CiDeliveryTruck /> الطلبات</div> <span className='count'>4</span>
                </div>
                <div className="df flex1 bordered !px-3 !py-2 jc-c">
                    <div className="df !gap-1"><GiPresent /> الهدايا</div> <span className='count'>10</span>
                </div>
                <div className="df flex1 bordered !px-3 !py-2 jc-c">
                    <div className="df !gap-1"><CiExport /> الملغاة</div> <span className='count'>10</span>
                </div>
                <div className="df flex1 bordered !px-3 !py-2 jc-c">
                    <div className="df !gap-1"><CiDollar /> المعاملات</div> <span className='count'>10</span>
                </div>
            </div>
            <div className="notification-body notif-height df-c g0">
                {notifications.map((notif) => (
                    <div key={notif.id} className={`notification w-full df ai-fs ${notif.isSeen ? "" : "unseen"}`}>
                        <div
                            className="rounded-icon"
                            style={{
                                backgroundColor: `var(${iconStyles[notif.icon.name].bg})`,
                                color: `var(${iconStyles[notif.icon.name].color})`
                            }}
                        >
                            {React.createElement(notif.icon)}
                        </div>
                        <div className="df-c w-full g0">
                            <div className="bold-1">{notif.name}</div>
                            <div className="text">{notif.message}</div>
                            <div className="text mt-4 w-fit mr-auto">{notif.time}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notifications;
