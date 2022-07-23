import { Player } from "./player"
import { RiOthersSwordFill } from 'solid-icons/ri'
import { FaSolidSkullCrossbones } from 'solid-icons/fa'
import styles from './index.module.scss'
import { For } from "solid-js"
import type { BattleData } from 'shared/api'
import { useUnit } from "effector-solid"
import { onMount } from "solid-js"
import { scoreBoardMount, getBattleFx, $battle } from "./model"

interface PlayerListProps {
    teamNumber: number
    color: string
    backgroundColor: string
    renderTeam: number
}


export const PlayerList = ({ teamNumber, color, backgroundColor, renderTeam }: PlayerListProps) => {

    const [battle] = useUnit([$battle])


    return (
        <div class={styles.playerlist}>
            <ul class={styles.playerlist_heads}>
                <li style={{ 'color': color }}>
                    Team {teamNumber} {battle()?.winStatus === teamNumber ? 'Winner' : ''}
                </li>
                <li>Score</li>
                <li>Status</li>
                <li><RiOthersSwordFill /></li>
                <li><FaSolidSkullCrossbones /></li>
            </ul>
            <div class={styles.playerlist_players} style={{ 'background-color': backgroundColor }}>
                <For each={renderTeam === 1 ? battle()?.team_1 : battle()?.team_2}>{(it) =>
                    <Player {...it} />
                }
                </For>
            </div>
        </div>
    )
}