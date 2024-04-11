import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { NotesCardEvent } from "./notesCardEvent"
import { NotesCardContact } from "./notesCardContact"
import { ScrollArea } from "@/components/ui/scroll-area"

export function NotesClient() {
    return (
        <>
            <section className="flex flex-col gap-2 p-4">
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src="" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex w-full items-start content-start justify-between">
                        <div>
                            <h1 className="text-base font-medium leading-none">Marta Macedo</h1>
                            <p className="text-sm opacity-60">Camara de famalicão</p>
                        </div>
                        <div>
                            <p className="text-xs font-medium opacity-90">Last Action</p>
                            <p className="text-xs opacity-60">10/2020</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div>
                        <p className="text-md font-medium">About</p>
                        <p className="text-xs opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nobis numquam quaerat perspiciatis, laborum eum eligendi neque debitis impedit delectus officia in tempore ipsam suscipit quae inventore reprehenderit. Natus, amet!</p>
                    </div>
                    <div className="flex gap-4 items-center justify-start">
                        <div>
                            <p className="text-sm font-medium">Phone Number</p>
                            <p className="text-xs opacity-90">
                                +351 927 466 053
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-medium">Email</p>
                            <p className="text-xs opacity-90">
                                personMail@company.pt
                            </p>
                        </div>

                    </div>

                </div>
            </section>
            <Separator />
            <div className="">
                <ScrollArea className="h-dvh  p-4 ">
                    <div className="flex flex-col w-full gap-4">
                        <NotesCardEvent />
                        <NotesCardContact />
                    </div>
                </ScrollArea>
            </div>
        </>
    )
}


// clientId: "3",
// clientName: "Marta",
// clientCompany: "Guima Events",
// phoneNumber: "951 200 002",
// email: "marta@guimaevents.pt",