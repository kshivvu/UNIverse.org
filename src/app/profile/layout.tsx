import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="sidebar-dark relative">
        <div
          className="absolute inset-y-0 left-0 w-[2px] 
                  bg-cyan-400/40 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
        />
        <AppSidebar />
      </div>
      <main className="flex-1 bg-background text-foreground">{children}</main>
    </SidebarProvider>
  );
}
