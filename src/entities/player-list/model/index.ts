import { createStore, createEvent, createEffect, sample } from 'effector'
import { getBattle } from 'shared/api'
import type { BattleData } from 'shared/api'


export const getBattlesEvent = createEvent<number>()

export const getBattleFx = createEffect<number, BattleData>()
getBattleFx.use(getBattle)

export const $battle = createStore<BattleData | null>(null)
    .on(getBattleFx.doneData, (_, data) => data)

$battle.watch((data) => console.log(data))

sample({
    clock: getBattlesEvent,
    target: getBattleFx
})