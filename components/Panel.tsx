import {
  PanelInside,
  PanelWrap,
  Title,
  Text,
  PanelButton,
} from '../styles/components/panel';
import Link from 'next/link';

function Panel() {
  return (
    <PanelWrap>
      <PanelInside>
        <Title> Let’s build together.</Title>
        <Text>
          Web is an unique platform for creativity, businesses, and
          growth. Let’s combine your idea with my technical know-how
          to build amazing projects. Together.
        </Text>

        <Link href="/contact">
          <PanelButton>
            <span>Contact</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="contact-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </PanelButton>
        </Link>
      </PanelInside>
    </PanelWrap>
  );
}

export default Panel;
