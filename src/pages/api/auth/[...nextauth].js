import nextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
    providers:[
        GithubProvider({
            clientId :'2f0798ae74cf62484d67',
            clientSecret : 'b5c88fd96b8cf46d80842160232ba759fc5d0136',
        })
    ]
}

export default nextAuth(authOptions);