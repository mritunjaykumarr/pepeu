"use client";

import { SessionProvider } from "next-auth/react";

const SessionsProvider = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default SessionsProvider;
