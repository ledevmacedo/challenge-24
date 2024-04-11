import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Badge } from "../ui/badge"
import { useState } from "react"
import { Calendar, Clock } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function NotesCardEvent() {
    return (
        <>
            <Card className={`cursor-pointer dark:border-none border-none shadow-none`}>
                <CardContent className="p-3 flex flex-col gap-3">
                    <div>
                        <Badge>Meet</Badge>
                    </div>
                    <h1 className="text-md font-medium">Project Presentation</h1>
                    <p className="text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam nisi debitis fuga magni quam obcaecati beatae soluta officiis, expedita natus impedit nobis illo odit error non minima aliquam ipsam sit?</p>
                    <div>
                        <Badge variant={"destructive"}>
                            <span className="flex items-center gap-2">
                                <Calendar size={12} />
                                12 Apr 24
                            </span>
                        </Badge>
                    </div>
                </CardContent>
                <Separator className="shadow-md" />
            </Card>
        </>
    )
}