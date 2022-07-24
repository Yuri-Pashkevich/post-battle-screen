import { JSXElement } from "solid-js"
import styles from './layout.module.scss'

interface LayoutProps {
  children: JSXElement
}

interface ContainerProps extends LayoutProps { }

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main style={styles.main}>
      {children}
    </main>
  )
}

const Container = ({ children }: ContainerProps) => <div class={styles.container}>{children}</div>

Layout.Container = Container