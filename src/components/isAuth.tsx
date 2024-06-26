"use client";
import { isAuthenticated } from "../../utils/Auth";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function isAuth(Component: any) {

    return function IsAuth(props: any) {
        const auth = isAuthenticated;

        useEffect(() => {
            if (!auth) {
                return redirect("/signIn")
            }
        },);

        if (!auth) {
            return null;
        }

        return <Component {...props} />
    }
}