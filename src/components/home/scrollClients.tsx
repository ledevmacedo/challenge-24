import { ScrollArea } from "@/components/ui/scroll-area"
import { CardClient } from "./cardClient"
import { clients } from "../../../db/db"
import { format } from 'date-fns';
import { useState, useEffect } from "react";
export function ScrollClients() {
    const [contacts, setContacts] = useState<any[]>([]);

    useEffect(() => {

        const localContacts = localStorage.getItem('contacts');
        if (localContacts) {
            setContacts(JSON.parse(localContacts));
        }
    }, []);
    return (
        <>
            <ScrollArea className="h-dvh p-4">
                <div className="flex flex-col w-full gap-4"
                >
                    {/* Criar um botão que altera entre uma */}
                    <div className="w-full flex flex-col gap-2">
                        {contacts.map((contact, index) =>
                            <CardClient key={index}
                                clientCompany={contact.company}
                                clientName={contact.name}
                                clietnId={contact.id}
                                lastNote="ola mundo"
                                lastNoteDate="10/10/2023"
                                // lastNote={contact.notes?.map(notes => notes.note)}
                                // lastNoteDate={contact.notes?.map(notes => format(notes.created, 'dd MMM yyy'))}
                            />
                        )}
                    </div>
                </div>
            </ScrollArea>
        </>
    )
}