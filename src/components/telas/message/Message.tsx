import { classNames } from '../../function/components/classnames'
import { BaseProps } from '../types/BaseProps'

import WarningAmberIcon from '@mui/icons-material/WarningAmber'
// import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
// import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'
// import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'

import styles from './message.module.scss'

type MessageType = 'warning' | 'danger' | 'success' | 'info'

interface MessageProps extends BaseProps {
  type: MessageType
}

type MessageConfig = {
  [type in MessageType]: {
    icon: string
    message: string
    background: string
  }
}

const messageConfig: MessageConfig = {
  warning: {
    icon: styles['warning-icon'],
    message: styles['warning-message'],
    background: styles['warning-background']
  },
  info: {
    icon: styles['warning-icon'],
    message: styles['warning-message'],
    background: styles['warning-background']
  },
  success: {
    icon: styles['warning-icon'],
    message: styles['warning-message'],
    background: styles['warning-background']
  },
  danger: {
    icon: styles['warning-icon'],
    message: styles['warning-message'],
    background: styles['warning-background']
  }
}

export const Message = (props: MessageProps) => {
  const type = props.type
  const background = messageConfig[type].background
  const message = messageConfig[type].message
  const icon = messageConfig[type].icon
  return (
    <div className={classNames(styles.message, background)}>
      <div className={classNames(styles['message-icon'], icon)}>
        <WarningAmberIcon />
      </div>
      <div className={classNames(message)}>{props.children}</div>
    </div>
  )
}
