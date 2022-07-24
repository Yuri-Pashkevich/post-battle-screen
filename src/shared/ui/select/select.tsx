import { Accessor, For, Show } from 'solid-js'
import { showList, setShowList, battleId, handleSelect } from './handlers'
import styles from './select.module.scss'

interface SelectProps {
    accessor: Accessor<Array<number>>
}

export const Select = ({ accessor }: SelectProps) => {

    return (
        <div class={styles.select_wrapper}>
            <div>
                <div class={styles.select_label}>Select battle</div>
                <div class={styles.select} onClick={() => setShowList(!showList())}>
                    Battle: {battleId() + 1}
                </div>

            </div>
            <Show when={showList()}>
                <ul class={styles.select_options}>
                    <For each={accessor()}>{(id: any, index) => {
                        if (battleId() !== index()) {
                            return <div class={styles.select_option} onClick={handleSelect.bind(null, id)}>
                                Battle: {id + 1}
                            </div>
                        }
                    }}
                    </For>
                </ul>
            </Show>
        </div>
    )
}