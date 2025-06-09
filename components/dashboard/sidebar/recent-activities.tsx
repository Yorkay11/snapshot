'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, CheckCircle, AlertCircle, PauseCircle } from 'lucide-react';

interface Activity {
  id: string;
  type: 'snapshot' | 'distribution' | 'system';
  status: 'success' | 'error' | 'warning';
  message: string;
  timestamp: string;
}

const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'snapshot',
    status: 'success',
    message: 'Snapshot Collection A terminé avec succès',
    timestamp: '2 min',
  },
  {
    id: '2',
    type: 'distribution',
    status: 'error',
    message: 'Erreur lors de la distribution UOS',
    timestamp: '15 min',
  },
  {
    id: '3',
    type: 'system',
    status: 'warning',
    message: 'Mise à jour système disponible',
    timestamp: '1h',
  },
];

export function RecentActivities() {
  const getStatusIcon = (status: Activity['status']) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case 'warning':
        return <PauseCircle className="h-4 w-4 text-yellow-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: Activity['status']) => {
    switch (status) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      case 'warning':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Activités Récentes</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockActivities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className="mt-1">{getStatusIcon(activity.status)}</div>
            <div className="space-y-1">
              <p className="text-sm leading-none">{activity.message}</p>
              <div className="flex items-center space-x-2">
                <Badge
                  variant="secondary"
                  className={`${getStatusColor(activity.status)} text-white`}
                >
                  {activity.type}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {activity.timestamp}
                </span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
} 