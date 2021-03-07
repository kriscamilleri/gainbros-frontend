export const state = () => ({
    list: []
})

export const mutations = {
    add(state, text) {
        state.list.push({
            text,
            done: false
        })
    },
    remove(state, { photoUrl }) {
        state.list.splice(state.list.indexOf(photoUrl), 1)
    },
    toggle(state, photoUrl) {
        photoUrl.done = !photoUrl.done
    }
}
