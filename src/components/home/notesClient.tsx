import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { NotesCardEvent } from "./notesCardEvent"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useStore } from '../../../store';
import { useState, useEffect } from "react"


export function NotesClient() {

    const { contactIndex } = useStore()
    const [contacts, setContacts] = useState<any[]>([]);
    const selectedContact = contacts[contactIndex];

    useEffect(() => {
        const localContacts = localStorage.getItem('contacts');
        if (localContacts) {
            setContacts(JSON.parse(localContacts));
        }
    }, []);

    return (
        <>
            <section className="flex flex-col gap-2 p-4">
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src="" alt="" />
                        <AvatarFallback>
                            {selectedContact?.name?.slice(0, 2).toUpperCase() || "CN"}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex w-full items-start content-start justify-between">
                        <div>
                            <h1 className="text-base font-medium leading-none">
                                {selectedContact?.name}
                            </h1>
                            <p className="text-sm opacity-60">
                                {selectedContact?.company}
                            </p>
                        </div>
                        <div>
                            {!selectedContact?.events || !selectedContact?.events[0] ? null : <p className="text-xs font-medium opacity-90">Last Action</p>}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div>
                        <p className="text-md font-medium">About</p>
                        <p className="text-xs opacity-60">{selectedContact?.about}</p>
                    </div>
                    <div className="flex gap-4 items-center justify-start">
                        <div>
                            <p className="text-sm font-medium">Phone Number</p>
                            <p className="text-xs opacity-90">
                                {selectedContact?.phone}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-medium">Email</p>
                            <p className="text-xs opacity-90">
                                {selectedContact?.email}
                            </p>
                        </div>

                    </div>

                </div>
            </section>
            <Separator />
            <div className="">
                <ScrollArea className="h-dvh p-4">
                    <div className="flex flex-col w-full gap-4">
                        {!selectedContact?.events || !selectedContact?.events.length ? "Crie sua primeira nota!" :
                            <>
                                {contacts.filter(contact => contact.events && contact.events.length > 0).map((contact) => (
                                    contact.events.map((event:any, eventIndex:any) => (
                                        <NotesCardEvent
                                            key={eventIndex}
                                            eventDescription={event.description}
                                            eventType={event.type}
                                            eventTitle={event.title}
                                            eventDateStart={event.dateStart}
                                            eventDateEnd={event.dateEnd}
                                            createdByUser={event.createdByUser}
                                            created={event.created}
                                        />
                                    ))
                                ))}
                            </>
                        }
                    </div>
                </ScrollArea>
            </div>
        </>
    )
}