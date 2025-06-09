'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Download, Eye, Trash } from 'lucide-react';

interface CompletedSnapshot {
  id: string;
  name: string;
  collection: string;
  type: 'full' | 'specific' | 'criteria';
  completedAt: string;
  tokensCount: number;
  holdersCount: number;
  cost: number;
  status: 'success' | 'partial' | 'failed';
}

const mockCompletedSnapshots: CompletedSnapshot[] = [
  {
    id: '1',
    name: 'Snapshot Collection A',
    collection: 'Collection A',
    type: 'full',
    completedAt: '2024-03-20T10:00:00Z',
    tokensCount: 10000,
    holdersCount: 5000,
    cost: 17,
    status: 'success',
  },
  {
    id: '2',
    name: 'Snapshot Collection B',
    collection: 'Collection B',
    type: 'specific',
    completedAt: '2024-03-19T15:00:00Z',
    tokensCount: 5000,
    holdersCount: 2500,
    cost: 12,
    status: 'partial',
  },
  {
    id: '3',
    name: 'Snapshot Collection C',
    collection: 'Collection C',
    type: 'criteria',
    completedAt: '2024-03-18T09:00:00Z',
    tokensCount: 2000,
    holdersCount: 1000,
    cost: 8,
    status: 'failed',
  },
];

export function SnapshotHistory() {
  const getStatusColor = (status: CompletedSnapshot['status']) => {
    switch (status) {
      case 'success':
        return 'bg-green-500';
      case 'partial':
        return 'bg-yellow-500';
      case 'failed':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status: CompletedSnapshot['status']) => {
    switch (status) {
      case 'success':
        return 'Succès';
      case 'partial':
        return 'Partiel';
      case 'failed':
        return 'Échoué';
      default:
        return 'Inconnu';
    }
  };

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Historique des Snapshots</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Collection</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Tokens</TableHead>
              <TableHead>Holders</TableHead>
              <TableHead>Coût (UOS)</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockCompletedSnapshots.map((snapshot) => (
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
                  {new Date(snapshot.completedAt).toLocaleString()}
                </TableCell>
                <TableCell>{snapshot.tokensCount.toLocaleString()}</TableCell>
                <TableCell>{snapshot.holdersCount.toLocaleString()}</TableCell>
                <TableCell>{snapshot.cost}</TableCell>
                <TableCell>
                  <Badge
                    className={`${getStatusColor(snapshot.status)} text-white`}
                  >
                    {getStatusText(snapshot.status)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-red-500">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
} 