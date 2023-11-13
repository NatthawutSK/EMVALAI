"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface Addition {
  title: string;
  amount: number;
  percent: number;
  employee: string;
  amount_cost: number;
}

interface AdditionProps {
  data: Addition[];
}

const mockData: Addition[] = [
  {
    title: "Bonus Chief Project",
    amount: 10000,
    percent: 20,
    employee: "12 Pre Au",
    amount_cost: 2000,
  },
  {
    title: "Bonus Monthly",
    amount: 3000,
    percent: 100,
    employee: "13 Pre Au",
    amount_cost: 3000,
  },
  {
    title: "Bonus Execellent Work",
    amount: 50000,
    percent: 10,
    employee: "14 Pre Au",
    amount_cost: 5000,
  },
];

type Props = {};

    export default function Additions({ data = mockData }: AdditionProps) {
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<number>();
  const [percent, setPercent] = useState<number>();
  const [employee, setEmployee] = useState<string | null>(null);

  const handleEmpSelected = (value: string | null) => {
    setEmployee(value);
  };

  const getAddition = async () => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const res = await fetch("http://localhost:3001/addition_info", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      setAddition(data.addition);
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const [additionInfo, setAddition] = React.useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAddition();

        console.log(data);
        if (!Array.isArray(data.addition)) {
          throw new Error("Data is not an array");
        }

        const processedData = data.addition.map((add: any) => ({
          title: add.addition_title,
          amount: add.addition_amount,
          percent: add.percent,
          employee: add.addition_name,
          amount_cost: add.addition_amount * (add.percent / 100),
        }));

        setAddition(processedData);
        console.log("useEffect In Deduction-> ", processedData);
      } catch (error) {
        console.error("Error fetching position:", error);
      }
    };

    fetchData();
  }, []);

  const insertAddition = async (title: any,name: any,amount: any,percent: any,) => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const res = await fetch("http://localhost:3001/insert_addition", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          title: title,
          name: name,
          amount: amount,
          percent: percent,
        }),
      });
      window.location.reload();
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

  const handleApplyBtn = async (
    title: any,
    name: any,
    amount: any,
    percent: any,
  ) => {
    console.log("ON CLICK BTN -", title, amount, percent);
    try {
      const insertData = await insertAddition(
        title,
        name,
        amount,
        percent,
      );
      console.log("Inserted data:", insertData);
    } catch (error) {
      console.error("Error updating salary base:", error);
    }
  };

  return (
    <div className="py-10 pl-2 pr-4">
      <div className="flex">
        <div className="w-[35%] border-2 border-gray-500 rounded-md relative">
          <div className="flex items-center flex-col mt-5 mb-5 font-bold">
            Addition Form
          </div>
          <div className="grid grid-cols-2 grid-row-4 pb-5 gap-y-4 pr-20 pt-5">
            <div className="flex justify-self-end items-center font-medium pr-6">
              Title:
            </div>
            <Input
              className="border-gray-400 border-2 w-40 text-left"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ textAlign: "left" }}
            />

            <div className="flex justify-self-end items-center font-medium pr-6">
              Amount:
            </div>
            <Input
              className="border-gray-400 border-2 w-32 text-left"
              placeholder="0 ฿"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              style={{ textAlign: "left" }}
            />

            <div className="flex justify-self-end items-center font-medium pr-6">
              Percent:
            </div>
            <Input
              className="border-gray-400 border-2 w-32 text-left"
              placeholder="0 %"
              value={percent}
              onChange={(e) => setPercent(parseFloat(e.target.value))}
              style={{ textAlign: "left" }}
            />

            <div className="flex justify-center items-center font-medium ">
              Employee:
            </div>
          </div>
          <div>
            <Select onValueChange={handleEmpSelected}>
              <SelectTrigger className=" border-gray-400 border-2 ml-5 w-5/6">
                <SelectValue placeholder="EMPLOYEE" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Employee</SelectLabel>
                  <SelectItem value="1 Fname Lname">1 Fname Lname</SelectItem>
                  <SelectItem value="2 Fname Lname">2 Fname Lname</SelectItem>
                  <SelectItem value="3 Fname Lname">3 Fname Lname</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end items-end p-5">
            <Button
              className="bg-[#56BCD8] "
              onClick={() => handleApplyBtn(title, employee, amount, percent)}
            >
              Apply
            </Button>
          </div>
        </div>

        <div className="w-[65%] border-2 border-gray-500 p-2 ml-5 rounded-md">
          <div>
            <Table className="font-sm">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">TITLE</TableHead>
                  <TableHead className="text-right">AMOUNTS</TableHead>
                  <TableHead className="text-right">PERCENT</TableHead>
                  <TableHead className="text-center w-[200px]">
                    EMPLOYEE
                  </TableHead>
                  <TableHead className="text-right">AMOUNT COST</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {additionInfo ? (
                  additionInfo.map((row: any, index: any) => (
                    <TableRow key={index}>
                      <TableCell className="font-bold w-[200px]">
                        {row.title}
                      </TableCell>
                      <TableCell className="text-right">
                        {row.amount} ฿
                      </TableCell>
                      <TableCell className="text-right">
                        {row.percent} %
                      </TableCell>
                      <TableCell className="text-center w-[200px]">
                        {row.employee}
                      </TableCell>
                      <TableCell className="text-right">
                        {row.amount_cost} ฿
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5}>No data available</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

