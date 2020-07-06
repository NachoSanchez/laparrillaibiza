import React from 'react'
import { motion } from 'framer-motion';

const loaderVariants = {
    animation: {
      x: [-20, 20],
      y: [0, -30],
      transition: {
        x: {
          yoyo: Infinity,
          duration: 0.5,
        },
        y: {
          yoyo: Infinity,
          duration: 0.25,
          ease: 'easeOut'
        }
      }
    }
  };
 
const Loader = () => {

    const loader = {
        width: '10px',
        height: '10px',
        margin: '40px auto',
        borderRadius: '50%',
        backgroundColor: '#FFF'
    }

    return ( 
        <div className='loader-container'>
            <motion.div 
                style={ loader }
                variants={ loaderVariants }
                animate='animation'
            >

            </motion.div>
        </div>
     );
}
 
export default Loader;