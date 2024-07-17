// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app:{ 
    baseURL: process.env.NODE_ENV === 'production' ?  '/STP_Reservation/' : '/',
    buildAssetsDir: '/static/'
  },
  supabase: {
    redirect: false,
  },
  shadcn: {
    componentDir: './components/ui'
  },
  modules:['@nuxtjs/supabase', "@nuxtjs/tailwindcss", "shadcn-nuxt"]
})