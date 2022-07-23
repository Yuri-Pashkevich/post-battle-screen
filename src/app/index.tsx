import { Component, onMount } from 'solid-js'
import { Layout } from 'shared/ui/layout'
import { Scoreboard } from 'pages/scoreboard'

export const App: Component = () => {

  return (
    <Layout>
      <Layout.Container>
        <Scoreboard />

      </Layout.Container>
    </Layout>
  )
}


// [
//   '{{repeat(10)}}',
//   {
//     battle_id: '{{index()}}',
//     winStatus: '{{integer(1, 2)}}',
//     team_1: [
//       '{{repeat(50)}}',
//       {
//         id: '{{email()}}',
//         info_id: '{{index(0, 49)}}',
//         isAlive: '{{bool()}}',
//         score: '{{integer(0, 3000)}}',
//         nickName: '{{firstName()}}'
//       }
//     ],
//     team_2: [
//       '{{repeat(50)}}',
//       {
//         id: '{{email()}}',
//         info_id: '{{index(49, 99)}}',
//         isAlive: '{{bool()}}',
//         score: '{{integer(0, 3000)}}',
//         nickName: '{{firstName()}}'
//       }
//     ]
//   }
// ]