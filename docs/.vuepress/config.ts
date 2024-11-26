import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    home:'/',
  // Configuración de la navegación
  navbar: [
    { text: 'Inicio', link: '/' },
    { text: 'VUCE', link: '/VUCE.html' },
    { text: 'MinTransport', link: '/MinTransport.html' },
    { text: 'DIAN', link: '/DIAN.html' },
    { text: 'Electronic Billing', link: '/FacturacionElectronica.html' },
    { text: 'Scales', link: '/Basculas.html' },
    { text: 'Super Financial', link: '/SuperFinanciera.html' },
    { text: 'MIIT', link: '/MIIT.html' },
    { text: 'Scanner', link: '/Scanner.html' },
    { text: 'Bulk Upload', link: '/CargaMasiva.html' },
    { text: 'Access Controll', link: '/AccessControll.html' },
    ],

}),

})
