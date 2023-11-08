import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import Image from "next/image";
import camera from "../../../../public/Camera-Icon-2.png"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


type Props = {};

export default function Profile({}: Props) {
  return (
    <div className="h-screen">
      <div className="p-10">
        <div className="text-4xl font-bold	">Profile</div>
        <hr className="w-30 h-[2px] bg-gray-300 border-0 rounded md:my-4 dark:bg-gray-700"></hr>
      </div>
      <div className="px-10">
        <div className="flex justify-center max-lg:flex-col max-lg:items-center">
          <div className="w-[30%] pr-10 max-lg:w-3/4 max-lg:mb-5">
            <div className="flex flex-col justify-center border-2 border-gray-500 p-5 items-center h-[30em]">
              <div className="relative">
                {/* <Image
                  alt="User Image"
                  width={40}
                  height={50}
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                /> */}
                <img
                  className="rounded-full w-40 h-40"
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="image description"
                />
                {/* <label for="file-input"> */}
                <Image
                  src={camera}
                  alt="Picture of the author"
                  className="rounded-full w-10 h-10 border-black border-1 opacity-70 absolute bottom-0 right-0 cursor-pointer	"
                />
                {/* </label> */}
                {/* <Input id="file-input" type="file"/> */}
              </div>
              <div className="text-center	mt-3">
                <div className="text-2xl font-semibold	">Hello World</div>
                <div className="text-gray-400 mt-1">Developer</div>
                <div className="mt-5">
                  <span className="font-medium">Role:</span> Employee
                </div>
              </div>
            </div>
          </div>
          <div className="w-[70%] border-2 border-gray-500 p-5 max-lg:w-full">
            <div className="grid grid-rows-3 grid-cols-2 gap-x-10">
              <div className="pt-5">
                <p className="mb-2">First Name</p>
                <Input
                  className="border-gray-400 border-2"
                  placeholder="First name"
                  disabled
                  value={"Hello"}
                />
              </div>
              <div className="pt-5">
                <p className="mb-2">Last Name</p>
                <Input
                  className="border-gray-400 border-2 text-black"
                  placeholder="Last name"
                  disabled
                  value={"World"}
                />
              </div>

              <div className="pt-5">
                <p className="mb-2">Phone Number</p>
                <Input
                  className="border-gray-400 border-2"
                  placeholder="Phone Number"
                  disabled
                  value={"Defualt"}
                />
              </div>
              <div className="pt-5">
                <p className="mb-2">Email</p>
                <Input
                  className="border-gray-400 border-2"
                  placeholder="Email"
                  disabled
                  value={"Defualt"}
                />
              </div>
              <div className="pt-5">
                <p className="mb-2">Birthday</p>
                <Input
                  className="border-gray-400 border-2"
                  placeholder="Role"
                  disabled
                  value={"Defualt"}
                />
              </div>
            </div>
            <div className="mt-10 mb-4">
              <Button className="bg-[#64cbc5]">Edit Profile</Button>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[100%] border-2 border-gray-500 p-5 my-10 pb-10">
          <div className="pt-5 flex">
            <Input
              className="border-gray-400 border-2 w-50"
              placeholder="Search..."
            />
            <Select>
              <SelectTrigger className="w-[180px] border-gray-400 border-2 ml-5">
                <SelectValue placeholder="DATE" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px] border-gray-400 border-2 ml-5">
                <SelectValue placeholder="DATE" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* <div className="w-[100%]"> */}
          <div className="flex p-5">
            <div className="bg-red-500 p-10 m-5">
              <div className="text-xl">Project Name</div>
            </div>
            <div className="bg-blue-500 p-10 m-5">
              <div className="text-xl">Project Name</div>
            </div>
            <div className="bg-purple-500 p-10 m-5">
              <div className="text-xl">Project Name</div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
