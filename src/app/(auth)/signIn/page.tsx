"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ModeToggle } from "@/components/modeToggle"
import { useState } from "react"
import { useRouter } from 'next/navigation'

export default function SignIn() {
    const router = useRouter();
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const handleSignIn = async () => {
        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                router.push('/');
            } else {
                console.error("Login failed");
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };
    return (
        <>
            <div className="flex flex-col items-center justify-center content-center h-dvh">
                <ModeToggle />
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Sign In</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your email below to login to your account
                        </p>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" id="email" placeholder="mail@mail.com" />
                    </div>

                    <div className="grid gap-2 ">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <Link href="#" className="ml-auto inline-block text-sm underline">
                                Forgot your password?
                            </Link>
                        </div>
                        <Input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password" id="password" />
                    </div>
                    <Button
                        onClick={handleSignIn}
                        type="submit" className="w-full">
                        Sign In
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