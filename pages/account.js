import React from "react";
import Head from "next/head";
import { parseCookies } from "nookies";

const account = ({ user__name }) => {
  return (
    <div>
      <Head>
        <title>{user__name} - Profile - Bizmerce.com</title>
        <meta name="description" content="Generated by create next home" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <h1>{user__name}</h1>
      </main>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const { token, user__name } = parseCookies(ctx);
  if (!token) {
    const { res } = ctx;
    res.writeHead(302, { Location: "/login" });
    res.end();
  }

  return {
    props: {
      user__name,
    },
  };
}

export default account;
