"use client";
import React, { useEffect, useState } from "react";


import DataTableMeeting from "@/components/meeting/dataTableMeeting";
import { columns } from "@/components/tanstack-table/columnsMeeting";

import { DialogMeeting } from "@/components/meeting/DialogMeeting";

type Props = {};
const getData = async () => {
	// Perform localStorage action
	const accessToken = localStorage.getItem("accessToken");

	try {
		const res = await fetch(
			"http://localhost:8082/meeting-service/meeting",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${accessToken}	`,
				},
			}
		);
		console.log(res);
		if (!res.ok) {
			throw new Error("Network response was not ok");
		}

		const data = await res.json();
		return data;
	} catch (error) {
		console.error(error);
		return error;
	}
};
const Meeting = (props: Props) => {
  const [meet, setMeet] = React.useState<any>([]);
	useEffect(() => {
		const fetchData = async () => {
			const data = await getData();
			setMeet(
				data.map((meet: any) => {
          const date = new Date(meet.meet_date).toLocaleDateString();
				const time = new Date(meet.meet_date).toLocaleTimeString();
				console.log(time,date);
        
          return {
            meet_title: meet.meet_title,
            meet_description: meet.meet_description,
            meet_date: date,
            meet_time: time,
            created_by: meet.created_by,
          };
        }
      ));
		};
		fetchData();
	}, []);

  console.log(meet)


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
      <DataTableMeeting columns={columns} data={meet} />
    </div>


  );
};

export default Meeting;