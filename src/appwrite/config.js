import {ID, Databases, Client, Storage, Query} from 'appwrite'
import conf from '../config/conf';


export class Service{
    client= new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }
    //i used slug for documentID
    async  createPost({title, slug, content, featuredImage, status, userId}) { //the ID will be passed for featuredImage
        try{
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId,slug,{title, content,featuredImage,status,userId})
        }
        catch(err){
            console.log("Appwrite serive :: createPost :: error",err)
        }
        
    }
    async updatePost(slug,{title, content, featuredImage, status}){
        try{
            return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {title,content, featuredImage, status})
        }
        catch(er){
            console.log("Appwrite serive :: updatePost :: error",err)
        }
    }
    async deletePost (slug){
        try{
             await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug);
             return true;
        }
        catch(err){
            console.log("Appwrite serive :: deleterPost :: error",err);
            return false;
        }
    }

    //get any particular post with the help of databaseID(slug) of the particular post
    async getPost(slug){
        try{
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
        }
        catch(err){
            console.log("Appwrite serive :: getPost :: error", err)
        }
    }

    //get all active posts
    async getPosts(queries=[Query.equal('status','active')]){
        try{
            return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries)
        }
        catch(err){
            console.log("Appwrite serive :: getPosts :: error",err);
            return false;
        }
    }

    //file upload service
    async uploadFile(file){ //while uploading file don't just give the name, give its BLOB
        try{
            return await this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file) //file is the file from parameter
            //this will return the ID
        }
        catch(err){
            console.log("Appwrite serive :: uploadFile :: error", err);
            return false;  
        }
    }
    async deleteFile(fileID){
        try{
            await this.bucket.deleteFile(conf.appwriteBucketId, fileID);
            return true;
        }
        catch(err){
            console.log("Appwrite serive :: deleteFile :: error", err);
            return false
        }
    }

    getFilePreview(fileID){
        return this.bucket.getFilePreview(conf.appwriteBucketId, fileID);
    }
}

const service =new Service();
export default service;