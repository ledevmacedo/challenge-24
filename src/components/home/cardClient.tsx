import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Badge } from "../ui/badge"
import { useState } from "react"

interface CardProps {
    clietnId: string;
    clientName: string;
    clientCompany: string;
    lastNoteDate: any,
    lastNote: any,
    onClick: any,
}


export function CardClient({ clietnId, clientName, clientCompany, lastNoteDate, lastNote, onClick }: CardProps) {
    // 
    return (
        <>
            <Card
                onClick={onClick}
                className={`cursor-pointer`}>
                <CardContent className="p-3 flex flex-col gap-3">
                    <div className="flex content-center items-center justify-between">
                        <h1 className="text-base font-medium leading-none"> {clientName} </h1>
                        <p className="text-sm opacity-80">
                            {lastNoteDate}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-medium leading-none"> {clientCompany}
                        </p>
                        <p className="text-sm opacity-60">
                            {lastNote}
                            {/* {lastNote.length > 250 ? `${lastNote.substring(0, 250)}...` : lastNote
                            } */}
                        </p>
                    </div>
                    <div className="flex gap-2 justify-start items-center content-center">
                        {/* <Badge variant={"default"}>work</Badge>
                        <Badge variant={"secondary"}>meeting</Badge>
                        <Badge variant={"secondary"}>important</Badge> */}
                    </div>
                </CardContent>
            </Card>
        </>
    )
}