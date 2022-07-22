import { createStore, createEvent, createEffect, sample } from 'effector'

export const toggleEvent = createEvent()

export const $toggle = createStore<boolean>(false)
    .on(toggleEvent, (prev) => !prev)
