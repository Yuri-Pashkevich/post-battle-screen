import { Player } from "entities"
import { For } from "solid-js"
import { useUnit } from "effector-solid"
import { $battle } from "./model"
import styles from './player-list.module.scss'

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