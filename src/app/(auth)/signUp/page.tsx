"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ModeToggle } from "@/components/modeToggle"
export default function SignUp() {
    return (
        <>
            <div className="flex flex-col items-center justify-center content-center h-dvh">
                <ModeToggle />
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Sign Up</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your information to create an account
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="first-name">First name</Label>
                            <Input id="first-name" placeholder="Nuno" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="last-name">Last name</Label>
                            <Input id="last-name" placeholder="Silva" required />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="mail@mail.com" />
                    </div>

                    <div className="grid gap-2 ">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" />
                    </div>
                    <Button type="submit" className="w-full">
                        Create an account
                    </Button>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/signIn" className="underline">
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}