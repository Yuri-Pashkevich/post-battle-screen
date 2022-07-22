import type { Component } from 'solid-js'
import { Layout } from 'shared/ui/layout'
import styles from './index.module.scss'
import { Personal } from 'pages/personal'

export const App: Component = () => {
  return (
    <Layout>
      <Layout.Container>
        <Personal/>

      </Layout.Container>
    </Layout>
  )
}