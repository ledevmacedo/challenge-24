"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { PlusCircle } from "lucide-react";
import { SelectDepartment } from "@/components/uiCustom/selectDepartament"

async function createNote() {
    // const filteredStacks = stacks.filter(stack => stack.state);
    const title = ""
}

export function NewNoteDialog() {
    const [title, setTitle] = useState<string>()
    const [description, setDescription] = useState<string>()
    const [toggle, setToggle] = useState<any>()

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
                        <Label htmlFor="title">Department</Label>
                    </div>
                    <div className="w-full flex flex-col flex-wrap gap-2">
                        <SelectDepartment  />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={() => createNote()}>Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}
