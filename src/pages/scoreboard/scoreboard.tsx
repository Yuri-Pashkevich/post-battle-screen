import { useUnit } from "effector-solid"
import { PlayerList } from "entities"
import { getBattleFx, getBattlesEvent, $battle } from "entities/player-list/model"
import { $battleIds, getBattleIdsEvent, getBattleIdsFx } from "./model"
import { Loader, Select } from "shared/ui"
import { Show, onMount } from "solid-js"
import { BattleStatus } from "widgets"
import styles from './scoreboard.module.scss'

const colors = {
    team_1: '#42a5f5',
    team_2: '#f9a825',
    background_1: '#112a50',
    background_2: '#3d1e04'
}

export const Scoreboard = () => {

    const [battlesLoading, battleIdsLoading, battle, battleIds] = useUnit([getBattleFx.pending, getBattleIdsFx.pending, $battle, $battleIds])

    onMount(() => {
        getBattlesEvent(0)
        getBattleIdsEvent()
    })

    return (
        <Show when={!battlesLoading() && !battleIdsLoading()} fallback={<Loader />}>
            <div class={styles.scoreboard}>
                <div class={styles.scoreboard_head}>
                    <BattleStatus
                        accessor={battle}
                    />
                    <Select accessor={battleIds} />
                </div>
                <div class={styles.scoreboard_separator}></div>
                <div class={styles.scoreboard_versus}>
                    VS
                </div>
                <div class={styles.scoreboard_lists}>
                    <PlayerList
                        teamNumber={1}
                        renderTeam={1}
                        color={colors.team_1}
                        backgroundColor={colors.background_1}
                    />
                    <PlayerList
                        teamNumber={2}
                        renderTeam={2}
                        color={colors.team_2}
                        backgroundColor={colors.background_2}
                    />
                </div>
            </div>
        </Show>
    )
}