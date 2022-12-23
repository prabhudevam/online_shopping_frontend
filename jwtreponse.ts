export class JwtResponse{
    accessToken:String;
	
   
    id:number;
  
    username:String;
    email:String;
    roles:Set<String>;
}