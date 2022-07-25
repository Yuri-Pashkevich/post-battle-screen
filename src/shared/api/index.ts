import { createServer, Model, Response } from "miragejs"
import { Setter } from "solid-js"

const getBattles = async () => {
    const res = await fetch('http://localhost:3000/src/shared/api/fakeBattlesDB.json')
    return await res.json()
}

const battles = await getBattles()

export const server = {
    start: () => createServer,
    log: () => console.log('server is working')
}

createServer({

    models: {
        friend: Model,
    },

    routes() {
        this.namespace = "api"
        this.get("/battleIds", () => {
            return battles.map(({ battle_id }: any) => battle_id)
        })
        this.get("/battles/:id", (schema, request) => {
            let id = request.params.id
            return battles.find(({ battle_id }: any) => battle_id === +id)
        }),
        this.post("/friends", function (schema, request) {
            let attrs = JSON.parse(request.requestBody).friend
            if (attrs) {
                // @ts-ignore
                return schema.friends.create({ friend: attrs })
            } else {
                return new Response(
                    400,
                    { some: "header" },
                    { errors: ["friend cannot be blank"] }
                )
            }
        }),
        this.delete("/friends/:id", (schema, request) => {
            let id = request.params.id
            // @ts-ignore
            return schema.friends.find(id).destroy()
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
            frags: number
            deaths: number
        }
    ],
    team_2: [
        {
            id: number
            info_id: number
            isAlive: boolean
            score: number
            nickName: string
            frags: number
            deaths: number
        }
    ]
}

export const getBattle = async (id: number) => {
    const res = await fetch(`api/battles/${id}`)
    return res.json()
}

export const getBattleIds = async () => {
    const res = await fetch(`api/battleIds`)
    return res.json()
}

export const showAdditionalInfo = (id: number) => {
    return async () => {
        const res = await fetch(`api/info/${id}`)
        return await res.json()
    }
}

export const addFriend = async (data: any, setDelId: Setter<number>) => {
    const res = await fetch("api/friends", {
        method: "POST",
        body: JSON.stringify(data)
    })
    const friend = await res.json()
    setDelId(friend.friend.id)  
}

export const removeFriend = async (id: number, setDelId: Setter<null>) => {
    await fetch(`api/friends/${id}`, {
        method: "DELETE"
    })
    setDelId(null)
}