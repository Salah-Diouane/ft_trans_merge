import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useStore } from "./store/store";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes/routes";
import { useTranslation, I18nextProvider } from "react-i18next";
import i18n from "./translation/translation";

function App() {
  const { i18n } = useTranslation();
  const element = useRoutes(routes);
  const store = useStore();

  useEffect(() => {
    if (store.Language) {
      i18n.changeLanguage(store.Language);
    }
  }, [store.Language]);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {element}
    </>
  );
}

createRoot(document.getElementById("root") as HTMLElement).render(
  // <StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  // </StrictMode>
);
