import { v4 as uuidv4 } from 'uuid'
import { createHeuristic, getHeuristic, updateHeuristic, gettAllHeuristics, deleteHeuristic } from '../database/heuristics'

export async function postHeuristic(data) {
    const heuristic = {
        uuid: uuidv4(),
        name: data.name,
        partidasganadas: data.partidasganadas ? data.partidasganadas : 0,
        partidasperdidas: data.partidasperdidas ? data.partidasperdidas : 0,
    }
    const res = await createHeuristic(heuristic)
    return heuristic.uuid
}

export async function getHeuristicId(name) {
    const res = await getHeuristic(name)
    return res
}

export async function updateHeuristicData(data) {
    const res = await updateHeuristic(data)
    return res
}

export async function getHeuristics() {
    const res = await gettAllHeuristics()
    return res
}