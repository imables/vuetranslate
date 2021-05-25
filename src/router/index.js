import Vue from "vue"
import VueRouter from "vue-router"
import Root from "./Root"
import Homepage from "../views/Homepage.vue"
import i18n, { asyncLocale } from "@/i18n"
import {
  setDocumentDirectionPerLocale,
  setDocumentLang,
  setDocumentTitle
} from "@/util/i18n/document"

Vue.use(VueRouter)

const { locale } = i18n

const routes = [
  {
    path: "/",
    redirect: locale
  },
  {
    path: "/:locale",
    component: Root,
    children: [
      {
        path: "",
        name: "homepage",
        component: Homepage
      },
      {
        path: "information",
        name: "information",
        component: () =>
          import("../views/Information.vue")
      },
      {
        path: "shop",
        name: "shop",
        component: () =>
          import("../views/Shop.vue")
      }
    ]
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.params.locale === from.params.locale) {
    next()
    return
  }

  const { locale } = to.params

  asyncLocale(locale).then(() => {
    setDocumentLang(locale)

    setDocumentDirectionPerLocale(locale)

    setDocumentTitle(i18n.t("application.title"))
  })

  next()
})

export default router
