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
import { CalendarIcon, Plus, Search, Filter } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface Token {
  id: string;
  name: string;
  image: string;
  attributes: Record<string, string>;
}

export function CreateSnapshotForm() {
  const [step, setStep] = useState(1);
  const [selectedCollection, setSelectedCollection] = useState('');
  const [selectedTokens, setSelectedTokens] = useState<Token[]>([]);
  const [snapshotType, setSnapshotType] = useState<'full' | 'specific' | 'criteria'>('full');
  const [startDate, setStartDate] = useState<Date>();
  const [recurrence, setRecurrence] = useState('once');
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
    // TODO: Implement snapshot creation logic
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Créer un Snapshot</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Étape {step} sur 3</span>
          <div className="h-2 w-32 bg-secondary rounded-full">
            <div 
              className="h-full bg-primary rounded-full transition-all"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {step === 1 && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Sélection de la Collection</CardTitle>
                <CardDescription>
                  Choisissez une collection et les tokens à inclure dans le snapshot
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <Label htmlFor="collection">Collection</Label>
                    <Select value={selectedCollection} onValueChange={setSelectedCollection}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner une collection" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="collection1">Collection 1</SelectItem>
                        <SelectItem value="collection2">Collection 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="search">Rechercher</Label>
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="search"
                        placeholder="Rechercher une collection..."
                        className="pl-8"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Type de Snapshot</Label>
                  <div className="grid grid-cols-3 gap-4">
                    <Card
                      className={`cursor-pointer transition-colors ${
                        snapshotType === 'full' ? 'border-primary' : ''
                      }`}
                      onClick={() => setSnapshotType('full')}
                    >
                      <CardContent className="p-4">
                        <h3 className="font-semibold">Collection Entière</h3>
                        <p className="text-sm text-muted-foreground">
                          Snapshot de tous les tokens de la collection
                        </p>
                      </CardContent>
                    </Card>
                    <Card
                      className={`cursor-pointer transition-colors ${
                        snapshotType === 'specific' ? 'border-primary' : ''
                      }`}
                      onClick={() => setSnapshotType('specific')}
                    >
                      <CardContent className="p-4">
                        <h3 className="font-semibold">Tokens Spécifiques</h3>
                        <p className="text-sm text-muted-foreground">
                          Sélectionnez des tokens individuels
                        </p>
                      </CardContent>
                    </Card>
                    <Card
                      className={`cursor-pointer transition-colors ${
                        snapshotType === 'criteria' ? 'border-primary' : ''
                      }`}
                      onClick={() => setSnapshotType('criteria')}
                    >
                      <CardContent className="p-4">
                        <h3 className="font-semibold">Par Critères</h3>
                        <p className="text-sm text-muted-foreground">
                          Filtrez les tokens par attributs
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {snapshotType === 'specific' && (
                  <div className="space-y-4">
                    <Label>Tokens Sélectionnés</Label>
                    <div className="grid grid-cols-4 gap-4">
                      {selectedTokens.map((token) => (
                        <Card key={token.id} className="relative">
                          <CardContent className="p-2">
                            <img
                              src={token.image}
                              alt={token.name}
                              className="w-full h-32 object-cover rounded-md"
                            />
                            <p className="mt-2 text-sm font-medium">{token.name}</p>
                          </CardContent>
                        </Card>
                      ))}
                      <Card className="border-dashed">
                        <CardContent className="p-2 flex items-center justify-center h-full">
                          <Button variant="ghost" className="h-full w-full">
                            <Plus className="h-6 w-6" />
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}

                {snapshotType === 'criteria' && (
                  <div className="space-y-4">
                    <Label>Critères de Filtrage</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Attribut</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionner un attribut" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="rarity">Rareté</SelectItem>
                            <SelectItem value="type">Type</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Valeur</Label>
                        <Input placeholder="Valeur de l'attribut" />
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Filter className="h-4 w-4 mr-2" />
                      Ajouter un critère
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configuration du Snapshot</CardTitle>
                <CardDescription>
                  Définissez les paramètres et la planification du snapshot
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nom du Snapshot</Label>
                    <Input id="name" placeholder="Mon Snapshot" />
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Input id="description" placeholder="Description du snapshot" />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Planification</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Type de Récurrence</Label>
                      <Select value={recurrence} onValueChange={setRecurrence}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner la récurrence" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="once">Unique</SelectItem>
                          <SelectItem value="daily">Quotidien</SelectItem>
                          <SelectItem value="weekly">Hebdomadaire</SelectItem>
                          <SelectItem value="monthly">Mensuel</SelectItem>
                          <SelectItem value="custom">Personnalisé</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Date de Début</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {startDate ? (
                              format(startDate, 'PPP', { locale: fr })
                            ) : (
                              <span>Sélectionner une date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={startDate}
                            onSelect={setStartDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Options Avancées</Label>
                    <Switch />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Tentatives en cas d'échec</Label>
                      <Input
                        type="number"
                        value={advancedOptions.retryAttempts}
                        onChange={(e) =>
                          setAdvancedOptions({
                            ...advancedOptions,
                            retryAttempts: parseInt(e.target.value)
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label>Délai entre les tentatives (minutes)</Label>
                      <Input
                        type="number"
                        value={advancedOptions.retryDelay}
                        onChange={(e) =>
                          setAdvancedOptions({
                            ...advancedOptions,
                            retryDelay: parseInt(e.target.value)
                          })
                        }
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
            <Card>
              <CardHeader>
                <CardTitle>Validation et Coûts</CardTitle>
                <CardDescription>
                  Vérifiez les paramètres et confirmez la création du snapshot
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Récapitulatif</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Collection</p>
                      <p className="font-medium">{selectedCollection}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Type de Snapshot</p>
                      <p className="font-medium">
                        {snapshotType === 'full'
                          ? 'Collection Entière'
                          : snapshotType === 'specific'
                          ? 'Tokens Spécifiques'
                          : 'Par Critères'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Récurrence</p>
                      <p className="font-medium">{recurrence}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date de Début</p>
                      <p className="font-medium">
                        {startDate ? format(startDate, 'PPP', { locale: fr }) : 'Non définie'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Estimation des Coûts</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Frais de base</span>
                      <span>10 UOS</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Frais de traitement</span>
                      <span>5 UOS</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Frais de stockage</span>
                      <span>2 UOS</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between font-semibold">
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
            <Button type="button" variant="outline" onClick={handleBack}>
              Retour
            </Button>
          )}
          {step < 3 ? (
            <Button type="button" onClick={handleNext}>
              Suivant
            </Button>
          ) : (
            <Button type="submit">Créer le Snapshot</Button>
          )}
        </div>
      </form>
    </div>
  );
} 