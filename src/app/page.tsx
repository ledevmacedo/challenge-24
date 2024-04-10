"use client";
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/modeToggle";
import isAuth from '@/components/isAuth';
import { isAuthenticated } from '../../utils/Auth';


function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/check-authentication-status')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>


  return (
    <>
      <div className="p-4 flex flex-col gap-2 items-center justify-center content-center w-full">
        <div className="flex gap-2 items-center">
          <ModeToggle />
          <Button>Click me</Button>
        </div>
        <h1 className='text-4xl p-4 bg-emerald-500'>
          {JSON.stringify(data)}
        </h1>

        <p className='text-4xl p-4 bg-red-500'>{JSON.stringify(isAuthenticated)} </p>

      </div>
    </>
  );
}

export default isAuth(Home)
