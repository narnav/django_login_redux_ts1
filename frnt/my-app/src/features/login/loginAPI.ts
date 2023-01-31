import { MY_SERVER } from '../../app/glob'
import axios from 'axios'

export function login(cred: any) {
    return new Promise<{ data: any }>((resolve) =>
        axios.post(MY_SERVER +"token/", cred).then(res => resolve({ data: res.data }))
    )
}
