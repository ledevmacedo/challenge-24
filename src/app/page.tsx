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
import { FiltersSearch } from '@/components/home/filtersSearch';
import { Separator } from "@/components/ui/separator"
import { Plus, PlusCircle } from 'lucide-react';
import { ActionsHeader } from '@/components/home/actionsHeader';
import { FilterPriority } from '@/components/home/filterPriority';
import { FilterDepartment } from '@/components/home/filterDepartment';
import { FilterDateRange } from '@/components/home/filterDateRange';
import { NoteHeader } from '@/components/home/noteHeader';


function Home() {

  return (
    <>
      <div className="p-4 flex flex-col gap-2 items-center justify-center content-center w-full h-dvh">
        <ResizablePanelGroup
          direction="horizontal"
          className=" rounded-lg border"
        >
          <ResizablePanel defaultSize={20}>
            <div className='p-4 min-h-[68px]  max-h-[68px]'>
            </div>
            <Separator />
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">
                <ModeToggle />
              </span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={45}>
            <div className='p-4 min-h-[68px]  max-h-[68px] flex  items-center content-center justify-between'>
              <h1 className='text-xl font-semibold '>Contacts</h1>
              <ActionsHeader />
            </div>
            <Separator />
            <div className=" grid ">
              <div className='p-4 pb-2 flex flex-col gap-2'>
                <FiltersSearch />
                <div className='flex gap-2 w-full justify-start'>
                  <FilterPriority />
                  <FilterDepartment />
                  <FilterDateRange />
                </div>
              </div>
              <ScrollClients />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={25}>
            <div className='w-full p-4 min-h-[68px] max-h-[68px] flex  items-center content-center justify-between'>
              <h1 className='text-xl font-semibold w-full'>Client Notes</h1>
              <NoteHeader />
            </div>
            <Separator />
            <NotesClient />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
}

export default isAuth(Home)