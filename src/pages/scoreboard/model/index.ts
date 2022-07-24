import { createStore, createEffect, createEvent, sample } from "effector"
import { getBattleIds } from "shared/api"

export const getBattleIdsEvent = createEvent()

export const getBattleIdsFx = createEffect<void, Array<number>>()
getBattleIdsFx.use(getBattleIds)

export const $battleIds = createStore<Array<number>>([])
    .on(getBattleIdsFx.doneData, (_, data) => data)

sample({
    clock: getBattleIdsEvent,
    target: getBattleIdsFx
})