"use client"

import { ActiveJobs } from './sidebar/active-jobs';
import { RecentActivities } from './sidebar/recent-activities';

export function Sidebar() {
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex-1 overflow-auto px-4">
        <div className="space-y-4">
          <ActiveJobs />
          <RecentActivities />
        </div>
      </div>
    </div>
  );
} 