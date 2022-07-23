import { createServer } from "miragejs"

const getAdditionalInfo = async () => {
    const res = await fetch('http://localhost:3000/src/shared/api/fakeAdditionalInfoDB.json')
    return await res.json()
}

const getBattles = async () => {
    const res = await fetch('http://localhost:3000/src/shared/api/fakeBattlesDB.json')
    return await res.json()
}

const battles = await getBattles()
const additionalInfo = await getAdditionalInfo()

export const server = {
    start: () => createServer,
    log: () => console.log('server is working')
}

createServer({
    routes() {
        this.namespace = "api"
        this.get("/battles/:id", (schema, request) => {
            let id = request.params.id
            return battles.find(({battle_id}: any) => battle_id === +id)
        }),
        this.get("/info/:id", (schema, request) => {
            let id = request.params.id
            return additionalInfo.find(({info_id}: any) => info_id === +id)
        })
    }
})


export type BattleData = {
    battle_id: number
    winStatus: number
    team_1: [
        {
            id: number
            info_id: number
            isAlive: boolean
            score: number
            nickName: string

        }
    ],
    team_2: [
        {
            id: number
            info_id: number
            isAlive: boolean
            score: number
            nickName: string

        }
    ]
}

export const getBattle = async (id: number) => {
    const res = await fetch(`api/battles/${id}`)
    return res.json()
}


export const showAdditionalInfo = (id: number) => {
    return async () => {
        const res = await fetch(`api/info/${id}`)
        return await res.json()
    }
}