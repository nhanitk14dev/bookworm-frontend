import { LANG_VALUES } from '../config/constant'

export default class OptionsService {
  constructor(translation) {
    this.t = translation
  }
  langOptions() {
    let t = this.t
    return LANG_VALUES.map(val => ({
      value: val,
      name: t(`lang.${val}`)
    }))
  }
}