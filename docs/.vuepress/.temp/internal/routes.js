export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/AccessControll.html", { loader: () => import(/* webpackChunkName: "AccessControll.html" */"C:/Users/Lenovo/Downloads/vuepress/vuepress/docs/.vuepress/.temp/pages/AccessControll.html.js"), meta: {"title":"Functional Requirements Document"} }],
  ["/Basculas.html", { loader: () => import(/* webpackChunkName: "Basculas.html" */"C:/Users/Lenovo/Downloads/vuepress/vuepress/docs/.vuepress/.temp/pages/Basculas.html.js"), meta: {"title":"Functional Requirements Document"} }],
  ["/CargaMasiva.html", { loader: () => import(/* webpackChunkName: "CargaMasiva.html" */"C:/Users/Lenovo/Downloads/vuepress/vuepress/docs/.vuepress/.temp/pages/CargaMasiva.html.js"), meta: {"title":"Functional Requirements Document"} }],
  ["/DIAN.html", { loader: () => import(/* webpackChunkName: "DIAN.html" */"C:/Users/Lenovo/Downloads/vuepress/vuepress/docs/.vuepress/.temp/pages/DIAN.html.js"), meta: {"title":"Functional Requirements Document"} }],
  ["/FacturacionElectronica.html", { loader: () => import(/* webpackChunkName: "FacturacionElectronica.html" */"C:/Users/Lenovo/Downloads/vuepress/vuepress/docs/.vuepress/.temp/pages/FacturacionElectronica.html.js"), meta: {"title":"Functional Requirements Document"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Lenovo/Downloads/vuepress/vuepress/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Bienvenido a Mi Sitio VuePress"} }],
  ["/MIIT.html", { loader: () => import(/* webpackChunkName: "MIIT.html" */"C:/Users/Lenovo/Downloads/vuepress/vuepress/docs/.vuepress/.temp/pages/MIIT.html.js"), meta: {"title":"Functional Requirements Document"} }],
  ["/MinTransport.html", { loader: () => import(/* webpackChunkName: "MinTransport.html" */"C:/Users/Lenovo/Downloads/vuepress/vuepress/docs/.vuepress/.temp/pages/MinTransport.html.js"), meta: {"title":"Functional Requirements Delivery"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Lenovo/Downloads/vuepress/vuepress/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Services and Endpoints Documentation"} }],
  ["/Scanner.html", { loader: () => import(/* webpackChunkName: "Scanner.html" */"C:/Users/Lenovo/Downloads/vuepress/vuepress/docs/.vuepress/.temp/pages/Scanner.html.js"), meta: {"title":"Functional Requirements Document"} }],
  ["/SuperFinanciera.html", { loader: () => import(/* webpackChunkName: "SuperFinanciera.html" */"C:/Users/Lenovo/Downloads/vuepress/vuepress/docs/.vuepress/.temp/pages/SuperFinanciera.html.js"), meta: {"title":"Functional Requirements Document"} }],
  ["/VUCE.html", { loader: () => import(/* webpackChunkName: "VUCE.html" */"C:/Users/Lenovo/Downloads/vuepress/vuepress/docs/.vuepress/.temp/pages/VUCE.html.js"), meta: {"title":"Functional Requirements Document"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Lenovo/Downloads/vuepress/vuepress/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
