import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "@/lib/db";
import authConfig from "@/auth.config";
import { getUserById } from "@/data/user";
import { UserRole } from "@prisma/client";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut, 
} = NextAuth({
  pages:{
    signIn:"/login",
    error:"/error",
  },
  events:{
    async linkAccount({user}){
      await db.user.update({
        where:{id: user.id},
        data:{emailVerified: new Date()}
      })
    }
  },
  callbacks:{
    async signIn({user,account}){
      //permitir OAuth sem verificação de e-mail
      if(account?.provider !== "credentials") return true;

      const existingUser = await getUserById(user.id);

      //impedir o login sem verificação de e-mail
      if(!existingUser?.emailVerified) return false;

      //TODO: 2FA

      return true;
    },
    async session({token, session}){
      console.log({sessionToken:token})
        if (token.sub && session.user){
          session.user.id = token.sub;
        }

        if(token.role && session.user){
          session.user.role=token.role as UserRole;
        }

        if(session.user){
          session.user.name = token.name;
          session.user.email = token.email;
          session.user.isOAuth = token.isOAuth as boolean;
        }

        return session
    },
    async jwt({token}){
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub)

      if (!existingUser) return token;

      const existingAccount = await getUserById(
        existingUser.id
      );

      token.isOAuth = !!existingAccount;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.role = existingUser.role;

      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session:{strategy: "jwt"},
  ...authConfig,
});