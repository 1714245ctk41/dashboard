import { memo } from 'react'

const Alert = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default memo(Alert)