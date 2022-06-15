import "../styles/globals.css";
import { Store } from "../store/Store";
import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import "../components/style/header.css";
import "../components/style/footer.css";
import "../components/style/home.css";
import "../components/style/product.css";
import "../components/style/store.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div className="loading">Loading&#8230;</div>;
  }
  return (
    <Provider store={Store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
