'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Calendar, Timer, Users } from 'lucide-react';

interface ActiveJob {
  id: string;
  name: string;
  progress: number;
  status: 'running' | 'paused';
  type: 'snapshot' | 'distribution';
  estimatedTime: string;
}

const mockActiveJobs: ActiveJob[] = [
  {
    id: '1',
    name: 'Ultra heroes collection',
    progress: 75,
    status: 'running',
    type: 'snapshot',
    estimatedTime: '15 min',
  },
  {
    id: '2',
    name: 'Ultra heroes collection',
    progress: 30,
    status: 'running',
    type: 'distribution',
    estimatedTime: '45 min',
  },
  {
    id: '3',
    name: 'Ultra heroes collection',
    progress: 60,
    status: 'running',
    type: 'distribution',
    estimatedTime: '45 min',
  },
];

export function ActiveJobs() {
  return (
    <Card className="mb-4 bg-primary/20 shadow-sm shadow-secondary">
      <CardHeader className="pb-4">
        <CardTitle className="text-md font-bold text-white">Jobs Actifs</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {mockActiveJobs.map((job) => (
          <div key={job.id} className="space-y-2 bg-secondary/10 p-4 rounded-md">
            <div className="flex flex-col gap-2">
              <div className="space-y-2">
                <p className="text-sm font-medium leading-none text-white">{job.name}</p>
                <div className="flex flex-row items-center gap-2">
                  <div className="flex flex-row items-center space-x-1">
                      <Calendar size={15} color='#FFFFFF'/>
                    <span className="text-xs text-white">
                      Weekly
                    </span>
                  </div>

                  <div className="flex flex-row items-center space-x-1">
                      <Timer size={15} color='#FFFFFF'/>
                    <span className="text-xs text-white">
                    Within 2 days
                    </span>
                  </div>

                  <div className="flex flex-row items-center space-x-1">
                      <Users size={15} color='#FFFFFF'/>
                    <span className="text-xs text-white">
                      3,403
                    </span>
                  </div>

                </div>
              </div>
              <Badge
                  variant="secondary"
                  className={`bg-foreground/10 text-white w-fit`}
                >
                  Export CSV
                </Badge>
              <div className='flex flex-row justify-between'>
                <span className="text-xs font-medium text-white">Progression</span>
                <span className="text-xs font-medium text-white">{job.progress}%</span>
              </div>
            </div>
            <Progress value={job.progress} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
} 