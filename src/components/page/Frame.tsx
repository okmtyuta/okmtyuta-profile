import { ReactNode } from 'react'
import styles from './frame.module.scss'
// import { Menu } from '../amatelas/navigation/menu/Menu'
import { Space } from '../layout/Space'
import { Highlight } from '../amatelas/display/highlight/Highlight'
import { Header } from '../amatelas/base/header/Header'

interface FrameProps {
  children: ReactNode
  pageId: number
}

// const menuItems = [
//   {
//     id: 1,
//     label: 'Introduction',
//     to: '/',
//     active: false
//   },
//   {
//     id: 2,
//     label: 'Design Rule',
//     to: 'design-rule',
//     active: false
//   }
// ]

export const Frame = (props: FrameProps) => {
  // const activatedMenuItems = menuItems.map((menuItem) => {
  //   if (menuItem.id === props.pageId) {
  //     return {
  //       ...menuItem,
  //       active: true
  //     }
  //   }

  //   return menuItem
  // })
  return (
    <div className={styles.frame}>
      <div className={styles.header}>
        <Header></Header>
      </div>
      <div className={`${styles.menu} ${styles.hide}`}>
        {/* <Menu menuItems={activatedMenuItems} /> */}
      </div>
      <div className={styles.main}>
        <div>{props.children}</div>

        <div className="flex justify-center pt-12">
          <span className="font-anton text-theme-color-primary">POWERED BY </span>
          <Space />
          <Highlight>Amatelas UI</Highlight>
        </div>
      </div>
    </div>
  )
}
