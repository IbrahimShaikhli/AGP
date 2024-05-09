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
   <img src="/APG-LOGO.png" alt="Logo" className="lg:w-64 lg:h-64 w-32 h-32" />
   <h1 className="lg:text-5xl text-2xl font-bold ml-4 lg:ml-4 text-blue-950">AGP</h1>
   <h2 className="lg:text-3xl text-xl font-bold ml-3 lg:ml-4 text-blue-950 text-center">For Construction Projects Management</h2>
 </motion.div>
);

export default SplashScreen;
