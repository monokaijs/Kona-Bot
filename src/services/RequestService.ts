import {GetServerSidePropsContext, GetServerSidePropsResult, Redirect} from "next";
import {NextResponse} from "next/server";
import {DatabaseService} from "@/services/DatabaseService";

export const redirectRequest = (permanent: boolean, destination: string): GetServerSidePropsResult<any> => {
  return {
    redirect: {
      permanent,
      destination,
    }
  }
}

export const handleRequest = (handler: (ctx: GetServerSidePropsContext) => Promise<GetServerSidePropsResult<any>>) => {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<any>> => {
    try {
      // make sure database connection is valid
      await DatabaseService.connect();
    } catch (e) {
      // Failed to connect the database
      return redirectRequest(false, '/error/database');
    }
    return handler(ctx);
  }
}
