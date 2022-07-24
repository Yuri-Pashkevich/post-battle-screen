import type { BattleData } from 'shared/api'
import { Accessor } from 'solid-js'
import styles from './battlestatus.module.scss'
import { IoGameController } from 'solid-icons/io'


interface BattleStatusProps {
    accessor: Accessor<BattleData | null>
}

export const BattleStatus = ({ accessor }: BattleStatusProps) => {

    return (
        <div class={styles.battlestatus}>
            <div class={styles.battlestatus_info}>
                <IoGameController />
                <h1 class={styles.battlestatus_title}>
                    {accessor()?.winStatus === 1
                        ?
                        `Team 1 wins the game ${accessor()?.battle_id! + 1}`
                        :
                        `Team 2 wins the game ${accessor()?.battle_id! + 1}`
                    }
                </h1>
                <IoGameController />
            </div>
        </div>
    )
}
