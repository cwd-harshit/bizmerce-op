import React from "react";
import { parseCookies } from "nookies";

const account = ({ user__name }) => {
  return (
    <div>
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
