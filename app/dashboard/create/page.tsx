import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function CreateSnapshotPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Créer un Snapshot</h1>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Configuration du Snapshot</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nom du Snapshot</Label>
                <Input id="name" placeholder="Ex: Snapshot Q1 2024" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Description détaillée du snapshot..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="type">Type de Snapshot</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner un type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Quotidien</SelectItem>
                    <SelectItem value="weekly">Hebdomadaire</SelectItem>
                    <SelectItem value="monthly">Mensuel</SelectItem>
                    <SelectItem value="custom">Personnalisé</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="schedule">Planification</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Input type="datetime-local" id="startDate" />
                  <Input type="datetime-local" id="endDate" />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="notifications" />
                <Label htmlFor="notifications">Activer les notifications</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="autoRetry" />
                <Label htmlFor="autoRetry">Ressayer automatiquement en cas d'échec</Label>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Button variant="outline">Annuler</Button>
              <Button>Créer le Snapshot</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Paramètres Avancés</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="retryCount">Nombre de tentatives</Label>
                <Input type="number" id="retryCount" min="1" max="5" defaultValue="3" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="timeout">Timeout (en secondes)</Label>
                <Input type="number" id="timeout" min="30" max="3600" defaultValue="300" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="priority">Priorité</Label>
                <Select defaultValue="medium">
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner une priorité" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Basse</SelectItem>
                    <SelectItem value="medium">Moyenne</SelectItem>
                    <SelectItem value="high">Haute</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 