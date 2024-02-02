export const customNumberMask = (value: string) => {
  return applyMask(value, 'inteiros')
}

export const customNumberMaskWithFractions = (
  value: string,
  selectedFormula: string,
) => {
  return applyMask(value, selectedFormula)
}

const applyMask = (value: string, formula: string) => {
  const sanitizedValue = value.replace(/[^\d.-]/g, '')
  const noConsecutiveNegative = sanitizedValue.replace(/(-{2,})/g, '-')
  const singleHyphenValue = noConsecutiveNegative.replace(/(-\d*)-/g, '$1')
  const noConsecutiveLeadingHyphen = singleHyphenValue.replace(/^(-+)/, '-')
  const noLeadingZero = noConsecutiveLeadingHyphen
    .replace(/^(-)?0+(\d+)/, '$1$2')
    .replace(/^(-)?0([^\d-])/, '$1$2')
  const noLeadingHyphenExceptFirst = noLeadingZero.replace(/(?!^)-/g, '')
  const noNegativeZero = noLeadingHyphenExceptFirst.replace(/^-0/, '-')

  if (formula === 'fracionários') {
    const dotsHandled = noNegativeZero.replace(/\.+/g, '.')
    if (dotsHandled.startsWith('.')) {
      return `0${dotsHandled}`
    }
    if (dotsHandled.startsWith('-.')) {
      return `-0${dotsHandled.slice(1) || ''}`
    }
    if (dotsHandled.startsWith('-')) {
      return `-${dotsHandled.slice(1)}`
    }
    return dotsHandled
  }

  return noNegativeZero.replace(/\./g, '')
}
