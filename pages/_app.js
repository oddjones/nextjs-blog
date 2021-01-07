import "../styles/global.css";

//global component that wraps everything - used to facilitate global css which isn't code split

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
