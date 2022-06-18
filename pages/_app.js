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
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeError", NProgress.done);
Router.events.on("routeChangeComplete", NProgress.done);

function MyApp({ Component, pageProps }) {
  const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_CENTER,
    timeout: 5000,
    offset: "90px",
    // you can also just use 'scale'
    transition: transitions.SCALE,
  };
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <div className="loading">Loading&#8230;</div>}
      <Provider store={Store}>
        <AlertProvider template={AlertTemplate} {...options}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AlertProvider>
      </Provider>
    </>
  );
}

export default MyApp;
