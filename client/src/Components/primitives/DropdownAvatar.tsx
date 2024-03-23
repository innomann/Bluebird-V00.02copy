import React from "react";
import * as Avatar from "@radix-ui/react-avatar";

const DropdownAvatar = () => (
  <div className="flex gap-5">
    <Avatar.Root className="bg-blackA1 inline-flex h-[25px] w-[25px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
      />
    </Avatar.Root>
  </div>
);

export default DropdownAvatar;
