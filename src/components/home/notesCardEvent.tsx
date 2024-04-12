import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Badge } from "../ui/badge"
import { useState } from "react"
import { Calendar, Clock } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { format } from "date-fns"
interface cardEventProps {
    created: string,
    eventDateStart: any,
    eventDateEnd: any,
    createdByUser: string,
    eventDescription: string,
    eventTitle: string,
    eventType: string,
}
export function NotesCardEvent({ eventDescription, eventTitle, eventType, eventDateStart, eventDateEnd, created, createdByUser }: cardEventProps) {
    const createdFormat = format(new Date(created), 'dd MMM yyy');

    return (
        <>
            <Card className={`cursor-pointer dark:border-none border-none shadow-none`}>
                <CardContent className="p-3 flex flex-col gap-3">
                    <div>
                        <Badge>{eventType}</Badge>
                    </div>
                    <h1 className="text-md font-medium"> {eventTitle} </h1>
                    <p className="text-xs"> {eventDescription} </p>
                    <div>
                        {eventDateStart ?
                            <Badge variant={"destructive"}>
                                <span className="flex items-center gap-2">
                                    <Calendar size={12} />
                                    {`${eventDateStart} ${eventDateEnd ? `to  ${eventDateEnd}` : ""}`}
                                </span>
                            </Badge>
                            : null}
                    </div>
                    <p className="text-sm opacity-60">{createdByUser} - {createdFormat} </p>
                </CardContent>
                <Separator className="shadow-md" />
            </Card>
        </>
    )
}