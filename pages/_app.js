import "@/styles/globals.css";
import "@/styles/custom.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    ToastContainer;
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}
