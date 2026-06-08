import React from 'react';

// Apply the saved theme before the page paints to avoid a flash.
// Default is dark (no class); only "light" is applied when the user chose it.
const themeScript = `(function(){try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.add('light');}}catch(e){}})();`;

export const onRenderBody = ({ setHtmlAttributes, setPreBodyComponents }) => {
  setHtmlAttributes({ lang: 'en' });
  setPreBodyComponents([
    <script
      key="theme-init"
      dangerouslySetInnerHTML={{ __html: themeScript }}
    />,
  ]);
};
