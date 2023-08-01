import { useState } from "react";
import { initialTabs as tabs } from "./selected-projects";
import { motion, AnimatePresence } from "framer-motion";
import {
  Window,
  Nav,
  UlProjects,
  LiProjects,
  WindowInside,
  DescLink,
  Visit,
} from "../styles/components/selected-projects";
import Link from "next/link";

function SelectedProjects() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <>
      <Window>
        <Nav>
          <UlProjects>
            {tabs.map((item) => (
              <LiProjects
                key={item.index}
                aria-disabled="true"
                className={item === selectedTab ? "selected-project" : ""}
                onClick={() => setSelectedTab(item)}
              >
                {`${item.label}`}

                {item === selectedTab ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </LiProjects>
            ))}
            <Visit>
              <Link href="/projects">
                For more details, visit Projects page.
              </Link>
            </Visit>
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
              <span>{selectedTab.description}</span>
            </motion.div>
          </AnimatePresence>
          <DescLink
            href={`https://${selectedTab.link}`}
            target="_blank"
            rel="noreferrer"
          >
            <span>{selectedTab.link}</span>
          </DescLink>
        </WindowInside>
      </Window>
    </>
  );
}

export default SelectedProjects;
