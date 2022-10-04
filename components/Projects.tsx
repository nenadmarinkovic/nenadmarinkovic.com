import { useState } from "react";
import { initialTabs as tabs } from "./ingredients";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../styles/components/layout";

export default function Projects() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <Container>
      <div className="window">
        <nav>
          <ul>
            {tabs.map((item) => (
              <li
                key={item.label}
                className={item === selectedTab ? "selected" : ""}
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
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ? `${selectedTab.label} ${selectedTab.text} ` : "😋"}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </Container>
  );
}
