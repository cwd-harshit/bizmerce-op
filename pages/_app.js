import "../styles/globals.css";
import { Store } from "../store/Store";
import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import "../components/style/header.css";
import "../components/style/footer.css";
import "../components/style/home.css";
import "../components/style/product.css";
import "../components/style/store.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
