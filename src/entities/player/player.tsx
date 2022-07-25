import { createSignal, Show } from 'solid-js'
import { addFriend, removeFriend } from 'shared/api'
import { ImUserMinus } from 'solid-icons/im'
import { TiUserAdd } from 'solid-icons/ti'
import { IoSkull } from 'solid-icons/io'
import { RiOthersSwordFill } from 'solid-icons/ri'
import { FaSolidSkullCrossbones } from 'solid-icons/fa'
import styles from './player.module.scss'


interface PlayerProps {
    id: number
    nickName: string
    score: number
    isAlive: boolean
    frags: number
    deaths: number
}


export const Player = ({ nickName, score, isAlive, frags, deaths }: PlayerProps) => {
    
    const [showStats, setShowStats] = createSignal(false)
    const [delId, setdelId] = createSignal(null)

    return (
        <div class={styles.player} onMouseOver={setShowStats.bind(null, true)} onMouseLeave={setShowStats.bind(null, false)}>
            <ul class={styles.player_info}>
                <li>{nickName}</li>
                <Show when={showStats()}>
                    <li>
                        <RiOthersSwordFill />
                        <span>{frags}</span>
                    </li>
                    <li>
                        <IoSkull />
                        <span>{deaths}</span>
                    </li>
                    <li>
                        {delId() ?
                            <ImUserMinus onClick={() => removeFriend(delId()!, setdelId)} class={styles.red}/>
                            :
                            <TiUserAdd onClick={() => addFriend({ friend: nickName }, setdelId) } />
                        }
                    </li>
                </Show>
                <li>{score}</li>
                <li>{isAlive ? <FaSolidSkullCrossbones /> : ''}</li>
            </ul>
        </div>
    )
}