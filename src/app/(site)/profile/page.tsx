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
      <div className="px-10 pb-0.5">
        <div className="flex justify-center max-lg:flex-col max-lg:items-center">
          <div className="w-[35%] pr-10 max-lg:w-3/4 max-lg:mb-5">
            <div className="flex flex-col justify-center border-2 border-gray-500 p-5 items-center h-[25em]">
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
                <Input id="file-input" className="w-3/4 mt-5" type="file"/>
                {/* <label for="file-input"> */}
                {/* <Image
                  src={camera}
                  alt="Picture of the author"
                  className="rounded-full w-10 h-10 border-black border-1 opacity-70 absolute bottom-0 right-0 cursor-pointer	"
                /> */}
                {/* </label> */}
              <div className="text-center	mt-3">
                <div className="text-2xl font-semibold	">Hello World</div>
                <div className="text-gray-400 mt-1">Developer</div>
                <div className="mt-5">
                  <span className="font-medium">Role:</span> Employee
                </div>
              </div>
            </div>
          </div>
          <div className="w-[65%] border-2 border-gray-500 p-5 max-lg:w-full">
            <div className="grid grid-rows-3 grid-cols-2 gap-x-10 ">
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
            <div className="mt-10">
              <Button className="bg-[#64cbc5]">Edit Profile</Button>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[100%] border-2 border-gray-500 p-5 my-10 pb-2 mb-10">
          <div className="pt-5 flex">
            <img
              className="w-8 h-4 m-3 mr-4"
              src="https://media.discordapp.net/attachments/948968777918345216/1172097619976278046/Filter-Icon.png?ex=655f13f9&is=654c9ef9&hm=c90086fdcb194fc11655a427869fe91c09bcde4feb21eab6f0b9275978d513db&=&width=200&height=120"
              alt="image description"
            />
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
                  <SelectLabel>Date</SelectLabel>
                  <SelectItem value="Oldest">Oldest</SelectItem>
                  <SelectItem value="Latest">Latest</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/*  <Select>
              <SelectTrigger className="w-[180px] border-gray-400 border-2 ml-5">
                <SelectValue placeholder="DATE" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Date</SelectLabel>
                  <SelectItem value="Value_1">Value_1</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select> */}
          </div>
          {/* <div className="w-[100%]"> */}
          <div className="flex flex-wrap p-5">
            <div className="shadow-md rounded-sm bg-gray-100 w-[18em] h-[10em] m-5 p-5 relative ">
              <div className="w-20 bg-green-500 text-white text-center absolute top-3 right-5 rounded-sm">
                Active
              </div>
              <div className="text-xl ">Project Name</div>
              <div className="mt-3">
                <div>Date: 2003/11/09 </div>
                <div>Participants: 102 </div>
                <div>Position: UI Designer </div>
              </div>
            </div>

            <div className="shadow-md rounded-sm bg-gray-100 w-[18em] h-[10em] m-5 p-5 relative">
              <div className="w-20 bg-gray-500 text-white text-center absolute top-3 right-5 rounded-sm">
                InActive
              </div>
              <div className="text-xl ">Project Name</div>
              <div className="mt-3">
                <div>Date: 2003/11/09 </div>
                <div>Participants: 102 </div>
                <div>Position: UI Designer </div>
              </div>
            </div>

            <div className="shadow-md rounded-sm bg-gray-100 w-[18em] h-[10em] m-5 p-5 relative">
              <div className="w-20 bg-green-500 text-white text-center absolute top-3 right-5 rounded-sm">
                Active
              </div>
              <div className="text-xl ">Project Name</div>
              <div className="mt-3">
                <div>Date: 2003/11/09 </div>
                <div>Participants: 102 </div>
                <div>Position: UI Designer </div>
              </div>
            </div>

            <div className="shadow-md rounded-sm bg-gray-100 w-[18em] h-[10em] m-5 p-5 relative">
              <div className="w-20 bg-green-500 text-white text-center absolute top-3 right-5 rounded-sm">
                Active
              </div>
              <div className="text-xl ">Project Name</div>
              <div className="mt-3">
                <div>Date: 2003/11/09 </div>
                <div>Participants: 102 </div>
                <div>Position: UI Designer </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
