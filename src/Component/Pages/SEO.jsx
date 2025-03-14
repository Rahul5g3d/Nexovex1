import React from "react";

const SEO = ({ title, description, keywords }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </>
  );
};

export default SEO;
