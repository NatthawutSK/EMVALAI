"use client";
import React, { useState } from "react";
import Router from "next/router";

import DataTableMeeting from "@/components/meeting/dataTableMeeting";
import { columns } from "@/components/meeting/columnsMeeting";
import { DialogMeeting } from "@/components/meeting/DialogMeeting";

type Props = {};

const Meeting = (props: Props) => {
  const meeting = [
    {
      meet_title: "UI Meeting",
      meet_description: "คุยงานออกแบบ UI",
      meet_date: "11/11/2023",
      meet_time: "13:30",
      created_by: "PPPPPP",
    },
  ]
  return (
    <div className=" h-screen relative gap-5 p-10">
      <div className="text-4xl font-bold p-5 ml-5">Meeting</div>
      <DataTableMeeting columns={columns} data={meeting} />
    </div>


  );
};

export default Meeting;