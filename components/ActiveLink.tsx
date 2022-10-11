import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink = ({ children, href }: any) => {
  const child = React.Children.only(children);
  const router = useRouter();

  return (
    <Link href={href}>
      {React.cloneElement(child, {
        "aria-current": router.pathname === href ? "page" : null,
      })}
    </Link>
  );
};

export default ActiveLink;
