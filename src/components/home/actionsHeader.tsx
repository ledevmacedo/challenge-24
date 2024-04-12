import { FileDown, FileUp, } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { useState, useEffect } from "react"
import { NewContactDiaolog } from "./contacts/newContactDialog"


export function ActionsHeader() {
    const [contacts, setContacts] = useState<any>([]);

    const getContacts = () => {
        const contactsToString = localStorage.getItem('contacts');
        if (contactsToString) {
            const parsedContacts = JSON.parse(contactsToString) as any;
            setContacts(parsedContacts);
        }
    };

    const downloadContacts = () => {
        const contactsString = JSON.stringify(contacts);
        const blob = new Blob([contactsString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'contacts.json';
        link.click();
        URL.revokeObjectURL(url);
    };

    useEffect(() => {
        getContacts();
    }, []);
    return (
        <>
            <div className="ml-auto flex items-center gap-2">
                <Button size="sm" variant="outline" className="h-7 gap-1">
                    <FileDown className="h-3.5 w-3.5" />
                    <span
                        onClick={downloadContacts}
                        className="sr-only sm:not-sr-only sm:whitespace-nowrap">
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