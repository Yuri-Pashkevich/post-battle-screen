import { createSignal } from 'solid-js'
import { getBattlesEvent } from 'entities/player-list/model'


export const [battleId, setBattleId] = createSignal(0)
export const [showList, setShowList] = createSignal(false)

export const handleSelect = (id: number) => {
    setBattleId(id)
    setShowList(!showList()) 
    getBattlesEvent(battleId())
}