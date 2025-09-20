"use client";
import { motion } from "motion/react";

export default function AnimatedLogo() {
    return (
        <div className="fixed inset-0 bg-[#01070F] flex justify-center items-center z-[99999999999999999999]">
            <div className="flex items-center justify-center ">
                <div className="flex items-center justify-center max-h-[30px]">
                    {/* Logo SVG */}
                    <motion.svg
                        width="37"
                        height="30"
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                        initial="initial"
                        animate="animate"
                        className=""
                        variants={{
                            initial: { x: 40 },
                            animate: {
                                x: 0, // shift left
                                transition: { delay: 2.2, duration: 0.6, }, // start after paths finish
                            },
                        }}
                        whileInView={{
                            y: [0, -15, 0],
                        }}
                        transition={{
                            delay: 5.5,
                            duration: 0.7,
                            repeatDelay: 2,  
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }}
                    >
                        {/* First path */}
                        <motion.path
                            d="M13.4438 17.9865C15.7941 17.9865 17.6994 16.0812 17.6994 13.7309C17.6994 11.3805 15.7941 9.47525 13.4438 9.47525C11.0935 9.47525 9.18821 11.3805 9.18821 13.7309C9.18821 16.0812 11.0935 17.9865 13.4438 17.9865Z"
                            stroke="#2C69C4"
                            strokeWidth={1}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="#2C69C4"
                            fillOpacity={0}
                            initial={{ pathLength: 0, fillOpacity: 0 }}
                            animate={{ pathLength: 1, fillOpacity: 1 }}
                            vectorEffect="non-scaling-stroke"
                            transition={{ duration: 1, ease: "easeInOut", fillOpacity: { delay: 1 } }}
                        />

                        {/* Second path */}
                        <motion.path
                            d="M13.1508 20.4627C9.56691 20.3078 6.70683 17.3534 6.70683 13.7308C6.70683 10.1081 9.56522 7.15378 13.1508 6.99891V0.847809C6.16983 1.00436 0.559097 6.71273 0.559097 13.7308C0.559097 20.7488 6.16983 26.4572 13.1508 26.6138V20.4627Z"
                            stroke="white"
                            strokeWidth={1}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="white"
                            fillOpacity={0}
                            initial={{ pathLength: 0, fillOpacity: 0 }}
                            animate={{ pathLength: 1, fillOpacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                delay: 0.3,
                                fillOpacity: { delay: 1.3 },
                            }}
                            vectorEffect="non-scaling-stroke"
                        />

                        {/* Third path */}
                        <motion.path
                            d="M13.7413 0.846161V6.99726C17.3252 7.15213 20.1853 10.1065 20.1853 13.7291C20.1853 17.3518 17.3269 20.3061 13.7413 20.461V26.6121C20.7223 26.4555 26.333 20.7472 26.333 13.7291C26.333 6.71109 20.7223 1.00272 13.7413 0.846161Z"
                            stroke="#2C69C4"
                            strokeWidth={1}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="#2C69C4"
                            fillOpacity={0}
                            initial={{ pathLength: 0, fillOpacity: 0 }}
                            animate={{ pathLength: 1, fillOpacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                delay: 0.6,
                                fillOpacity: { delay: 1.6 },
                            }}
                            vectorEffect="non-scaling-stroke"
                        />

                        <motion.path
                            d="M24.6954 23.5433L20.125 18.6295L19.0864 19.5957L23.6568 24.5095C22.8235 25.7249 22.911 27.3965 23.9564 28.521C25.1684 29.824 27.207 29.8981 28.51 28.686C29.8129 27.474 29.887 25.4354 28.6749 24.1325C27.6296 23.0079 25.9681 22.7992 24.6954 23.5416V23.5433Z"
                            stroke="#2C69C4"
                            strokeWidth={1}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="#2C69C4"
                            fillOpacity={0}
                            initial={{ pathLength: 0, fillOpacity: 0 }}
                            animate={{ pathLength: 1, fillOpacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                delay: 0.9,
                                fillOpacity: { delay: 1.9 },
                            }}
                            vectorEffect="non-scaling-stroke"
                        />
                    </motion.svg>

                    {/* Image that enters after logo shifts */}
                    <div className="flex items-end gap-[3.8px] max-h-[28px] relative mb-[8px]">
                        <motion.img
                            src="/assets/u.svg"
                            alt="u"
                            className=""
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1, transition: { delay: 2.8, duration: 0.7, type: "spring", stiffness: 100, damping: 13 } }}
                            whileInView={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                delay: 5.85,
                                duration: 0.7,
                                repeatDelay: 2, 
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                        />
                        <motion.img
                            src="/assets/i.svg"
                            alt="Logo Text"
                            className=""
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1, transition:{ delay: 3.1, duration: 0.7, type: "spring", stiffness: 100, damping: 13 }}}
                            whileInView={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                delay: 6.2,
                                duration: 0.7,
                                repeatDelay: 2,  
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                        />
                        <motion.img
                            src="/assets/n.svg"
                            alt="Logo Text"
                            className=""
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1, transition:{ delay: 3.4, duration: 0.7, type: "spring", stiffness: 100, damping: 13 }}}
                            whileInView={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                delay: 6.55,
                                duration: 0.7,
                                repeatDelay: 2, 
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                        />
                        <motion.img
                            src="/assets/e.svg"
                            alt="Logo Text"
                            className=""
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1, transition:{ delay: 3.8, duration: 0.7, type: "spring", stiffness: 100, damping: 13 }}}
                            whileInView={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                delay: 6.9,
                                duration: 0.7,
                                repeatDelay: 2,  
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                        />
                        <motion.img
                            src="/assets/f.svg"
                            alt="Logo Text"
                            className=""
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1, transition:{ delay: 4.2, duration: 0.7, type: "spring", stiffness: 100, damping: 13 }}}
                            whileInView={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                delay: 7.25,
                                duration: 0.7,
                                repeatDelay: 2,   
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                        />
                        <motion.img
                            src="/assets/i.svg"
                            alt="Logo Text"
                            className=""
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1, transition:{ delay: 4.6, duration: 0.7, type: "spring", stiffness: 100, damping: 13 }}}
                            whileInView={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                delay: 7.6,
                                duration: 0.7,
                                repeatDelay: 2,   
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                        />
                        <motion.img
                            src="/assets/y.svg"
                            alt="Logo Text"
                            className="absolute top-[7px] right-[-24px]"
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1, transition:{ delay: 5, duration: 0.7, type: "spring", stiffness: 100, damping: 13 }}}
                            whileInView={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                delay: 7.95,
                                duration: 0.7,
                               repeatDelay: 2, 
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
