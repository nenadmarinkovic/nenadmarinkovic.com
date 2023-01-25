import { useState } from "react";
import { initialTabs as tabs } from "./selected-projects";
import { motion, AnimatePresence } from "framer-motion";
import { Window, Nav, UlProjects, LiProjects, WindowInside } from "../styles/components/selected-projects";

export default function SelectedProjects() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <Window>
      <Nav>
        <UlProjects>
          {tabs.map((item) => (
            <LiProjects
              key={item.label}
              aria-disabled="true"
              className={item === selectedTab ? "selected-project" : ""}
              onClick={() => setSelectedTab(item)}
            >
              <div>
              {`${item.label}`}
              </div>
             
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </LiProjects>
          ))}
        </UlProjects>
      </Nav>
      <WindowInside>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <span>Tab: {selectedTab.description}</span>
          </motion.div>
        </AnimatePresence>
      </WindowInside>
    </Window>
  );
}
