// components/SplashScreen.jsx

import { motion } from "framer-motion";

const SplashScreen = () => (
 <motion.div
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   exit={{ opacity: 0 }}
   transition={{ duration: 2 }}
   className="flex flex-col items-center justify-center h-screen"
 >
   <img src="/APG-LOGO.png" alt="Logo" className="w-64 h-64" />
   <h1 className="lg:text-4xl text-3xl font-bold ml-6 lg:ml-4">AGP</h1>
 </motion.div>
);

export default SplashScreen;
