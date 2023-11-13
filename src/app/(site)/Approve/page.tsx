import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {};

// Sample data for cards
const cardsData = [
  {
    title: "Archan leave Request",
    description: "Sick leave request",
    duration: "3 Days",
    date: "5 May 2023",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
  },
  {
    title: "Archan leave Request",
    description: "Sick leave request",
    duration: "3 Days",
    date: "5 May 2023",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
  },
  // Add more card data as needed
];

const getLeaveData = async () => {

  // Perform localStorage action
  const accessToken = localStorage.getItem("accessToken");

  try {
      const res = await fetch(
          "http://localhost:8085/leave/leaves",
          {
              method: "GET",
              headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${accessToken}    `,
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

export default function Profile({}: Props) {
  return (
    <>
      <h1 className="mt-[70px] ml-[35px] text-[40px] font-bold">Approve</h1>
      <div className="flex justify-end mr-[30px]">
        <Button className="mr-[12px]">All</Button>
        <Button className="mr-[12px]">Approve</Button>
        <Button className="mr-[12px]">Reject</Button>
      </div>

      <div className="container flex justify-center overflow-scroll h-[615px]">
        <div className="grid grid-cols-3 justify-center ">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              className="w-[250px] h-[350px] mt-[80px] ml-[60px]"
            >
              <CardHeader>
                <CardTitle className="text-start text-[15px]">
                  {card.title}
                </CardTitle>
                <div className="w-full h-[1px] bg-neutral-600"></div>
                <CardDescription className="text-start">
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <h1 className="text-[45px]">{card.duration}</h1>
                  <h5 className="mt-[10px]">{card.date}</h5>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline">Show Dialog</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Details</AlertDialogTitle>
                        <AlertDialogDescription className="text-[black]">
                          <h1>Date Start : {card.date}</h1>
                          <h1>Date End : {card.date}</h1>
                          <h1>LeaveType : Sick</h1>
                          <h1>Notes:</h1>
                          <div className="w-[370px] h-[150px] bg-[grey] overflow-scroll rounded-md">
                            {card.details}
                          </div>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogAction>Approve</AlertDialogAction>
                        <AlertDialogCancel>Reject</AlertDialogCancel>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button type="submit" className="bg-[#64CCC5]">
                      Approve
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-center">
                        Are You Sure ?
                      </AlertDialogTitle>
                    </AlertDialogHeader>
                  <div className="flex justify-center">
                    <AlertDialogFooter>

                        <AlertDialogAction>Accept</AlertDialogAction>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>

                    </AlertDialogFooter>
                  </div>
                  </AlertDialogContent>
                </AlertDialog>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button type="submit" className="bg-[#8D8787]">
                      Reject
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-center">
                        Are You Sure ?
                      </AlertDialogTitle>
                    </AlertDialogHeader>
                  <div className="flex justify-center">
                    <AlertDialogFooter>

                        <AlertDialogAction>Accept</AlertDialogAction>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>

                    </AlertDialogFooter>
                  </div>
                  </AlertDialogContent>
                </AlertDialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
