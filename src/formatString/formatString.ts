import { IsoLocale } from '@omnicar/sam-types'
import { defaults } from '../init/init'
import { IFormatStringOptions } from './IFormatStringOptions'

const phoneMap: Map<
  IsoLocale,
  (phone: string, opts: IFormatStringOptions) => string
> = new Map()
phoneMap.set('da-DK', formatDKPhone)
phoneMap.set('sv-SE', formatSEPhone)

function formatDKPhone(phone: string, opts: IFormatStringOptions): string {
  const expectedFormat = /(\+\d{2})?(\d{2})(\d{2})(\d{2})(\d{2})/g
  let newFormat: string = '$2$3$4$5'
  if (opts.addSpaces) {
    newFormat = ' $2 $3 $4 $5'
  }
  if (opts.showAreaCode) {
    newFormat = '$1' + newFormat
  }
  return phone.replace(expectedFormat, newFormat.trim())
}

function formatSEPhone(phone: string, opts: IFormatStringOptions): string {
  const expectedFormat = /(\+\d{2})?(\d{2})(\d{3})(\d{2})(\d{2})/g
  let newFormat: string = '$2$3$4$5'
  if (opts.addSpaces) {
    newFormat = ' $2-$3 $4 $5'
  }
  if (opts.showAreaCode) {
    newFormat = '$1' + newFormat
  }
  return phone.replace(expectedFormat, newFormat.trim())
}

export function formatPhone(
  phone: string,
  { showAreaCode = true, addSpaces = true } = {} as IFormatStringOptions,
) {
  if (!phone) {
    return phone
  }
  const formatter = phoneMap.get(defaults.isoName)
  if (!formatter) {
    throw Error(
      `You requested locale "${
        defaults.isoName
      }", but there are no phone formatters for that locale`,
    )
  }
  // Preprocessing: remove spaces and replace '00' with '+' in area code.
  const normalizedPhone = phone.replace(/ /g, '').replace(/^([ ]+)?00/g, '+')
  return formatter(normalizedPhone, { showAreaCode, addSpaces }).trim()
}
