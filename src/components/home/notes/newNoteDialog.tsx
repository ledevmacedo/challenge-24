"use client"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { PlusCircle } from "lucide-react";
import { BadgeCheck } from "@/components/uiCustom/badgeCheck";
import { Badge } from "@/components/ui/badge"
import { useStore } from '../../../../store';


const departamentsList = [
    "Érre Boost",
    "Design Station",
    "Design Boost"
]

export function NewNoteDialog() {
    const { contactIndex } = useStore()
    const [user, setUser] = useState<string>(''); ~

        useEffect(() => {
            const userIdLocal = localStorage.getItem('returnName');
            if (userIdLocal !== null) {
                setUser(userIdLocal.toString());
            }
        }, []);

    const [title, setTitle] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [type, setType] = useState<string>();
    const [createdBy, setCreatedBy] = useState<any>(user)
    const [dateStart, setDateStart] = useState<Date>()
    const [dateEnd, setDateEnd] = useState<Date>()


    const createNewEvent = () => {
        const newEvent = {
            createdByUser: user,
            created: new Date().toISOString(),
            type: type,
            title: title,
            description: description,
            dateStart: dateStart ? dateStart.toISOString() : "",
            dateEnd: dateEnd ? dateEnd.toISOString() : ""
        };

        const existingContacts = JSON.parse(localStorage.getItem('contacts') || '[]');

        if (existingContacts[contactIndex] && !existingContacts[contactIndex].events) {
            existingContacts[contactIndex].events = [];
        }

        existingContacts[contactIndex].events.push(newEvent);

        localStorage.setItem('contacts', JSON.stringify(existingContacts));
    };

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
                        <Label htmlFor="type">Type</Label>
                    </div>
                    <Input
                        required
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        type="text" id="type" />
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

                <DialogFooter>
                    <Button type="submit" onClick={createNewEvent}>Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}
