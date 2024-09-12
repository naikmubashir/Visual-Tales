import {Client, Account, ID} from 'appwrite'
import conf from '../config/conf';

export class AuthService{
    client = new Client();
    account;


    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account(this.client);
    }
    //method to create the accoutn
    async createAccount({email, password, name}){
        try{
            const userAccount=await this.account.create(ID.unique(), email,password,name);  //first param should be unique it
            if(userAccount){
                //call another method ... to login automatically
                this.login({email, password})
            }
            else {
                return userAccount;
            }
        }catch(err){
            throw err;
        }
    }

    async login({email, password}){
        try{
           return await this.account.createEmailSession(email, password);
        }catch(err){
            throw err;
        }
    }
    async getCurrentUser(){
        try{
            return await this.account.get();
        }catch(err){
            console.log("appwrite service:: getCurrentUser::error",err);
            
        }
        return null;
    }
    async logout(){
        try{
            return await this.account.deleteSessions();
        }catch(err){
            console.log(err)
        }
    }
}

const authService = new AuthService();

export default authService