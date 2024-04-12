"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { PlusCircle } from "lucide-react";
import { BadgeCheck } from "@/components/uiCustom/badgeCheck";
import { Badge } from "@/components/ui/badge"

const departamentsList = [
    "Érre Boost",
    "Design Station",
    "Design Boost"
]

export function NewNoteDialog() {
    const [title, setTitle] = useState<string | undefined>();
    const [description, setDescription] = useState<string | undefined>();

    function handleSubmit() {
        localStorage.setItem
        // let token
        // token = localStorage.getItem("returnName")

        // const [sessionToken, setSessionToken] = useState(token)
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" variant={"secondary"} className="h-7 gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        New Note
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>New Note</DialogTitle>
                    <DialogDescription>
                        Descreva sua ultima ação com este cliente ou inclua ações futuras.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-2 ">
                    <div className="flex items-center">
                        <Label htmlFor="title">Title</Label>
                    </div>
                    <Input
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text" id="title" />
                </div>

                <div className="grid gap-2 ">
                    <div className="flex items-center">
                        <Label htmlFor="title">Description</Label>
                    </div>
                    <Textarea
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        id="description"
                    />
                </div>

                <div className="grid gap-2 ">
                    <div className="flex items-center">
                        {/* <Label htmlFor="title">Department</Label> */}
                    </div>
                    <div className="flex items-center gap-2 flex-wrap justify-start">
                        {/* {departamentsList.map((item, index) =>
                            <BadgeCheck
                                key={index} label={item}
                                onStateChange={handleSendDepartaments}>
                            </BadgeCheck>
                        )} */}
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSubmit}>Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}
