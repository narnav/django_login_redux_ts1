export interface ITask{
    id:number
    title:string,
    description:string
    completed: boolean,
}

export interface ITasks {
    tasks:ITask[]
}