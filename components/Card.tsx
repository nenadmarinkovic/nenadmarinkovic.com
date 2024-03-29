import { useState } from 'react';
import { CardType } from '../lib/types';
import {
  Item,
  Text,
  Box,
  Title,
  Description,
  BoxTitle,
  BoxIcon,
  BoxItems,
  BoxItem,
  BoxItemIcon,
  BoxItemText,
} from '../styles/components/card';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

function Card({
  title,
  description,
  reversed,
  boxColor,
  boxTitle,
  boxText1,
  boxText2,
  boxText3,
  boxItemIcon,
}: CardType) {
  const [isOpen, setOpen] = useState(false);
  const setBoxColor = () =>
    boxColor === 'orange'
      ? 'orange'
      : boxColor === 'blue'
      ? 'blue'
      : 'green';

  const titleVariants: Variants = {
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 1,
      },
    },

    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const itemsVariants: Variants = {
    enter: {
      opacity: 1,
      transition: {
        when: 'afterChildren',
        staggerChildren: 0.3,
        duration: 0.3,
        delay: 0.3,
        delayChildren: 0.5,
      },
    },
    exit: {
      transition: {
        when: 'afterChildren',
        staggerChildren: 0.3,
        duration: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    enter: {
      y: 0,
      opacity: 1,
    },

    exit: {
      y: -20,
      opacity: 0,
    },
  };

  return (
    <Item className={reversed ? 'row-reverse' : 'row'}>
      <Text>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Text>

      <Box className={setBoxColor()}>
        <div>
          <AnimatePresence mode="wait" initial={false}>
            {!isOpen && (
              <motion.div
                variants={titleVariants}
                initial="exit"
                animate="enter"
                exit="exit"
              >
                <BoxTitle>{boxTitle}</BoxTitle>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                variants={itemsVariants}
                initial="exit"
                animate="enter"
                exit="exit"
              >
                <BoxItems>
                  <motion.div key="heading" variants={itemVariants}>
                    <BoxItem>
                      <BoxItemIcon>
                        <Image
                          src={boxItemIcon}
                          width={30}
                          height={30}
                          alt={'Check icon'}
                        />
                      </BoxItemIcon>
                      <BoxItemText>{boxText1}</BoxItemText>
                    </BoxItem>
                  </motion.div>
                  <motion.div
                    key="subheading-primary"
                    variants={itemVariants}
                  >
                    <BoxItem>
                      <BoxItemIcon>
                        <Image
                          src={boxItemIcon}
                          width={30}
                          height={30}
                          alt={'Check icon'}
                        />
                      </BoxItemIcon>
                      <BoxItemText>{boxText2}</BoxItemText>
                    </BoxItem>
                  </motion.div>

                  <motion.div
                    key="subheading-secondary"
                    variants={itemVariants}
                  >
                    <BoxItem>
                      <BoxItemIcon>
                        <Image
                          src={boxItemIcon}
                          width={30}
                          height={30}
                          alt={'Check icon'}
                        />
                      </BoxItemIcon>
                      <BoxItemText>{boxText3}</BoxItemText>
                    </BoxItem>
                  </motion.div>
                </BoxItems>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <BoxIcon
          aria-label="open"
          onClick={() => setOpen((isOpen) => !isOpen)}
          onDoubleClick={() => setOpen((isOpen) => !isOpen)}
          className={isOpen ? 'opened-box' : 'closed-box'}
        >
          <svg width="40" height="40" viewBox="0 0 15 15" fill="none">
            <path
              d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z"
              fill="white"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </BoxIcon>
      </Box>
    </Item>
  );
}

export default Card;
