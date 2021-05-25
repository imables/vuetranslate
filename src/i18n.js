import Vue from "vue"
import VueI18n from "vue-i18n"
import getBrowserLocale from "@/util/i18n/get-browser-locale"
import { supportedLocalesInclude } from "./util/i18n/supported-locales"
import {
  getChoiceIndex,
  setDefaultIndex
} from "./util/i18n/choice-index-for-plural"
import numberFormats from "@/locales/numbers"
import dateTimeFormats from "@/locales/dates"
import EventBus from "@/EventBus"

Vue.use(VueI18n)

function getInitialLocale() {
  const localeBrowser = getBrowserLocale({ countryCodeOnly: true })

  if (supportedLocalesInclude(localeBrowser)) {
    return localeBrowser
  } else {
    return process.env.VUE_APP_I18N_LOCALE || "en"
  }
}


setDefaultIndex(VueI18n.prototype.getChoiceIndex)

VueI18n.prototype.getChoiceIndex = getChoiceIndex


const initialLocale = getInitialLocale()

export const i18n = new VueI18n({
  locale: initialLocale, 
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: {},
  dateTimeFormats,
  numberFormats
})


const languagesInitialised = []

export function asyncLocale(locale) {
  EventBus.$emit("i18n-load-start")

  if (languagesInitialised.length > 0 && i18n.locale === locale) {
    EventBus.$emit("i18n-initialised")
    return Promise.resolve(locale)
  }

  
  if (languagesInitialised.includes(locale)) {
    i18n.locale = locale
    EventBus.$emit("i18n-load-complete")
    return Promise.resolve(locale)
  }

  
  return import(
     `@/locales/${locale}.json`
  ).then(messages => {
    i18n.setLocaleMessage(locale, messages.default)

    languagesInitialised.push(locale)

    i18n.locale = locale

    EventBus.$emit("i18n-loaded")
    return Promise.resolve(locale)
  })
}

export default i18n
