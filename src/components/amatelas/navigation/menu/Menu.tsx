import { classNames } from '../../../function/components/classnames'
import { BaseProps } from '../../../types/BaseProps'
import styles from './menu.module.scss'

interface MenuItem {
  label: JSX.Element | string
  to: string
  active: boolean
}

interface MenuProps extends BaseProps {
  menuItems: MenuItem[]
}

interface MenuItemProps extends BaseProps {
  menuItem: MenuItem
}

export const Menu = (props: MenuProps) => {
  return (
    <ul className={styles.menu}>
      {props.menuItems.map((menuItem) => {
        return <MenuItem key={menuItem.to} menuItem={menuItem} />
      })}
    </ul>
  )
}

export const MenuItem = (props: MenuItemProps) => {
  const classes = [styles.label]
  if (props.menuItem.active) {
    classes.push(styles['label-active'])
  }
  return (
    <a href={props.menuItem.to}>
      <li className={classNames(...classes)}>
        <div>{props.menuItem.label}</div>
      </li>
    </a>
  )
}
