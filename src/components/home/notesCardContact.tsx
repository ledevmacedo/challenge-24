import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Badge } from "../ui/badge"
import { useState } from "react"
import { Calendar, Clock } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function NotesCardContact() {
    return (
        <>

            <Card className={`cursor-pointer dark:border-none border-none shadow-none`}>
                <CardContent className="p-3 flex flex-col gap-3">
                    <div>
                        <Badge>Note</Badge>
                    </div>
                    <h1 className="text-md font-medium">Request for change to the project</h1>
                    <p className="text-xs">The Customer requests that changes be made to the Landing Page, designated for the responsible departments.</p>
                    <div className="flex gap-2 items-center">
                        <Badge variant={"secondary"}>
                            <span className="flex items-center gap-2">
                                Érre Boost
                            </span>
                        </Badge>
                        <Badge variant={"secondary"}>
                            <span className="flex items-center gap-2">
                                Design Station
                            </span>
                        </Badge>
                    </div>
                    <div>

                    </div>
                </CardContent>
                <Separator className="shadow-md" />
            </Card>
        </>
    )
}