import {
  PanelInside,
  PanelWrap,
  Title,
  Text,
  PanelButton,
} from "../styles/components/panel";
import Link from "next/link";

function Panel() {
  return (
    <PanelWrap>
      <PanelInside>
        <Title> Let&apos;s build together.</Title>
        <Text>
          Web is an unique platform for creativity, businesses, and growth.
          Let&apos;s combine your idea with my technical know-how to build
          amazing projects. Together.
        </Text>

        <Link href="/contact">
          <PanelButton>
            <span>Contact</span>
            <svg
              width="13"
              height="11"
              viewBox="0 0 13 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="13"
                height="11"
                fill="black"
              >
                <rect fill="white" width="13" height="11" />
                <path d="M7.14645 1.14645C7.34171 0.951182 7.65829 0.951182 7.85355 1.14645L11.8536 5.14645C12.0488 5.34171 12.0488 5.65829 11.8536 5.85355L7.85355 9.8536C7.65829 10.0488 7.34171 10.0488 7.14645 9.8536C6.95118 9.6583 6.95118 9.3417 7.14645 9.1464L10.2929 6H1.5C1.22386 6 1 5.77614 1 5.5C1 5.22386 1.22386 5 1.5 5H10.2929L7.14645 1.85355C6.95118 1.65829 6.95118 1.34171 7.14645 1.14645Z" />
              </mask>
              <path
                d="M7.14645 1.14645C7.34171 0.951182 7.65829 0.951182 7.85355 1.14645L11.8536 5.14645C12.0488 5.34171 12.0488 5.65829 11.8536 5.85355L7.85355 9.8536C7.65829 10.0488 7.34171 10.0488 7.14645 9.8536C6.95118 9.6583 6.95118 9.3417 7.14645 9.1464L10.2929 6H1.5C1.22386 6 1 5.77614 1 5.5C1 5.22386 1.22386 5 1.5 5H10.2929L7.14645 1.85355C6.95118 1.65829 6.95118 1.34171 7.14645 1.14645Z"
                fill="black"
              />
              <path
                d="M7.14645 1.14645C7.34171 0.951182 7.65829 0.951182 7.85355 1.14645L11.8536 5.14645C12.0488 5.34171 12.0488 5.65829 11.8536 5.85355L7.85355 9.8536C7.65829 10.0488 7.34171 10.0488 7.14645 9.8536C6.95118 9.6583 6.95118 9.3417 7.14645 9.1464L10.2929 6H1.5C1.22386 6 1 5.77614 1 5.5C1 5.22386 1.22386 5 1.5 5H10.2929L7.14645 1.85355C6.95118 1.65829 6.95118 1.34171 7.14645 1.14645Z"
                stroke="black"
                strokeWidth="0.5"
                mask="url(#path-1-outside-1_408_3)"
              />
            </svg>
          </PanelButton>
        </Link>
      </PanelInside>
    </PanelWrap>
  );
}

export default Panel;
