import "../styles/globals.css";
import { Store } from "../store/Store";
import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import "../components/style/header.css";
import "../components/style/footer.css";
import "../components/style/home.css";
import "../components/style/product.css";
import "../components/style/store.css";
import Router from "next/router";
import { useState } from "react";
import NProgress from "nprogress";
import "../styles/nprogress.css";
import "../components/style/login.css";
import "../components/style/signup.css";
import "../components/style/account.css";

Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeError", NProgress.done);
Router.events.on("routeChangeComplete", NProgress.done);

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <div className="loading">Loading&#8230;</div>}
      <Provider store={Store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
