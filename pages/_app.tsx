import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "styles/main.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
export default App;
