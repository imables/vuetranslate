import available from "@/config/availableLocales"

export function getAllAvailableLocales() {
  let theLocales = []

  for (const code of Object.keys(available)) {
    theLocales.push({
      code,
      name: available[code]
    })
  }

  return theLocales
}

export function supportedLocalesInclude(locale) {
  return Object.keys(available).includes(locale)
}
