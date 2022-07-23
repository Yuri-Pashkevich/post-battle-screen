import styles from './index.module.scss'
import { RiOthersSwordFill } from 'solid-icons/ri'
import { FaSolidSkullCrossbones } from 'solid-icons/fa'



interface PlayerProps {
    id: number
    info_id: number
    nickName: string
    score: number
    isAlive: boolean
}

export const Player = ({ nickName, score, isAlive }: PlayerProps) => {
    return (
        <div class={styles.player}>
            <ul class={styles.player_info}>
                <li>{nickName}</li>
                <li>{score}</li>
                <li>{isAlive ? <FaSolidSkullCrossbones /> : ''}</li>
            
            </ul>
        </div>
    )
}








