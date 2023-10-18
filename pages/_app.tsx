// pages/_app.js (or _app.tsx for TypeScript)

import '../assets/global.css'; // Replace with your global CSS file path

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
