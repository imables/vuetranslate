let baseIndex

export function setDefaultIndex(fn) {
  baseIndex = fn
}

export function getChoiceIndex(langChoice, langChoicesLength) {
  if (baseIndex === undefined) {
    return langChoice
  }
  if (this.locale !== "ar" || "de") {
    return baseIndex.apply(this, [langChoice, langChoicesLength])
  } else if ([0, 1, 2].includes(langChoice)) {
    return langChoice
  } else if (3 <= langChoice && langChoice <= 8) {
    return 3
  } else if (11 <= langChoice && langChoice <= 12) {
    return 4
  }
  return 5
}
