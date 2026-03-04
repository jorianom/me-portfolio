"use client";

import { motion } from "motion/react";
import { FaCircle } from "react-icons/fa6";

export const AvailabilityBadge = () => {
    return (
        <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
            className="flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green-300 backdrop-blur-sm shadow-[0_0_20px_rgba(74,222,128,0.15)]"
        >
            <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <FaCircle className="w-2.5 h-2.5 text-green-400" />
            </motion.span>
            <span>Disponibilidad inmediata</span>
        </motion.div>
    );
};
