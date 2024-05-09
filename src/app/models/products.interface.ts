

export interface Iproducts{
    pname: string;
    pdetails: string;
    pstatus: productstatus;
    id: string;
}

export enum productstatus{
    Inprogress = "In progress",
    Dispatched = " Dispatched",
    Delivered = "Delivered"
}