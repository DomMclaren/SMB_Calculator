import { useState, useRef } from "react";
import { motion } from "framer-motion";
import verizonImg from "../img/funny/1675342833299.jpeg";
import audioFile from "../audio/canyouhearmenow.m4a";

export default function Popup({ imageSrc, soundSrc, duration = 6000 }) {
  const [visible, setVisible] = useState(false);
  const audioRef = useRef(null);

  const showPopup = () => {
    setVisible(true);

    const audio = new Audio(audioFile);
    audio.play();

    setTimeout(() => {
      setVisible(false);
    }, duration);
  };

  return (
    <div className="relative">
      <button
        onClick={showPopup}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        ?
      </button>

      {visible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white p-6 shadow-lg rounded-lg"
          >
            <img
              src={verizonImg}
              alt="Popup"
              className="w-40 h-40 object-cover animate-spin-slow"
            />
          </motion.div>
        </div>
      )}

      <audio ref={audioRef} src={soundSrc} preload="auto" />

      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow ${duration / 1000}s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
