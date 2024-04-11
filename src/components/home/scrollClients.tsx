import { ScrollArea } from "@/components/ui/scroll-area"
import { CardClient } from "./cardClient"
import { clients } from "../../../db/db"

import { Search, } from "lucide-react"
import { format, formatDistanceToNow } from 'date-fns';
import { Input } from "../ui/input";
import { FiltersHeader } from "./filtersHeader";

export function ScrollClients() {
    return (
        <>
            <ScrollArea className="h-dvh">
                <div className="flex flex-col w-full gap-4">
                    <div className="w-full flex flex-col gap-2">
                        {clients.map((client, index) =>
                            <CardClient key={index}
                                clientCompany={client.clientCompany}
                                clientName={client.clientName}
                                clietnId={client.clientId}
                                lastNote={client.notes?.map(notes => notes.note)}
                                lastNoteDate={client.notes?.map(notes => format(notes.created, 'dd MMM YYY'))}
                            />
                        )}
                    </div>
                </div>
            </ScrollArea>
        </>
    )
}