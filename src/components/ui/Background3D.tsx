import { motion } from 'framer-motion';

const Background3D = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Base Background to ensure coverage */}
            <div className="absolute inset-0 bg-black" />

            {/* Perspective Container */}
            <div className="absolute inset-0 flex items-center justify-center [perspective:1000px]">

                {/* Rotating 3D Plane - FLOOR */}
                <motion.div
                    animate={{
                        rotateX: [60, 50, 60],
                        rotateZ: [0, 360]
                    }}
                    transition={{
                        rotateX: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                        rotateZ: { duration: 60, repeat: Infinity, ease: "linear" }
                    }}
                    className="w-[250vw] h-[250vw] absolute opacity-60 origin-center"
                    style={{
                        transformStyle: 'preserve-3d',
                        background: `
                            linear-gradient(rgba(212, 175, 55, 0.6) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(212, 175, 55, 0.6) 1px, transparent 1px)
                        `,
                        backgroundSize: '100px 100px',
                        maskImage: 'radial-gradient(circle at center, black 30%, transparent 90%)'
                    }}
                />

                {/* Rotating 3D Plane - CEILING (Mirror) */}
                <motion.div
                    animate={{
                        rotateX: [60, 50, 60],
                        rotateZ: [0, -360]
                    }}
                    transition={{
                        rotateX: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                        rotateZ: { duration: 60, repeat: Infinity, ease: "linear" }
                    }}
                    className="w-[250vw] h-[250vw] absolute opacity-30 origin-center"
                    style={{
                        transformStyle: 'preserve-3d',
                        background: `
                            linear-gradient(rgba(212, 175, 55, 0.4) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(212, 175, 55, 0.4) 1px, transparent 1px)
                        `,
                        backgroundSize: '150px 150px',
                        maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
                    }}
                />

                {/* Floating Gold Cubes / Particles - WIDER SPREAD */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 0.8, 0],
                            scale: [0.5, 1.2, 0.5],
                            x: [Math.random() * 1600 - 800, Math.random() * 1600 - 800],
                            y: [Math.random() * 800 - 400, Math.random() * 800 - 400],
                            rotateX: [0, 180, 360],
                            rotateY: [0, 180, 360]
                        }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.2
                        }}
                        className="absolute border border-gold/60 w-16 h-16 backdrop-blur-[2px]"
                        style={{
                            boxShadow: '0 0 15px rgba(212, 175, 55, 0.3)'
                        }}
                    />
                ))}

                {/* Deep Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[100px] animate-pulse" />
            </div>

            {/* Vignette Overlay for focus - REDUCED SIDE DARKENING */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none opacity-60" />
        </div>
    );
};

export default Background3D;
