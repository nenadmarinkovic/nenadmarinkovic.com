import { useState } from "react";
import { initialTabs as tabs } from "./selected-projects";
import { motion, AnimatePresence } from "framer-motion";

export default function SelectedProjects() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="window">
      <nav className="nav-projects">
        <ul className="ul-projects">
          {tabs.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab ? "selected-projects" : ""}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence mode='wait'>
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <span>Tab: {selectedTab.label}</span>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
