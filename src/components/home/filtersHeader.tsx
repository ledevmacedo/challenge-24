import { Search, } from "lucide-react"
import { format, formatDistanceToNow } from 'date-fns';
import { Input } from "../ui/input";
export function FiltersHeader() {
    return (
        <>
            <div className="w-full relative ml-auto flex-1 md:grow-0">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-lg bg-background pl-8"
                />
            </div>
        </>
    )
}