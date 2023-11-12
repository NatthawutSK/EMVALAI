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

export interface Deduction {
  title: string;
  amount: number;
  percent: number;
  salary_min: number;
  salary_max: number;
  employee: number;
  amount_cost: number;
}

interface DeductionProps {
  data: Deduction[];
}

const mockData: Deduction[] = [
  {
    title: "facilities",
    amount: 1000,
    percent: 0,
    salary_min: 0,
    salary_max: 0,
    employee: 1200,
    amount_cost: 1200000,
  },
  {
    title: "Social contributions",
    amount: 1650,
    percent: 5,
    salary_min: 0,
    salary_max: 1650,
    employee: 0,
    amount_cost: 0,
  },
  {
    title: "Social contributions",
    amount: 35000,
    percent: 5,
    salary_min: 15000,
    salary_max: 0,
    employee: 1200,
    amount_cost: 900000,
  },
];

type Props = {};

export default function Deduction({ data = mockData }: DeductionProps) {
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<number>();
  const [percent, setPercent] = useState<number>();
  const [min, setMin] = useState<number>();
  const [max, setMax] = useState<number>();

  const handleApplyBtn = () => {
    console.log("Apply")
  };

  return (
    <div className="py-10 pl-2 pr-4">
      <div className="flex">
        <div className="w-[35%] border-2 border-gray-500 rounded-md relative">
          <div className="flex items-center flex-col mt-5 mb-5 font-bold">
            Deductions Form
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
              Salary Range:
            </div>
          </div>
          <div className="grid grid-row-1 grid-cols-2 px-10 gap-x-5">
            <div>
              <p className="text-[10px] text-gray-400">MIN.</p>
              <Input
                className="border-gray-400 border-2"
                placeholder="0 ฿"
                value={min}
                onChange={(e) => setMin(parseFloat(e.target.value))}
              />
            </div>
            <div>
              <p className="text-[10px] text-gray-400">MAX.</p>
              <Input
                className="border-gray-400 border-2"
                placeholder="0 ฿"
                value={max}
                onChange={(e) => setMax(parseFloat(e.target.value))}
              />
            </div>
          </div>

          <div className="flex justify-end items-end p-5">
            <Button className="bg-[#9163D1] " onClick={handleApplyBtn}>
              Apply
            </Button>
          </div>
        </div>

        <div className="w-[65%] border-2 border-gray-500 rounded-md p-2 ml-5">
          <div>
            <Table className="font-sm">
              {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">TITLE</TableHead>
                  <TableHead className="text-right">AMOUNTS</TableHead>
                  <TableHead className="text-right">PERCENT</TableHead>
                  <TableHead className="text-right">RANGE</TableHead>
                  <TableHead className="text-right">EMPLOYEE</TableHead>
                  <TableHead className="text-right">AMOUNT COST</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data ? (
                  data.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-bold">{row.title}</TableCell>
                      <TableCell className="text-right">
                        {row.amount} ฿
                      </TableCell>
                      <TableCell className="text-right">
                        {row.percent} %
                      </TableCell>
                      <TableCell className="text-right">
                        {row.salary_min === 0 && row.salary_max === 0
                          ? "0"
                          : row.salary_min === 0
                          ? `Up to ${row.salary_max}`
                          : row.salary_max === 0
                          ? `From ${row.salary_min}`
                          : `${row.salary_min} - ${row.salary_max}`}
                      </TableCell>
                      <TableCell className="text-right">
                        {row.employee}
                      </TableCell>
                      <TableCell className="text-right">
                        {row.amount_cost} ฿
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6}>No data available</TableCell>
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

