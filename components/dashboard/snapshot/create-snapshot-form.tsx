'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Plus, Search, Filter, X } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from 'next/image';

interface Token {
  id: string;
  name: string;
  image: string;
  attributes: Record<string, string>;
}

const mockTokens: Token[] = [
  {
    id: '1',
    name: 'Token #1',
    image: 'https://picsum.photos/200/200?random=1',
    attributes: {
      rarity: 'Common',
      type: 'Character'
    }
  },
  {
    id: '2',
    name: 'Token #2',
    image: 'https://picsum.photos/200/200?random=2',
    attributes: {
      rarity: 'Rare',
      type: 'Weapon'
    }
  },
  {
    id: '3',
    name: 'Token #3',
    image: 'https://picsum.photos/200/200?random=3',
    attributes: {
      rarity: 'Epic',
      type: 'Armor'
    }
  },
  {
    id: '4',
    name: 'Token #4',
    image: 'https://picsum.photos/200/200?random=4',
    attributes: {
      rarity: 'Legendary',
      type: 'Accessory'
    }
  },
  {
    id: '5',
    name: 'Token #5',
    image: 'https://picsum.photos/200/200?random=5',
    attributes: {
      rarity: 'Common',
      type: 'Character'
    }
  },
  {
    id: '6',
    name: 'Token #6',
    image: 'https://picsum.photos/200/200?random=6',
    attributes: {
      rarity: 'Rare',
      type: 'Weapon'
    }
  }
];

export function CreateSnapshotForm() {
  const [step, setStep] = useState(1);
  const [selectedCollection, setSelectedCollection] = useState('');
  const [selectedTokens, setSelectedTokens] = useState<Token[]>([]);
  const [snapshotType, setSnapshotType] = useState<'full' | 'specific' | 'criteria'>('full');
  const [startDate, setStartDate] = useState<Date>();
  const [recurrence, setRecurrence] = useState('once');
  const [searchQuery, setSearchQuery] = useState('');
  const [advancedOptions, setAdvancedOptions] = useState({
    retryAttempts: 3,
    retryDelay: 5,
    notifyOnFailure: true,
    priority: 'normal'
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleTokenSelect = (token: Token) => {
    if (!selectedTokens.find(t => t.id === token.id)) {
      setSelectedTokens([...selectedTokens, token]);
    }
  };

  const handleTokenRemove = (tokenId: string) => {
    setSelectedTokens(selectedTokens.filter(t => t.id !== tokenId));
  };

  const filteredTokens = mockTokens.filter(token =>
    token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    Object.values(token.attributes).some(value =>
      value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-[calc(100vh-4rem)] space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Create a Snapshot</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-white/70">Step {step} of 3</span>
          <div className="h-2 w-32 bg-primary rounded-full">
            <div 
              className="h-full bg-highlight rounded-full transition-all shadow-sm shadow-secondary"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {step === 1 && (
          <div className="space-y-6">
            <Card className="bg-primary/20 border-none shadow-sm shadow-secondary">
              <CardHeader>
                <CardTitle className="text-white">Collection Selection</CardTitle>
                <CardDescription className="text-white/70">
                  Choose a collection and the tokens to include in the snapshot
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-4">
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="collection" className="text-white">Collection</Label>
                    <Select value={selectedCollection} onValueChange={setSelectedCollection}>
                      <SelectTrigger className="bg-transparent border-muted text-white">
                        <SelectValue placeholder="Select a collection" />
                      </SelectTrigger>
                      <SelectContent className="bg-primary border-muted">
                        <SelectItem value="collection1" className="text-white hover:bg-[#622C6C]">Collection 1</SelectItem>
                        <SelectItem value="collection2" className="text-white hover:bg-[#622C6C]">Collection 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="search" className="text-white">Search</Label>
                    <div className="relative">
                      <Search className="absolute left-2 top-3 h-4 w-4 text-white/70" />
                      <Input
                        id="search"
                        placeholder="Search a collection..."
                        className="pl-8 border-[#622C6C] text-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-white">Snapshot Type</Label>
                  <div className="grid grid-cols-3 gap-4">
                    <Card
                      className={`cursor-pointer transition-colors bg-[#28274A] border-[#622C6C] hover:border-[#AC46E7] ${
                        snapshotType === 'full' ? 'border-[#AC46E7] shadow-sm shadow-secondary' : ''
                      }`}
                      onClick={() => setSnapshotType('full')}
                    >
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-white">Full Collection</h3>
                        <p className="text-sm text-white/70">
                          Snapshot of all collection tokens
                        </p>
                      </CardContent>
                    </Card>
                    <Card
                      className={`cursor-pointer transition-colors bg-[#28274A] border-[#622C6C] hover:border-[#AC46E7] ${
                        snapshotType === 'specific' ? 'border-[#AC46E7] shadow-sm shadow-secondary' : ''
                      }`}
                      onClick={() => setSnapshotType('specific')}
                    >
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-white">Specific Tokens</h3>
                        <p className="text-sm text-white/70">
                          Select individual tokens
                        </p>
                      </CardContent>
                    </Card>
                    <Card
                      className={`cursor-pointer transition-colors bg-[#28274A] border-[#622C6C] hover:border-[#AC46E7] ${
                        snapshotType === 'criteria' ? 'border-[#AC46E7] shadow-sm shadow-secondary' : ''
                      }`}
                      onClick={() => setSnapshotType('criteria')}
                    >
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-white">By Criteria</h3>
                        <p className="text-sm text-white/70">
                          Filter tokens by attributes
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {snapshotType === 'specific' && (
                  <div className="space-y-4">
                    <Label className="text-white">Selected Tokens</Label>
                    <div className="grid grid-cols-4 gap-4">
                      {selectedTokens.map((token) => (
                        <Card key={token.id} className="relative bg-primary border-muted group">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-[#622C6C] hover:bg-[#AC46E7] z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => handleTokenRemove(token.id)}
                          >
                            <X className="h-4 w-4 text-white" />
                          </Button>
                          <CardContent className="p-2">
                            <img
                              src={token.image}
                              alt={token.name}
                              className="w-full h-32 object-cover rounded-md"
                            />
                            <p className="mt-2 text-sm font-medium text-white">{token.name}</p>
                            <div className="mt-1 flex flex-wrap gap-1">
                              {Object.entries(token.attributes).map(([key, value]) => (
                                <span key={key} className="text-xs text-white/70">
                                  {key}: {value}
                                </span>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                      <Dialog >
                        <DialogTrigger asChild>
                          <Card className="border-dashed border-muted bg-primary cursor-pointer hover:border-[#AC46E7] transition-colors">
                            <CardContent className="p-2 flex items-center justify-center h-full">
                              <Button variant="ghost" className="h-full w-full text-white hover:bg-[#622C6C]">
                                <Plus className="h-6 w-6" />
                              </Button>
                            </CardContent>
                          </Card>
                        </DialogTrigger>
                        <DialogContent className="bg-foreground border-muted max-h-[80vh]">
                          <DialogHeader>
                            <DialogTitle className="text-white">Select Tokens</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="relative">
                              <Search className="absolute left-2 top-3 h-4 w-4 text-white/70" />
                              <Input
                                placeholder="Search tokens..."
                                className="pl-8 bg-transparent border-muted text-white"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                              />
                            </div>
                            <div className="grid grid-cols-3 gap-6 max-h-[50vh] overflow-y-auto p-1 custom-scrollbar">
                              {filteredTokens.map((token) => (
                                <Card
                                  key={token.id}
                                  className={`relative bg-transparent border-muted cursor-pointer transition-all ${
                                    selectedTokens.find(t => t.id === token.id) 
                                      ? 'border-[#AC46E7] shadow-[0_0_10px_rgba(172,70,231,0.3)] scale-[1.02]' 
                                      : 'hover:border-[#AC46E7]'
                                  }`}
                                  onClick={() => handleTokenSelect(token)}
                                >
                                  <CardContent className="p-2">
                                    <div className="relative">
                                      <Image
                                        src={token.image}
                                        alt={token.name}
                                        width={10}
                                        height={10}
                                        className="w-full h-24 object-cover rounded-md"
                                      />
                                      {selectedTokens.find(t => t.id === token.id) && (
                                        <div className="absolute top-2 right-2 bg-[#AC46E7] rounded-full p-1">
                                          <svg
                                            className="h-4 w-4 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={2}
                                              d="M5 13l4 4L19 7"
                                            />
                                          </svg>
                                        </div>
                                      )}
                                    </div>
                                    <p className="mt-3 text-sm font-medium text-white">{token.name}</p>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                      {Object.entries(token.attributes).map(([key, value]) => (
                                        <span key={key} className="text-xs text-white/70">
                                          {key}: {value}
                                        </span>
                                      ))}
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                )}

                {snapshotType === 'criteria' && (
                  <div className="space-y-4">
                    <Label className="text-white">Filter Criteria</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-white">Attribute</Label>
                        <Select>
                          <SelectTrigger className="bg-[#28274A] border-[#622C6C] text-white">
                            <SelectValue placeholder="Select an attribute" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#28274A] border-[#622C6C]">
                            <SelectItem value="rarity" className="text-white hover:bg-[#622C6C]">Rarity</SelectItem>
                            <SelectItem value="type" className="text-white hover:bg-[#622C6C]">Type</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-white">Value</Label>
                        <Input 
                          placeholder="Attribute value" 
                          className="bg-[#28274A] border-[#622C6C] text-white"
                        />
                      </div>
                    </div>
                    <Button variant="outline" className="w-full border-[#622C6C] text-white hover:bg-[#622C6C]">
                      <Filter className="h-4 w-4 mr-2" />
                      Add a criterion
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <Card className="bg-primary/20 border-none shadow-[0_0_15px_rgba(98,44,108,0.3)]">
              <CardHeader>
                <CardTitle className="text-white">Snapshot Configuration</CardTitle>
                <CardDescription className="text-white/70">
                  Define snapshot parameters and scheduling
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Snapshot Name</Label>
                    <Input 
                      id="name" 
                      placeholder="My Snapshot" 
                      className="bg-[#28274A] border-[#622C6C] text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="description" className="text-white">Description</Label>
                    <Input 
                      id="description" 
                      placeholder="Snapshot description" 
                      className="bg-[#28274A] border-[#622C6C] text-white"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-white">Scheduling</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-white">Recurrence Type</Label>
                      <Select value={recurrence} onValueChange={setRecurrence}>
                        <SelectTrigger className="bg-[#28274A] border-[#622C6C] text-white">
                          <SelectValue placeholder="Select recurrence" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#28274A] border-[#622C6C]">
                          <SelectItem value="once" className="text-white hover:bg-[#622C6C]">Once</SelectItem>
                          <SelectItem value="daily" className="text-white hover:bg-[#622C6C]">Daily</SelectItem>
                          <SelectItem value="weekly" className="text-white hover:bg-[#622C6C]">Weekly</SelectItem>
                          <SelectItem value="monthly" className="text-white hover:bg-[#622C6C]">Monthly</SelectItem>
                          <SelectItem value="custom" className="text-white hover:bg-[#622C6C]">Custom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-white">Start Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal bg-[#28274A] border-[#622C6C] text-white hover:bg-[#622C6C]"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {startDate ? (
                              format(startDate, 'PPP', { locale: fr })
                            ) : (
                              <span>Select a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-[#28274A] border-[#622C6C]">
                          <Calendar
                            mode="single"
                            selected={startDate}
                            onSelect={setStartDate}
                            initialFocus
                            className="bg-[#28274A] text-white"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-white">Advanced Options</Label>
                    <Switch className="data-[state=checked]:bg-[#AC46E7]" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-white">Retry Attempts</Label>
                      <Input
                        type="number"
                        value={advancedOptions.retryAttempts}
                        onChange={(e) =>
                          setAdvancedOptions({
                            ...advancedOptions,
                            retryAttempts: parseInt(e.target.value)
                          })
                        }
                        className="bg-[#28274A] border-[#622C6C] text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-white">Delay Between Attempts (minutes)</Label>
                      <Input
                        type="number"
                        value={advancedOptions.retryDelay}
                        onChange={(e) =>
                          setAdvancedOptions({
                            ...advancedOptions,
                            retryDelay: parseInt(e.target.value)
                          })
                        }
                        className="bg-[#28274A] border-[#622C6C] text-white"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <Card className="bg-primary/20 border-none shadow-[0_0_15px_rgba(98,44,108,0.3)]">
              <CardHeader>
                <CardTitle className="text-white">Validation and Costs</CardTitle>
                <CardDescription className="text-white/70">
                  Check parameters and confirm snapshot creation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-white">Summary</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-white/70">Collection</p>
                      <p className="font-medium text-white">{selectedCollection}</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/70">Snapshot Type</p>
                      <p className="font-medium text-white">
                        {snapshotType === 'full'
                          ? 'Full Collection'
                          : snapshotType === 'specific'
                          ? 'Specific Tokens'
                          : 'By Criteria'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-white/70">Recurrence</p>
                      <p className="font-medium text-white">{recurrence}</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/70">Start Date</p>
                      <p className="font-medium text-white">
                        {startDate ? format(startDate, 'PPP', { locale: fr }) : 'Not set'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-white">Cost Estimation</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-white">
                      <span>Base fee</span>
                      <span>10 UOS</span>
                    </div>
                    <div className="flex justify-between text-white">
                      <span>Processing fee</span>
                      <span>5 UOS</span>
                    </div>
                    <div className="flex justify-between text-white">
                      <span>Storage fee</span>
                      <span>2 UOS</span>
                    </div>
                    <div className="border-t border-[#622C6C] pt-2">
                      <div className="flex justify-between font-semibold text-white">
                        <span>Total</span>
                        <span>17 UOS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="flex justify-between">
          {step > 1 && (
            <Button 
              type="button" 
              variant="outline" 
              onClick={handleBack}
              className="border-[#622C6C] bg-transparent text-white hover:bg-[#622C6C]"
            >
              Back
            </Button>
          )}
          {step < 3 ? (
            <Button 
              type="button" 
              onClick={handleNext}
              className="bg-[#AC46E7] text-white hover:bg-[#8757B2] shadow-[0_0_10px_rgba(172,70,231,0.3)]"
            >
              Next
            </Button>
          ) : (
            <Button 
              type="submit"
              className="bg-[#AC46E7] text-white hover:bg-[#8757B2] shadow-[0_0_10px_rgba(172,70,231,0.3)]"
            >
              Create Snapshot
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

const styles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: #28274A;
    border-radius: 4px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #622C6C;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #AC46E7;
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
} 