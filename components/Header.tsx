import { useState } from "react";
import { Container } from "../styles/components/layout";
import Modal from "react-modal";
import {
  HeaderWrap,
  Top,
  Main,
  HomeLink,
  Links,
  HeaderLink,
  ThemeButton,
  ContactButton,
} from "../styles/components/header";
import { ModalInside } from "../styles/components/modal";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const router = useRouter();

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
              <Link href="/" className={router.pathname === "/" ? "active-link" : ""}>
                Home
              </Link>
            </HomeLink>
            <Links>
              <HeaderLink>
                <Link href="/projects" className={router.pathname === "/projects" ? "active-link" : ""}>
                  Projects
                </Link>
              </HeaderLink>
              <HeaderLink>
                <Link
                  href="/notes" className={router.pathname === "/notes" ? "active-link" : ""}>
                  Notes
                </Link>
              </HeaderLink>
              <ThemeButton onClick={toggleTheme}>
                {theme === "light" ? "Dark mode" : "Light mode"}
              </ThemeButton>
              <ContactButton
                type="button"
                onClick={openModal}
                modalIsOpen={modalIsOpen}
              >
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
