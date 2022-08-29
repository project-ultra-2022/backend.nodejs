import { Response } from "express";

export default class GeneralResponse<T> {

    private data: T = null;
    private success: boolean = false;
    private message: any;


    public setData(data: T){
        this.data = data;
        this.success = true;
    }

    public getData(){
        return this.data;
    }

    public setSuccess(success: boolean){
        this.success = success;
    }

    public getSuccess(){
        return this.success;
    }

    public setMessage(message: any){
        this.message = message;
    }

    public getMessage(){
        return this.message;
    }

    public static errorNotification(response: Response, status: number, message: any  ){
        let notification: GeneralResponse<any> = new GeneralResponse<any>();
        notification.setMessage(message);
        return response.status(status).send(notification);
    }
}