import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Badge } from "../ui/badge"
import { useState } from "react"
import { Calendar, Clock } from "lucide-react"
import { Separator } from "@/components/ui/separator"

interface cardEventProps {
    created: string,
    eventDateStart: string,
    eventDateEnd: string,
    createdByUser: string,
    eventDescription: string,
    eventTitle: string,
    eventType: string,
    // name: string,

}

// createdByUser: user,
// created: created,
// type: "",
// title: "",
// description: "",
// eventDateStart: "",
// eventDateEnd: ""

export function NotesCardEvent({ eventDescription, eventTitle, eventType, eventDateStart, eventDateEnd, created, createdByUser }: cardEventProps) {
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
                    <p className="text-sm opacity-60">{createdByUser}  - {created} </p>
                </CardContent>
                <Separator className="shadow-md" />
            </Card>
        </>
    )
}