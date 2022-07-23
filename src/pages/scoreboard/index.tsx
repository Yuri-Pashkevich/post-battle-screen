import { useUnit } from "effector-solid"
import { PlayerList } from "entities/player-list"
import { getBattleFx, scoreBoardMount } from "entities/player-list/model"
import { Loader } from "shared/ui/loader"
import { Show, onMount } from "solid-js"

import styles from './index.module.scss'

const colors = {
    team_1: '#42a5f5',
    team_2: '#f9a825',
    background_1: '#112a50',
    background_2: '#3d1e04'
}

export const Scoreboard = () => {

    const [loading] = useUnit([getBattleFx.pending])

    onMount(() => scoreBoardMount(0))


    return (
        <Show when={!loading()} fallback={<Loader/>}>
            <div class={styles.scoreboard}>
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

        </Show>
    )
}