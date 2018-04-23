
import { Users_CHANGE, Users_RESET } from './action-types'
export const change = (data) => ({
  type: Users_CHANGE,
  data
})
export const reset = () => ({
  type: Users_RESET
})
