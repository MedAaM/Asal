import React from "react";
import "./edit.css";

import Contact from "../../../components/mandoub-components/mandoub-settings/Contact";
import EditInfo from "../../../components/mandoub-components/mandoub-settings/EditInfo";
import ChangePassword from "../../../components/mandoub-components/mandoub-settings/ChangePassword";
import { motion } from "framer-motion";
import { fadeIn, footerVariants, staggerChildren } from "../../../utils/motion";
import PaymentMethods from "../../../components/mandoub-components/mandoub-settings/PaymentMethods";
import DangerZone from "../../../components/mandoub-components/mandoub-settings/DangerZone";

function EditProfilePage() {
  return (
    <motion.div 
      variants={staggerChildren}
      className="df-c edit"
    >
      <div className="df ai-fs w-full setting-sec">
        <div className="df-c w-1/3 !gap-1">
          <div className="title">معلوماتك</div>
          <span className="text text-xs">تحديث معلوماتك العامة</span>
        </div>
        <motion.div variants={fadeIn("right", "tween", 1 * 0.2, 1)}  className="section-card edit-section">
          <EditInfo />
        </motion.div>
      </div>

      <div className="df ai-fs w-full setting-sec">
        <div className="df-c w-1/3 !gap-1">
          <div className="title">معلومات الاتصال الخاصة بك</div>
          <span className="text text-xs">أضف إلى قائمة معلومات الاتصال</span>
        </div>
        <motion.div variants={fadeIn("right", "tween", 3 * 0.2, 1)}className="section-card edit-section">
          <Contact />
        </motion.div>
      </div>

      <div className="df ai-fs w-full setting-sec">
        <div className="df-c w-1/3 !gap-1">
          <div className="title">كلمة المرور الخاصة بك</div>
          <span className="text text-xs">حافظ على أمان حسابك</span>
        </div>
        <motion.div variants={fadeIn("right", "tween", 1 * 0.2, 1)} className="section-card edit-section">
          <div className="df-c !gap-10">
            <ChangePassword />
          </div>
        </motion.div>
      </div>

      <div className="df ai-fs w-full setting-sec">
        <div className="df-c w-1/3 !gap-1">
          <div className="title">طرق الدفع</div>
          <span className="text text-xs">أضف طرق الدفع الخاصة بك</span>
        </div>
        <motion.div variants={fadeIn("right", "tween", 1 * 0.2, 1)}  className="section-card edit-section">
          <PaymentMethods />
        </motion.div>
      </div>

      <div className="df ai-fs w-full setting-sec">
        <div className="df-c w-1/3 !gap-1">
          <div className="text-2xl font-bold !text-red-600">المنطقة الخطرة</div>
          <span className="text-xs !text-red-400">تجنب هذه المنطقة</span>
        </div>
        <DangerZone />
      </div>
    </motion.div>
  );
}

export default EditProfilePage;
