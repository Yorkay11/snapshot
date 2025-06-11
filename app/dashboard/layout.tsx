import { Sidebar } from "@/components/dashboard/sidebar";
import { RightSidebar } from "@/components/dashboard/right-sidebar";
import { SnapshotHistory } from "@/components/dashboard/snapshot/snapshot-history";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen h-full flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <div className="w-[400px] min-w-[300px] h-full py-4 overflow-y-auto animate-in slide-in-from-left duration-1000">
          <Sidebar />
        </div>

        <div className="flex-1 flex flex-col overflow-y-hidden animate-in slide-in-from-bottom duration-1000 delay-300">
          <main className="flex-1 py-8 px-4 overflow-y-auto">
            {children}
          </main>
        </div>

        <div className="w-[400px] min-w-[300px] h-full p-4 overflow-y-auto animate-in slide-in-from-right duration-1000">
          <RightSidebar />
        </div>
      </div>

      <div className="px-4 animate-in slide-in-from-bottom duration-1000 delay-500">
        <SnapshotHistory />
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 border-t bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 z-50">
        <div className="flex justify-around p-4">
          {/* Boutons */}
          {[...Array(4)].map((_, i) => (
            <button key={i} className="p-2">
              {/* Placeholder icônes */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
