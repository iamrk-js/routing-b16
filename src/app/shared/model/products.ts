
export interface Iproduct{
    pname: string;
    pid: string;
    pstatus: "In-progress" | "Dispatched" | "Delivered";
    canReturn: number;
}