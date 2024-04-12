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
import { NewContactDiaolog } from "./contacts/newContactDialog"

type Checked = DropdownMenuCheckboxItemProps["checked"]

export function ActionsHeader() {
    const [showStatusBar, setShowStatusBar] = useState<Checked>(true)
    const [showActivityBar, setShowActivityBar] = useState<Checked>(false)
    const [showPanel, setShowPanel] = useState<Checked>(false)
    return (
        <>
            <div className="ml-auto flex items-center gap-2">
                <Button size="sm" variant="outline" className="h-7 gap-1">
                    <FileDown className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Export all contacts
                    </span>
                </Button>
                <Button size="sm" variant="outline" className="h-7 gap-1">
                    <FileUp className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Import contacts
                    </span>
                </Button>
                <NewContactDiaolog />
            </div>

        </>
    )
}