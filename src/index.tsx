/* @refresh reload */
import { render } from 'solid-js/web'
import { App } from 'app/app'
import { server } from 'shared/api'

server.start()
server.log()

render(() => <App />, document.getElementById('root') as HTMLElement)