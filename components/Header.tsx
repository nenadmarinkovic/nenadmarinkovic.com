import { Container } from "../styles/components/layout";
import {
  HeaderWrap,
  Top,
  Main,
  HomeLink,
  Links,
  HeaderLink,
  ContactButton,
} from "../styles/components/header";
import ActiveLink from "./ActiveLink";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function Header({ theme, toggleTheme }: any) {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <HeaderWrap>
        <Top />
        <Container>
          <Main>
            <ActiveLink href="/">
              <HomeLink>Home</HomeLink>
            </ActiveLink>
            <Links>
              <ActiveLink href="/projects">
                <HeaderLink>Projects</HeaderLink>
              </ActiveLink>
              <ActiveLink href="/blog">
                <HeaderLink>Blog</HeaderLink>
              </ActiveLink>
              <HeaderLink onClick={toggleTheme}>
                {theme === "light" ? "Dark mode" : "Light mode"}
              </HeaderLink>
              <ContactButton type="button" onClick={openModal}>
                Open dialog
              </ContactButton>
            </Links>
          </Main>
        </Container>
      </HeaderWrap>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div>
                    <p>
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div>
                    <button type="button" onClick={closeModal}>
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Header;
