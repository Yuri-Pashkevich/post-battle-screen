import { JSXElement } from "solid-js"
import styles from './index.module.scss'

interface LayoutProps {
  children: JSXElement
}

interface ContainerProps extends LayoutProps { }

interface ContentProps extends LayoutProps {
  columns?: number
  columnWidth?: string
  margin?: string
}

interface PageProps extends ContentProps { }




export const Layout = ({ children }: LayoutProps) => {
  return (
    <main style={styles.main}>
      {children}
    </main>
  )
}

const Container = ({ children }: ContainerProps) => <div class={styles.container}>{children}</div>

const Content = ({ children, columns, columnWidth = 'auto', margin = '1.25rem 0' }: ContentProps) => {

  const defaultStyles = `
    margin-top: 1.25rem;
  `
  const columnsStyles = `
    display: grid;
    position: relative;
    margin: ${margin};
    gap: 1.25rem;
    grid-template-columns: repeat(${columns}, ${columnWidth})
  `

  if (columns) {
    return (
        <div style={columnsStyles} class={styles.content}>
          {children}
        </div>
    )
  }

  return (
      <div style={defaultStyles} class={styles.content}>
        {children}
      </div>
  )
}

const Page = ({ children, columns }: PageProps) => {

  const columnsStyles = `
    display: grid;
    margin: 1.25rem 0;
    gap: 1.25rem;
    grid-template-columns: repeat(${columns}, 1fr)
  `

  if (columns) {
    return (
        <section style={columnsStyles}>
          {children}
        </section>
    )
  }

  return (
      <section>
        {children}
      </section>
  )
}


Layout.Container = Container
Layout.Content = Content
Layout.Page = Page