import { Search, } from "lucide-react"
import { format, formatDistanceToNow } from 'date-fns';
import { Input } from "../ui/input";


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
export function FiltersSearch() {
    const [showLastContact, setShowLastContact] = useState<Checked>(true)
    const [showUpcomingEvent, setShowUpcomingEvent] = useState<Checked>(false)
    const [showPanel, setShowPanel] = useState<Checked>(false)
    return (
        <>
            <div className="w-full flex flex-col gap-2 items-center justify-center content-center">
                <div className="w-full relative ml-auto md:grow-0">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search..."
                        className="w-full rounded-lg bg-background pl-8"
                    />
                </div>
            </div>
        </>
    )
}