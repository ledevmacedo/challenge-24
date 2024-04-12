"use client"
import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { PlusCircle } from "lucide-react";



export function NewContactDiaolog() {
    const [user, setUser] = useState<string>('');

    useEffect(() => {
        const userIdLocal = localStorage.getItem('userId');
        if (userIdLocal !== null) {
            setUser(userIdLocal.toString());
        }
    }, []);

    const [name, setName] = useState<string>();
    const [company, setCompany] = useState<string>();
    const [about, setAbout] = useState<string>();
    const [phone, setPhone] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [created, setCreated] = useState<Date>(new Date());
    const [errorName, setErrorName] = useState<string>('');
    const [errorCompany, setErrorCompany] = useState<string>('');
    const [errorAbout, setErrorAbout] = useState<string>('');
    const [errorPhone, setErrorPhone] = useState<string>('');
    const [errorEmail, setErrorEmail] = useState<string>('');



    const createNewUser = () => {
        let hasError = false;

        if (!name) {
            setErrorName('* Name is required');
            hasError = true;
        } else {
            setErrorName('');
        }

        if (!company) {
            setErrorCompany('* Company Name is required');
            hasError = true;
        } else {
            setErrorCompany('');
        }

        if (!phone) {
            setErrorPhone('* Phone Number is required');
            hasError = true;
        } else {
            setErrorPhone('');
        }

        if (!about) {
            setErrorAbout('* About is required');
            hasError = true;
        } else {
            setErrorAbout('');
        }

        if (!email) {
            setErrorEmail('* Email is required');
            hasError = true;
        } else {
            setErrorEmail('');
        }

        if (hasError) {
            return;
        }
        const contactsData = {
            name: name,
            company: company,
            about: about,
            email: email,
            created: new Date().toISOString(),
            notes: [
                {
                    createdByUser: user,
                    created: created,
                    noteTitle: "Contact created",
                    note: "",
                }
            ],
            events: [
                {
                    name: "",
                    created: created,
                    eventType: "",
                    eventTitle: "",
                    eventDescription: "",
                    eventDateStart: "",
                    eventDateEnd: "",
                }
            ]
        };
        const existingContacts = JSON.parse(localStorage.getItem('contacts') || '[]');

        existingContacts.push(contactsData);

        localStorage.setItem('contacts', JSON.stringify(existingContacts));
    };



    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" className="h-7 gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Add Contact
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">

                <DialogHeader>
                    <DialogTitle>Create a new contact</DialogTitle>
                    <DialogDescription>
                        Inclua informações sobre seu contato
                    </DialogDescription>
                </DialogHeader>
                <form  className="flex flex-col gap-4">
                    <div className="grid gap-2 ">

                        <div className="flex flex-col items-start">
                            <Label htmlFor="name">Name</Label>
                        </div>
                        <div>
                            <Input
                                className={`${errorName ? "border-2 border-red-500" : ""}`}
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text" id="name" />
                            <p className="text-xs pt-1 text-red-500">{errorName}</p>
                        </div>
                    </div>

                    <div className="grid gap-2 ">
                        <div className="flex items-center">
                            <Label htmlFor="company">Company</Label>
                        </div>
                        <div>
                            <Input
                                className={`${errorCompany ? "border-2 border-red-500" : ""}`}
                                required
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                type="text" id="company" />
                            <p className="text-xs pt-1 text-red-500">{errorCompany}</p>
                        </div>
                    </div>

                    <div className="grid gap-2 ">
                        <div className="flex items-center">
                            <Label htmlFor="about">About</Label>
                        </div>
                        <div>
                            <Textarea
                                className={`${errorAbout ? "border-2 border-red-500" : ""}`}
                                required
                                value={about}
                                onChange={(e) => setAbout(e.target.value)}
                                id="about"
                            />
                            <p className="text-xs pt-1 text-red-500">{errorAbout}</p>
                        </div>

                    </div>
                    <div className="grid gap-2 ">
                        <div className="flex items-center">
                            <Label htmlFor="phone">phone</Label>
                        </div>
                        <div>
                            <Input
                                className={`${errorPhone ? "border-2 border-red-500" : ""}`}
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="number" id="phone" />
                            <p className="text-xs pt-1 text-red-500">{errorPhone}</p>
                        </div>
                    </div>
                    <div className="grid gap-2 ">
                        <div className="flex items-center">
                            <Label htmlFor="email">email</Label>
                        </div>
                        <div>
                            <Input
                                className={`${errorEmail ? "border-2 border-red-500" : ""}`}
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email" id="email" />
                            <p className="text-xs pt-1 text-red-500">{errorEmail}</p>
                        </div>
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
                </form>
                <DialogFooter>
                    <Button
                        type="submit" onClick={createNewUser}>Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}
