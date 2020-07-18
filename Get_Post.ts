class Get_Post {
    private READY_STATUS_CODE=4;
    private isCompleted(req: XMLHttpRequest) {
        return req.readyState === this.READY_STATUS_CODE;
    }
    public httpGet(url:string, callback:( status:number, response:string)=>any): void{
        let req=new XMLHttpRequest();
      //  req.on
    }
}