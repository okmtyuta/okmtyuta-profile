import { BaseProps } from '../types/BaseProps'
import LabelIcon from '@mui/icons-material/Label'
import styles from './title.module.scss'

interface TelasTitleProps extends BaseProps {
  posted?: string
  modified?: string
  tags?: string[]
}

export const Title = (props: TelasTitleProps) => {
  return (
    <div className="pb-5">
      {props.posted != null && <div className={styles.posted}>{props.posted}</div>}
      <div className={styles.title}>{props.children}</div>
      {props.tags != null && (
        <ul className={styles.tags}>
          {props.tags.map((tag) => {
            return (
              <li className={styles.tag}>
                <LabelIcon fontSize="small" className={styles['tag-icon']} />
                {tag}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
