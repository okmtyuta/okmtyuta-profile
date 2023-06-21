import { BaseProps } from '../../types/BaseProps'
import styles from './text-field.module.scss'

interface TextFieldProps extends BaseProps {}

export const TextField = (props: TextFieldProps) => {
  return (
    <span className={styles['text-field']}>
      <label className={styles['text-field-label']}></label>
      <input className={styles['text-field-input']} type="text" />
    </span>
  )
}
