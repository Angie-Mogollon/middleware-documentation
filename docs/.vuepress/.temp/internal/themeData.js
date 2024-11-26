export const themeData = JSON.parse("{\"home\":\"/\",\"navbar\":[{\"text\":\"Inicio\",\"link\":\"/\"},{\"text\":\"VUCE\",\"link\":\"/VUCE.html\"},{\"text\":\"MinTransport\",\"link\":\"/MinTransport.html\"},{\"text\":\"DIAN\",\"link\":\"/DIAN.html\"},{\"text\":\"Electronic Billing\",\"link\":\"/FacturacionElectronica.html\"},{\"text\":\"Scales\",\"link\":\"/Basculas.html\"},{\"text\":\"Super Financial\",\"link\":\"/SuperFinanciera.html\"},{\"text\":\"MIIT\",\"link\":\"/MIIT.html\"},{\"text\":\"Scanner\",\"link\":\"/Scanner.html\"},{\"text\":\"Bulk Upload\",\"link\":\"/CargaMasiva.html\"},{\"text\":\"Access Controll\",\"link\":\"/AccessControll.html\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
