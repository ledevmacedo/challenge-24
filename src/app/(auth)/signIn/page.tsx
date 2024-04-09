"use client"
import Image from "next/image"
import Link from "next/link"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ModeToggle } from "@/components/modeToggle"


export default function SignIn() {
    return (
        <>
            <div className="flex flex-col items-center justify-center content-center h-dvh">
                <ModeToggle />
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your email below to login to your account
                        </p>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="mail@mail.com" />
                    </div>

                    <div className="grid gap-2 ">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <Link href="#" className="ml-auto inline-block text-sm underline">
                                Forgot your password?
                            </Link>
                        </div>
                        <Input type="password" id="password" />
                    </div>
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/signUp" className="underline">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}