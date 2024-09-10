import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // appwrite server URL 
            .setProject(conf.appwriteProjectId); // appwrite project Id
        this.account = new Account(this.client); 
        // here we have created account object to use account related methods
    }

    async createAccount({email, password, name}) {
        try {
            // ID.unique() generates a unique identifier for the new user.
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    // await ke baad jo bhi likha hota hai woh promise hota hai.
    // whenever doing async operation, remember to put try catch block.
    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    // as it is in a class so no need to write the function keyword, we can use arrow function or as shown below.
    async getCurrentUser() {
        try {
            // extracting the current user
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
        // After logging the error, the function returns null. This indicates that the function was unable to retrieve the current user. Returning null is a common practice to signify the absence of a value or that an operation did not succeed.
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService


