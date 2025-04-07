import React from 'react';
import { useTranslation } from "react-i18next";

const Termsandcondition = () => {
  const { t } = useTranslation();

  return (
    <div style={{ backgroundColor: 'white', color: 'black', padding: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '20px' }}>{t("Term_condi__heading1")}</h1>

      <p>{t("Term_condi__heading2")} <a href="http://www.lssftrust.org" style={{ color: 'black', textDecoration: 'underline' }}>www.lssftrust.org</a>.{t("Term_condi__heading3")}</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '20px', marginBottom: '10px' }}>{t("Term_condi__collection_title")}</h2>
      <p>{t("Term_condi__collection_content")}</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '20px', marginBottom: '10px' }}>{t("Term_condi__use_title2")}</h2>
      <p>All materials on this Site, including text, images, and software, are the property of LSSF TRUST. Unauthorized use or reproduction is prohibited.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '20px', marginBottom: '10px' }}>{t("Term_condi__use_title3")}</h2>
      <p>{t("Term_condi__collection_content3")}</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '20px', marginBottom: '10px' }}>{t("Term_condi__use_title4")}</h2>

      <p>{t("Term_condi__collection_content4")}</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '20px', marginBottom: '10px' }}>{t("Term_condi__use_title5")}</h2>

      <p>{t("Term_condi__collection_content5")}</p>


      <h2 style={{ fontSize: '1.5rem', marginTop: '20px', marginBottom: '10px' }}>{t("Term_condi__use_title6")}</h2>

      <p>{t("Term_condi__collection_content6")}</p>

      <p>{t("Term_condi__by")}</p>

      <p>{t("Term_condi__by2")}<a href="http://www.lssftrust.org" style={{ color: 'black', textDecoration: 'underline' }}> www.lssftrust.org</a>.</p>
    </div>
  );
};

export default Termsandcondition;