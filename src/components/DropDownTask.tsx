import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Pencil,
  Plus,
  PlusCircle,
  Settings,
  Trash2,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { BsThreeDots } from "react-icons/bs";
import { HTMLAttributes } from "react";

interface DropdownTaskProps extends HTMLAttributes<HTMLDivElement> {}
export function DropDownTask({ className, ...props }: DropdownTaskProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="top-0 right-0 relative ">
          <Button variant="ghost" size={"icon"}>
            {" "}
            <BsThreeDots />
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-20">
        <DropdownMenuItem>
          <Pencil className="mr-2 h-4 w-4" />
          <span>edit</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Trash2 className="mr-2 h-4 w-4" />
          <span>delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
