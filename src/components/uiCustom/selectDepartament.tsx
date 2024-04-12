import {
    ListFilter, ListTodo,
} from "lucide-react"


import { Button } from "@/components/ui/button"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { Badge } from "../ui/badge"
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

export function SelectDepartment({ sendStates }: any) {
    const [showErreTechnology, setShowErreTechnology] = useState<Checked>()
    const [showErreBoost, setShowErreBoost] = useState<Checked>()
    const [showErreLRB, setShowErreLRB] = useState<Checked>()
    const [showDesignStation, setShowDesignStation] = useState<Checked>()
    const [showURock, setShowURock] = useState<Checked>()
    const [showErreSetGo, setShowErreSetGo] = useState<Checked>()

    const countStates = [
        showErreTechnology,
        showErreBoost,
        showErreLRB,
        showDesignStation,
        showURock,
        showErreSetGo];
    const countStatesValue = countStates.reduce((sum, countStates) => sum + (countStates ? 1 : 0), 0);

    return (
        <>
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="h-9 gap-1">
                            <ListTodo className="h-3.5 w-3.5" />
                            Select departament
                            {countStatesValue ? <Badge className="text-[10px] py-0 px-2 ml-2" variant="secondary" >
                                {countStatesValue}
                            </Badge> : null}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" >
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