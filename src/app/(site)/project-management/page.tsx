"use client";
import React from 'react'
import TableProjectMain from './TableProjectMain';
import FilterProjectMain from './FilterProjectMain';
type Props = {}
export default function Page({ }: Props) {
  return (
    <div className='justify-center min-h-screen '>
      <h1 className="text-4xl font-bold p-5 ml-5">
        Project Management
      </h1>
      <div className='className="min-h-[35rem] w-4/5 mx-auto mt-10'>
        <FilterProjectMain/>
        <TableProjectMain/>
      </div>
    </div>

  );
}