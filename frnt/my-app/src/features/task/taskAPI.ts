import { MY_SERVER } from '../../app/glob'
import axios from 'axios'
import { ITasks,ITask } from '../../models/ITask'

export function getAllTasks(access:string) {
    let config = {
        headers: {
          'Authorization': 'Bearer ' + access
        }
      }
    return new Promise<{ data: ITask[] }>((resolve) =>
        axios.get(MY_SERVER +"tasks/",config).then(res => resolve({ data: res.data }))
    )
}
