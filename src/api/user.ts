import { User } from "../interfaces/user"

export const getUsers = (): Promise<User[]> => {
    return fetch('https://jsonplaceholder.typicode.com/users').then(x => x.json())
}

export const getUser = (id: number): Promise<User> => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(x => x.json())
}