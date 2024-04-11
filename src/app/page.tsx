"use client";
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/modeToggle";
import isAuth from '@/components/isAuth';
import { isAuthenticated } from '../../utils/Auth';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollClients } from '@/components/home/scrollClients';
import { NotesClient } from '@/components/home/notesClient';
import { FiltersHeader } from '@/components/home/filtersHeader';
import { Separator } from "@/components/ui/separator"

//
function Home() {
  // let token
  // token = localStorage.getItem("returnName")

  // const [sessionToken, setSessionToken] = useState(token)
  return (
    <>
      <div className="p-4 flex flex-col gap-2 items-center justify-center content-center w-full h-dvh">
        <ResizablePanelGroup
          direction="horizontal"
          className=" rounded-lg border"
        >
          <ResizablePanel defaultSize={20}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">
                <ModeToggle />
              </span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={45}>
            <div className="p-4 grid gap-4">
              <FiltersHeader />
              <ScrollClients />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={25}>
            <NotesClient />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
}

export default isAuth(Home)

// const [data, setData] = useState(null)
// const [isLoading, setLoading] = useState(true)


// useEffect(() => {
//   fetch('/api/check-authentication-status')
//     .then((res) => res.json())
//     .then((data) => {
//       setData(data)
//       setLoading(false)
//     })
// }, [])

// if (isLoading) return <p>Loading...</p>
// if (!data) return <p>No profile data</p>