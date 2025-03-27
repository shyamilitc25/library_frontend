export interface ILogin{
    email:string;
    password:string
}
export interface IFormInput{
    name:string;
    labelName:string;
    placeHolder:string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}