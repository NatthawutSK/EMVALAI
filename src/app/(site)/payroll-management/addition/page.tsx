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

  const handleApplyBtn = () => {
    console.log("Apply");
  };

  const handleEmpSelected = (value: string | null) => {
    setEmployee(value);
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
                  <SelectItem value="12">12 Pre Au</SelectItem>
                  <SelectItem value="13">13 Pre Au</SelectItem>
                  <SelectItem value="14">14 Pre Au</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end items-end p-5">
            <Button className="bg-[#56BCD8] " onClick={handleApplyBtn}>
              Apply
            </Button>
          </div>
        </div>

        <div className="w-[65%] border-2 border-gray-500 p-2 ml-5">
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
                {data ? (
                  data.map((row, index) => (
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
            {/* <TableBody>
                <TableRow>
                  <TableCell className="font-bold w-[200px]">
                    Bonus For Au
                  </TableCell>
                  <TableCell className="text-right">150000 ฿</TableCell>
                  <TableCell className="text-right">1</TableCell>
                  <TableCell className="text-center w-[200px]">
                    12 Pre AU
                  </TableCell>
                  <TableCell className="text-right">2000 ฿</TableCell>
                </TableRow>
              </TableBody> */}
          </div>
        </div>
      </div>
    </div>
  );
}

