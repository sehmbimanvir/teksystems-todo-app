import { useState } from 'react'
import { Storage } from '../services/Storage'

export const useLocalStorage = (key, defaultValue) => {
  const [value, setStateValue] = useState(Storage.getJSON(key, defaultValue))

  const setValue = value => {
    setStateValue(value)
    Storage.setJSON(key, value)
  }

  return [
    value,
    setValue
  ]
}