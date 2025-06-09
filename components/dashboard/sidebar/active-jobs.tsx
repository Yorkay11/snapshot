'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

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
    name: 'Snapshot Collection A',
    progress: 75,
    status: 'running',
    type: 'snapshot',
    estimatedTime: '15 min',
  },
  {
    id: '2',
    name: 'Distribution UOS',
    progress: 30,
    status: 'running',
    type: 'distribution',
    estimatedTime: '45 min',
  },
];

export function ActiveJobs() {
  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Jobs Actifs</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockActiveJobs.map((job) => (
          <div key={job.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{job.name}</p>
                <div className="flex items-center space-x-2">
                  <Badge
                    variant="secondary"
                    className={`${
                      job.status === 'running' ? 'bg-green-500' : 'bg-yellow-500'
                    } text-white`}
                  >
                    {job.status === 'running' ? 'En cours' : 'En pause'}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {job.estimatedTime} restantes
                  </span>
                </div>
              </div>
              <span className="text-sm font-medium">{job.progress}%</span>
            </div>
            <Progress value={job.progress} className="h-1" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
} 