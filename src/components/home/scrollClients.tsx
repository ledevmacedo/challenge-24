import { ScrollArea } from "@/components/ui/scroll-area"
import { CardClient } from "./cardClient"
import { clients } from "../../../db/db"
import { format } from 'date-fns';
import { useState, useEffect } from "react";

import { useStore } from '../../../store';
export function ScrollClients() {
    const { contactIndex, setContactIndex } = useStore()
    const [contacts, setContacts] = useState<any[]>([]);

    const handleSetIndex = (index: number) => {
        setContactIndex(index);
    };

    useEffect(() => {
        const localContacts = localStorage.getItem('contacts');
        if (localContacts) {
            setContacts(JSON.parse(localContacts));
        }
    }, []);



    return (
        <>
            <ScrollArea className="h-dvh p-4">
                <div className="flex flex-col w-full gap-4">
                    {/* Criar um botão que altera entre uma */}
                    <div className="w-full flex flex-col gap-2">
                        {contacts.map((contact, index) =>
                            <CardClient
                                isActive={contactIndex == index ? "bg-zinc-100 border-0 dark:bg-zinc-900 transi transition-colors" : ""}
                                key={index}
                                onClick={() => handleSetIndex(index)}
                                clientCompany={contact.company}
                                clientName={contact.name}
                                clietnId={contact.id}
                                lastNote={contact.notes?.map((notes: { note: any; }) => notes.note)}
                                lastNoteDate={contact.notes?.map((notes: { created: any; }) => format(notes.created, 'dd MMM yyy'))}
                            />
                        )}
                    </div>
                </div>
            </ScrollArea>
        </>
    )
}