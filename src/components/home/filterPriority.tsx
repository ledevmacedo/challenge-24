import {
    File,
    FileDown,
    FileDownIcon,
    FileUp,
    ListFilter,
    PlusCircle,
} from "lucide-react"


import { Button } from "@/components/ui/button"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

type Checked = DropdownMenuCheckboxItemProps["checked"]

export function FilterPriority() {
    const [showHighPriority, setHighPriority] = useState<Checked>()
    const [showMediumPriority, setShowMediumPriority] = useState<Checked>()
    const [showLowPriority, setShowLowPriority] = useState<Checked>()
    return (
        <>
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="h-9 gap-1">
                            <ListFilter className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Priority
                            </span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" >
                        <DropdownMenuLabel>Filter Priority</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem
                            checked={showHighPriority}
                            onCheckedChange={setHighPriority}>
                            High Priority
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                            className="pr-4"
                            checked={showMediumPriority}
                            onCheckedChange={setShowMediumPriority}>
                            Medium Priority
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                            checked={showLowPriority}
                            onCheckedChange={setShowLowPriority}>
                            Low Priority
                        </DropdownMenuCheckboxItem>

                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    )
}