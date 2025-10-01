// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './styles/index.css';
// import { BrowserRouter } from 'react-router-dom';
// import { useRoutes } from 'react-router-dom';
// import { routes } from './routes/routes';
// import { Toaster } from 'react-hot-toast';
// import { useEffect } from 'react';
// import { useStore } from './store/store';
// import { useTranslation } from "react-i18next";

// function App() {
// 	const { i18n } = useTranslation();
// 	const element = useRoutes(routes);
// 	const store = useStore();

// 	useEffect(() => {
// 		document.documentElement.lang = i18n.language;
// 		document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
// 	}, [i18n.language]);
// 	return (
// 		<>
// 			<Toaster position="top-center" reverseOrder={false} />
// 			{element}
// 		</>
// 	);
// }

// createRoot(document.getElementById('root') as HTMLElement).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useStore } from './store/store';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes/routes';
import { useTranslation, I18nextProvider } from 'react-i18next'; // ✅ ADDED
import i18n from './translation/translation'; // ✅ YOUR i18n CONFIG

// ✅ FIXED: Wrap App below, but define App here
function App() {
	const { i18n } = useTranslation(); // safe now
	const element = useRoutes(routes);
	const store = useStore();

	useEffect(() => {
		document.documentElement.lang = i18n.language;
		document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
	}, [i18n.language]);

	return (
		<>
			<Toaster position="top-center" reverseOrder={false} />
			{element}
		</>
	);
}

// ✅ FIXED: Wrap App with I18nextProvider
createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}> {/* ✅ NOW ADDED */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </StrictMode>
);
