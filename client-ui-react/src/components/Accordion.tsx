import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'


const PanelTitle = ({title, onClick, className}: any) => {
  return (
    <div onClick={onClick} className={`no-select accord-panel-title ${className}`}>{title}</div>
  )
} 

const PanelContent = ({children} : any) => {
  return (
    <div className="accord-panel-content"
    >
      {children}
    </div>
  )
}
const Accordion = ({ i, expanded, setExpanded, title, children }: any) => {
  const isActive = i === expanded;
  const ref = useRef(null);
  return (
    <div 
      className="accordion--pitch" 
      style={{backgroundColor: "#ffffff"}}
      ref={ref}
    >
      <PanelTitle 
        onClick={() => setExpanded(isActive ? false : i)} 
        className={isActive ? "open" : ""} 
        title={title} />
      <AnimatePresence initial={false}>
        {
          isActive &&
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {  height: "auto" },
              collapsed: {  height: 0 }
            }}
            transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <PanelContent>
              {children}
            </PanelContent>
          </motion.section>
        }
      </AnimatePresence>
    </div>
  )
}
  
export default Accordion