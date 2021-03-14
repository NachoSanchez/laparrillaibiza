import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import styles from './Picker.module.css';

const variants ={
    enter: (direction) => {
        return {
          x: direction > 0 ? 200 : -200,
          opacity: 0
        };
      },
      center: {
        x: 0,
        opacity: 1
      },
      exit: (direction) => {
        return {
          x: direction < 0 ? 200 : -200,
          opacity: 0
        };
      }
};

const Item = ({item, sprite, imgWidth }) => {
  const style ={
    width: `${imgWidth}px`,
    marginLeft : `-${item.id * 250}px`
  }
  return(
    <>
      <h1>{ item.name }</h1>
      <div className={styles['img-wrapper']}>
        <img src={sprite} alt={item.name} style ={style}/>
      </div>
    </>
  )
}

const Picker = ({ items, sprite }) => {
  // Este componente necesita que se le pase un Array en el prop items.
    const [[page, direction], setPage] = useState([0,0]);
    const index = wrap(0, items.length, page);
    const paginate = (direction) => setPage([page + direction, direction]);
    const item = items[index];
    const imgWidth = items.length * 250;

    return (
        <AnimatePresence initial={false} custom={direction}>
          <section className ={styles['picker-container']}>
            <motion.div 
                className ='item'
                key ={index}
                custom ={direction}
                variants ={variants}
                initial ='enter'
                animate ='center'
                exit ='exit'
                transition = {{duration: 0.5}}
                drag ='x'
                dragConstraints ={{left: 0, right: 0}}
                dragElastic ={1}
                onDragEnd ={(e, { offset, velocity}) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -10000) {  paginate(1) }
                    else if (swipe > 10000) { paginate(-1) }
                }}>
                  <Item item={item} sprite ={sprite} imgWidth={imgWidth}/>
                </motion.div>
              </section>
        </AnimatePresence>
    );
}

const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};
 
export default Picker;