import React from 'react';
import "./styles.css"
import {motion} from 'framer-motion'
import { fadeIn, staggerContainer } from '../../../utils/motion';

function OrderItems() {
    const items = [
        {
            name: "أحذية مرتفعة برباط",
            SKU: "drf-t685y-1",
            quantity: 1,
            price: 140.48,
            imagePath: "https://m.media-amazon.com/images/I/31TFPoC2LuL._UF894,1000_QL80_.jpg" // Hypothetical image path
        },
        {
            name: "حقيبة تسوق كبيرة من باربيس",
            SKU: "BN-9-1",
            quantity: 1,
            price: 98.50,
            imagePath: "https://ashevillebeecharmer.com/wp-content/uploads/wildflower-honey-w-comb-1.jpg" // Hypothetical image path
        },
        {
            name: "ساعة بربري بيج 38 ملم من الستانلس ستيل",
            SKU: "II300cab-12",
            quantity: 1,
            price: 102.50,
            imagePath: "https://i.etsystatic.com/10464615/r/il/3cf5fb/966031840/il_570xN.966031840_m2pm.jpg" // Hypothetical image path
        }
    ];

    return (
        <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className='section-card flex1'>
            <div className="title">تفاصيل الطلب</div>
            <div className="df-c !gap-3" >
            {items.map((item, index) => (
                    <motion.div 
                    variants = {fadeIn("right", "tween", (index+1)*0.2, 1)}
                    className='df item ai-stretch' key={index}>
                        <img className="w-20 aspect-square rounded-xl" src={item.imagePath} alt={item.name} />
                        <div className="df-c jc-sb text flex1">
                            <div className="name">{item.name}</div>
                            <div className="sku">رمز المنتج: <span className='sku-color'>{item.SKU}</span></div>
                            <div className="qte ">الكمية: <span className='font-bold'>{item.quantity}</span></div>
                        </div>
                        <div>
                        <span className='font-bold'>${item.price}</span>
                        </div>
                </motion.div>
            ))}
            </div>
            <hr />
            <div className="bill w-1/2 mr-auto">
                <div className="df-c !gap-3">
                    <div className="df w-full jc-sb">
                        <span className='w-26 text-center'>المجموع الفرعي</span>
                        <span className='font-bold'>205$</span>
                    </div>
                    <div className="df w-full jc-sb">
                        <span className='w-24 text-center'>الشحن</span>
                        <span className='font-bold'>50$</span>
                    </div>
                    <div className="df w-full jc-sb">
                        <span className='font-bold w-24 text-center'>المجموع الكلي</span>
                        <span className='font-bold'>255$</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default OrderItems;
