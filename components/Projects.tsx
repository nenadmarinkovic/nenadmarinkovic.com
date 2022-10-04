import { useState } from "react";
import { initialTabs as tabs } from "./ingredients";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../styles/components/layout";
import { Title } from "../styles/components/panel";
export default function Projects() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <Container>
      <Title style={{ marginTop: "200px" }}> Personal projects </Title>
      <div className="window">
        <nav>
          <ul>
            <div className="dots">
              <span className="dot sunset"></span>
              <span className="dot orange"></span>
              <span className="dot green"></span>
            </div>

            {tabs.map((item) => (
              <li
                key={item.id}
                className={item === selectedTab ? "selected" : ""}
                onClick={() => setSelectedTab(item)}
              >
                {`${item.label}`}
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
              key={selectedTab ? selectedTab.id : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ? `${selectedTab.label} ${selectedTab.text} ` : "😋"}
            </motion.div>
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.5 }}
            >
              {selectedTab
                ? `${selectedTab.label} ${selectedTab.label} `
                : "😋"}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      <div>
        Write your own, or import Actions from the open source community, all
        within our world-class editor. Feeling stuck? Browse the Actions
        developer docs as you code.
      </div>
    </Container>
  );
}
