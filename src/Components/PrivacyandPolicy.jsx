import React from 'react';
import { useTranslation } from "react-i18next";

const PrivacyandPolicy = () => {
  const { t } = useTranslation();
  const Privacy_Policy_collection_items = t('Privacy_Policy_collection_items', {
    returnObjects: true,
  });
  const Privacy_Policy_collection_items2 = t('Privacy_Policy_collection_items2', {
    returnObjects: true,
  });

  return (
    <div style={{ backgroundColor: 'white', color: 'black', padding: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '20px' }}>{t("Privacy_Policy")}</h1>

      <p>{t("Privacy_Policy_heading1")} <a href="https://www.lsstrust.org.in/" style={{ color: 'black', textDecoration: 'underline' }}>www.lsstrust.org.in</a> {t("Privacy_Policy_heading2")}</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '20px', marginBottom: '10px' }}>{t("Privacy_Policy_collection_title")}</h2>
      <p>{t("Privacy_Policy_collection_content")}</p>
      {Array.isArray(Privacy_Policy_collection_items) &&
        Privacy_Policy_collection_items.map((item, index) => (
          <ul style={{ listStyleType: 'disc', marginLeft: '20px' }} key={index}>
            <li>{item}</li>
          </ul>
        ))}


      <h2 style={{ fontSize: '1.5rem', marginTop: '20px', marginBottom: '10px' }}>{t("Privacy_Policy_use_title2")}</h2>
      <p>{t("Privacy_Policy_use_content")}</p>
      {Array.isArray(Privacy_Policy_collection_items2) &&
        Privacy_Policy_collection_items2.map((item, index) => (
          <ul style={{ listStyleType: 'disc', marginLeft: '20px' }} key={index}>
            <li>{item}</li>
          </ul>
        ))}
      <h2 style={{ fontSize: '1.5rem', marginTop: '20px', marginBottom: '10px' }}>{t("Privacy_Policy_use_title3")}</h2>
      <p>{t("Privacy_Policy_collection_content3")}</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '20px', marginBottom: '10px' }}>{t("Privacy_Policy_use_title4")}</h2>

      <p>{t("Privacy_Policy_collection_content4")}</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '20px', marginBottom: '10px' }}>{t("Privacy_Policy_use_title5")}</h2>

      <p>{t("Privacy_Policy_collection_content5")}</p>


      <h2 style={{ fontSize: '1.5rem', marginTop: '20px', marginBottom: '10px' }}>{t("Privacy_Policy_use_title6")}</h2>

      <p>{t("Privacy_Policy_collection_content6")}</p>


      <h2 style={{ fontSize: '1.5rem', marginTop: '20px', marginBottom: '10px' }}>{t("Privacy_Policy_use_title7")}</h2>

      <p>{t("Privacy_Policy_collection_content7")}</p>

    </div>
  );
};

export default PrivacyandPolicy;