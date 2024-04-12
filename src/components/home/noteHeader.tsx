import { NotebookPen, Trash2, FileDown, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { NewNoteDialog } from "./notes/newNoteDialog";
import { useState, useEffect } from "react";


export function NoteHeader() {
    const [contacts, setContacts] = useState<any[]>([]);

    useEffect(() => {
        const localContacts = localStorage.getItem('contacts');
        if (localContacts) {
            setContacts(JSON.parse(localContacts));
        }
    }, []);
    return (
        <>
            {/* 
                Editar cliente
                Excluir cliente
                */}
            <div className="ml-auto flex items-center gap-2">
                <NewNoteDialog />

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" className="p-2">
                                <NotebookPen size={20} />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Edit Client</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" className="p-2">
                                <Trash2 size={20} />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Delete Client</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <span className="ml-6">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" className="p-2">
                                    <FileDown size={20} />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Export Client (JSON)</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </span>
            </div>
        </>
    )
}