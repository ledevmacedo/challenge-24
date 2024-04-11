import {
    ListFilter,
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

export function FilterDepartment() {
    const [showErreTechnology, setShowErreTechnology] = useState<Checked>()
    const [showErreBoost, setShowErreBoost] = useState<Checked>()
    const [showErreLRB, setShowErreLRB] = useState<Checked>()
    const [showDesignStation, setShowDesignStation] = useState<Checked>()
    const [showURock, setShowURock] = useState<Checked>()
    const [showErreSetGo, setShowErreSetGo] = useState<Checked>()
    return (
        <>
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="h-9 gap-1">
                            <ListFilter className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Department
                            </span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" >
                        <DropdownMenuLabel>Filter Department</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem
                            checked={showErreTechnology}
                            onCheckedChange={setShowErreTechnology}>
                            Érre Technology
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                            className="pr-4"
                            checked={showErreBoost}
                            onCheckedChange={setShowErreBoost}>
                            Érre Boost
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                            checked={showErreLRB}
                            onCheckedChange={setShowErreLRB}>
                            Érre LRB
                        </DropdownMenuCheckboxItem>

                        <DropdownMenuCheckboxItem
                            checked={showDesignStation}
                            onCheckedChange={setShowDesignStation}>
                            Design Station
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                            checked={showURock}
                            onCheckedChange={setShowURock}>
                            URock
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                            checked={showErreSetGo}
                            onCheckedChange={setShowErreSetGo}>
                            Érre.Set.Go
                        </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    )
}