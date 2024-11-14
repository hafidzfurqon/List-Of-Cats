"use client"

import { useQuery } from "@tanstack/react-query"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { getCats } from "@/client/cat"
import { Cats } from "@/types/cats"



export default function Home() {
  const {data, isLoading, dataUpdatedAt} = useQuery({
    queryKey : ['fetch'],
    queryFn : getCats
  })

  if(isLoading) {
    return <div>loading...</div>
  }



  return (
   <>
  <div className="max-w-5xl mx-auto mt-10">
      <Table>
      <TableCaption>A list of your recent Cats.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="text-right">Detail</TableHead>
        </TableRow>
      </TableHeader>
      {data.slice(0,7).map((cat : Cats) => (
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">{cat._id}</TableCell>
          <TableCell>{cat.title}</TableCell>
          <TableCell><img src={cat.thumbnailUrl} alt={cat.title} /></TableCell>
          <TableCell className="text-right">{cat.description}</TableCell>
          <TableCell className="text-right"><Button>Detail</Button></TableCell>
        </TableRow>
      </TableBody>
        ))}
    </Table>
  </div>

   </>
  )
}
