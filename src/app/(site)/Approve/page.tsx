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
  } from "@/components/ui/alert-dialog"

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

export default function Profile({}: Props) {
  return (
    <>
      <h1 className="mt-[70px] ml-[35px] text-[40px] font-bold">Approve</h1>
      <div className="flex justify-end mr-[30px]">
        <Button className="mr-[12px]">Approve</Button>
        <Button className="mr-[12px]">Reject</Button>
      </div>
      <div className="container	flex justify-center overflow-scroll	 h-[615px]">
        <div className="grid grid-cols-3 justify-center	">
          <Card className="w-[250px] mt-[80px] ml-[60px]">
            <CardHeader>
              <CardTitle className="text-start	text-[15px]">
                Archan leave Request
              </CardTitle>
              <div className="w-full h-[1px] bg-neutral-600"></div>
              <CardDescription className="text-start">
                Sick leave request
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <h1 className="text-[45px]">3 Days</h1>
                <h5 className="mt-[10px]">5 may 2023</h5>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="mt-[10px]">View Details</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle className="mb-[3px] text-[40px]">
                        Details
                      </DialogTitle>
                    </DialogHeader>
                    <div className="text-[20px]">
                      <p>
                        <span className="font-bold">Date Start:</span> 3 may
                      </p>
                      <p className=" mt-[15px]">
                        <span className="font-bold">Date End:</span> 3 may
                      </p>
                      <p className=" mt-[15px]">
                        <span className="font-bold">Duration:</span> 1 Day
                      </p>
                      <p className=" mt-[15px] font-bold">Notes</p>
                      <div className="w-[370px] h-[150px] bg-[grey] overflow-scroll rounded-md">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusamus dicta, unde, possimus deserunt corrupti
                        maiores fugit, sit rerum laboriosam eligendi ipsum
                        explicabo illum dolorum accusantium similique est
                        ducimus animi. Animi. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Dolorum sint laboriosam
                        corporis aspernatur, autem perspiciatis, perferendis ea
                        nam tenetur unde assumenda. Ab doloribus, mollitia culpa
                        laboriosam nemo ut ullam reiciendis.
                      </div>
                      {/* <h1 className="mt-[10px] font-bold">Evidence:</h1> */}
                    </div>
                    <div className="flex justify-center">
                      <DialogFooter>
                        <Button type="submit" className="bg-[#64CCC5]">
                          Accept
                        </Button>
                        <Button type="submit" className="bg-[#8D8787]">
                          Decline
                        </Button>
                      </DialogFooter>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-[#64CCC5]">Accept</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <div className="text-center">
                      <DialogTitle className="mb-[10px]">Caution</DialogTitle>
                      <DialogDescription>Are you sure ?</DialogDescription>
                    </div>
                  </DialogHeader>
                  <div className="flex justify-center">
                    <DialogFooter>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button type="submit">Accept</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <div className="text-center">
                              <DialogTitle className="mb-[10px]">
                                Execute Completed
                              </DialogTitle>
                            </div>
                          </DialogHeader>
                          <Button>OK</Button>
                        </DialogContent>
                      </Dialog>
                      <Button type="submit">Cancel</Button>
                    </DialogFooter>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-[#8D8787]">Decline</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <div className="text-center">
                      <DialogTitle className="mb-[10px]">Caution</DialogTitle>
                      <DialogDescription>
                        When you press "Accept" ...
                      </DialogDescription>
                    </div>
                  </DialogHeader>
                  <div className="flex justify-center">
                    <DialogFooter>
                      <Button type="submit">Accept</Button>
                      <Button type="submit">Cancel</Button>
                    </DialogFooter>
                  </div>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>

          <Card className="w-[250px] mt-[80px] ml-[60px]">
            <CardHeader>
              <CardTitle className="text-start	text-[15px]">
                Archan leave Request
              </CardTitle>
              <div className="w-full h-[1px] bg-neutral-600"></div>
              <CardDescription className="text-start">
                Sick leave request
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <h1 className="text-[45px]">3 Days</h1>
                <h5 className="mt-[10px]">5 may 2023</h5>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button className="bg-[#64CCC5]">Accept</Button>
              <Button className="bg-[#8D8787]">Decline</Button>
            </CardFooter>
          </Card>

          <Card className="w-[250px] mt-[80px] ml-[60px]">
            <CardHeader>
              <CardTitle className="text-start	text-[15px]">
                Archan leave Request
              </CardTitle>
              <div className="w-full h-[1px] bg-neutral-600"></div>
              <CardDescription className="text-start">
                Sick leave request
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <h1 className="text-[45px]">3 Days</h1>
                <h5 className="mt-[10px]">5 may 2023</h5>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button className="bg-[#64CCC5]">Accept</Button>
              <Button className="bg-[#8D8787]">Decline</Button>
            </CardFooter>
          </Card>

          <Card className="w-[250px] mt-[80px] ml-[60px]">
            <CardHeader>
              <CardTitle className="text-start	text-[15px]">
                Archan leave Request
              </CardTitle>
              <div className="w-full h-[1px] bg-neutral-600"></div>
              <CardDescription className="text-start">
                Sick leave request
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <h1 className="text-[45px]">3 Days</h1>
                <h5 className="mt-[10px]">5 may 2023</h5>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button className="bg-[#64CCC5]">Accept</Button>
              <Button className="bg-[#8D8787]">Decline</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
