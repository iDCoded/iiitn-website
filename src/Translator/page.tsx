import { useEffect } from "react";

declare global {
  interface Window {
    google: any;
  }
}

const Translator = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    };

    if (!window.google) {
      addGoogleTranslateScript();
    } else {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    }
  }, []);

  return <div id="google_translate_element" style={{ display: "none" }}></div>;
};

export default Translator;
