import React from "react";
import { motion } from "framer-motion";

const Progress = ({ value, max = 100 }) => {
    return (
        <div className="w-full h-4 overflow-hidden bg-gray-200 rounded-full">
            <motion.div
                className="h-full bg-indigo-600"
                initial={{ width: 0 }}
                animate={{ width: `${(value / max) * 100}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            />
        </div>
    );
};

export default Progress;
