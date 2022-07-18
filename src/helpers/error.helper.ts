import { threadId } from "worker_threads"

class Error{
    public status: number
    public message: string
    public success: boolean
    public data?: object 

    constructor(status:number, message:string, success:boolean=true, data:object=null){
        this.status = status
        this.message = message
        this.success = success
        this.data = data
    }
    
}

export default Error