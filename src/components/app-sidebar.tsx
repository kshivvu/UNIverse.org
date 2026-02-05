"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { CircleUser, Compass, HeartPlus, HomeIcon, MessageSquareIcon, Plus, Search, Send } from "lucide-react";
import Image from "next/image";
import { FaInternetExplorer } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

export function AppSidebar() {
  const { setOpen, isMobile } = useSidebar();
  const sbmbStyle:string="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/7 border border-white/10 neon-text text-cyan-400 backdrop-blur-md hover:bg-white/2"
  const spanStyle:string=" text-xl ml-2 text-cyan-400  neon-text"
  const spanHeadStyle:string="font-semibold text-xl ml-2 text-cyan-400 tracking-wide neon-text"
  return (
    <Sidebar
      collapsible="icon"
      side="left"
      variant="inset"
      className="rounded-lg"
      onMouseEnter={() => {
        if (!isMobile) setOpen(true);
      }}
      onMouseLeave={() => {
        if (!isMobile) setOpen(false);
      }}
    >
      <SidebarHeader className="mt-5">
        <SidebarMenuItem>
          <SidebarMenuButton
            className={`${sbmbStyle}`}
          >
            <Image
              src="/university.svg"
              width={40}
              height={40}
              alt="UNIverse icon"
            />
            <span className={`${spanHeadStyle}`}>
              UNIverse
            </span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarHeader>
          
      <SidebarContent className="mt-20">
        <SidebarGroup>
          <SidebarMenu className="flex flex-col space-y-4">
            <SidebarMenuItem>
              <SidebarMenuButton className={`${sbmbStyle}`}>
                  <HomeIcon/>
                  <span className= {`${spanStyle}`}>Home</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton className={`${sbmbStyle}`}>
                  <Send/>
                  <span className= {`${spanStyle}`}>Messages</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className={`${sbmbStyle}`}>
                  <Search/>
                  <span className= {`${spanStyle}`}>Search</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className={`${sbmbStyle}`}>
                  <Compass/>
                  <span className= {`${spanStyle}`}>Explore</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton className={`${sbmbStyle}`}>
                  <HeartPlus/>
                  <span className= {`${spanStyle}`}>Notifications</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className={`${sbmbStyle}`}>
                  <Plus/>
                  <span className= {`${spanStyle}`}>Create a Post</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className={`${sbmbStyle}`}>
                  <CircleUser/>
                  <span className= {`${spanStyle}`}>Profile</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}
