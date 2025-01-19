export interface RegisterDto{
    name:String;
    email:string;
    password:string;
    confirmPassword:string;
    userAgent?:string;
}

export interface LoginDto{
    email:string;
    password:string;
    userAgent:string;
}