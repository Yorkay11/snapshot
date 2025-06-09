'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { MoreVertical, Play, Pause, Trash, Edit, Download } from 'lucide-react';

interface Snapshot {
  id: string;
  name: string;
  collection: string;
  type: 'full' | 'specific' | 'criteria';
  status: 'running' | 'paused' | 'completed' | 'failed';
  progress: number;
  createdAt: string;
  nextRun: string;
  cost: number;
}

const mockSnapshots: Snapshot[] = [
  {
    id: '1',
    name: 'Snapshot Collection A',
    collection: 'Collection A',
    type: 'full',
    status: 'running',
    progress: 75,
    createdAt: '2024-03-20T10:00:00Z',
    nextRun: '2024-03-21T10:00:00Z',
    cost: 17,
  },
  {
    id: '2',
    name: 'Snapshot Collection B',
    collection: 'Collection B',
    type: 'specific',
    status: 'paused',
    progress: 30,
    createdAt: '2024-03-19T15:00:00Z',
    nextRun: '2024-03-20T15:00:00Z',
    cost: 12,
  },
  // Add more mock data as needed
];

export function SnapshotList() {
  const [snapshots, setSnapshots] = useState<Snapshot[]>(mockSnapshots);

  const getStatusColor = (status: Snapshot['status']) => {
    switch (status) {
      case 'running':
        return 'bg-green-500';
      case 'paused':
        return 'bg-yellow-500';
      case 'completed':
        return 'bg-blue-500';
      case 'failed':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const handleAction = (id: string, action: string) => {
    // TODO: Implement action handlers
    console.log(`Action ${action} on snapshot ${id}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Snapshots</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Collection</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Progression</TableHead>
              <TableHead>Prochain Run</TableHead>
              <TableHead>Coût (UOS)</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {snapshots.map((snapshot) => (
              <TableRow key={snapshot.id}>
                <TableCell className="font-medium">{snapshot.name}</TableCell>
                <TableCell>{snapshot.collection}</TableCell>
                <TableCell>
                  {snapshot.type === 'full'
                    ? 'Collection Entière'
                    : snapshot.type === 'specific'
                    ? 'Tokens Spécifiques'
                    : 'Par Critères'}
                </TableCell>
                <TableCell>
                  <Badge
                    className={`${getStatusColor(snapshot.status)} text-white`}
                  >
                    {snapshot.status === 'running'
                      ? 'En cours'
                      : snapshot.status === 'paused'
                      ? 'En pause'
                      : snapshot.status === 'completed'
                      ? 'Terminé'
                      : 'Échoué'}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${snapshot.progress}%` }}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  {new Date(snapshot.nextRun).toLocaleString()}
                </TableCell>
                <TableCell>{snapshot.cost}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {snapshot.status === 'running' ? (
                        <DropdownMenuItem
                          onClick={() => handleAction(snapshot.id, 'pause')}
                        >
                          <Pause className="h-4 w-4 mr-2" />
                          Mettre en pause
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem
                          onClick={() => handleAction(snapshot.id, 'resume')}
                        >
                          <Play className="h-4 w-4 mr-2" />
                          Reprendre
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem
                        onClick={() => handleAction(snapshot.id, 'edit')}
                      >
                        <Edit className="h-4 w-4 mr-2" />
                        Modifier
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleAction(snapshot.id, 'download')}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Télécharger
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleAction(snapshot.id, 'delete')}
                        className="text-red-600"
                      >
                        <Trash className="h-4 w-4 mr-2" />
                        Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
} 