import {atom, selector} from "recoil";

export const titleAtom = atom({
    key: 'title',
    default: ''
})

export const descriptionAtom = atom({
    key: 'description',
    default: ''
})

export const todosAtom = atom({
    key: 'currentTodos',
    default: []
})

export const filterAtom = atom({
    key: 'filteredTodos',
    default: []
})