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


// Todo 

// win or lose state
// 2 list of 50 players organized side to side on page - endpoint /battles returns Array<{ battleId: number, allies: Array<players>, opponents: Array<players> }>
// player entity - do object with fields { playerId: email string, nickName: string, scores: number, isAlive: boolean, totalKills: number, deaths: number }
// tooltip with additional player info totalKills, deaths - do with collapsible and hover effect on player
// button to send friend request to any player