import { Container } from "../styles/components/layout";
import Modal from "react-modal";
import {
  HeaderWrap,
  Top,
  Main,
  HomeLink,
  Links,
  HeaderLink,
  ContactButton,
} from "../styles/components/header";

import { ModalInside } from "../styles/components/modal";
import ActiveLink from "./ActiveLink";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Header({ theme, toggleTheme }: any) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <HeaderWrap>
        <Top />
        <Container>
          <Main>
            <HomeLink>
              <ActiveLink href="/">
                <a>Home</a>
              </ActiveLink>
            </HomeLink>

            <Links>
              <HeaderLink>
                <ActiveLink href="/projects">
                  <a>Projects</a>
                </ActiveLink>
              </HeaderLink>

              <HeaderLink>
                <ActiveLink href="/blog">
                  <a>Blog</a>
                </ActiveLink>
              </HeaderLink>

              <HeaderLink onClick={toggleTheme}>
                {theme === "light" ? "Dark mode" : "Light mode"}
              </HeaderLink>

              <ContactButton type="button" onClick={openModal}>
                Contact
              </ContactButton>
            </Links>
          </Main>
        </Container>
      </HeaderWrap>
      <Modal
        closeTimeoutMS={300}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="modal"
        ariaHideApp={false}
        bodyOpenClassName={"body-open"}
        overlayClassName={{
          base: "overlay",
          afterOpen: "overlay-open",
          beforeClose: "overlay-close",
        }}
      >
        <ModalInside>
          <button onClick={closeModal}>Close</button>
          <div>Model Inside. Change.</div>
        </ModalInside>
      </Modal>
    </>
  );
}

export default Header;
