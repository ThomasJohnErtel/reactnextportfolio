// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando o CSS do Bootstrap
import './globals.css'; // Importando seu CSS global

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
