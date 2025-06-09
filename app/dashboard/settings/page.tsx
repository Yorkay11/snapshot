import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Paramètres</h1>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">Général</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Sécurité</TabsTrigger>
          <TabsTrigger value="advanced">Avancé</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres Généraux</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="timezone">Fuseau horaire</Label>
                <Select defaultValue="utc">
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner un fuseau horaire" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc">UTC</SelectItem>
                    <SelectItem value="paris">Paris (CET)</SelectItem>
                    <SelectItem value="newyork">New York (EST)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="language">Langue</Label>
                <Select defaultValue="fr">
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner une langue" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="darkMode" />
                <Label htmlFor="darkMode">Mode sombre</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres des Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="emailNotifications" />
                <Label htmlFor="emailNotifications">Notifications par email</Label>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email de notification</Label>
                <Input id="email" type="email" placeholder="votre@email.com" />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="successNotifications" />
                <Label htmlFor="successNotifications">Notifications de succès</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="errorNotifications" />
                <Label htmlFor="errorNotifications">Notifications d'erreur</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres de Sécurité</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="apiKey">Clé API Ultra</Label>
                <Input id="apiKey" type="password" />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="2fa" />
                <Label htmlFor="2fa">Authentification à deux facteurs</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="ipRestriction" />
                <Label htmlFor="ipRestriction">Restriction d'IP</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres Avancés</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="retryCount">Nombre de tentatives par défaut</Label>
                <Input id="retryCount" type="number" min="1" max="5" defaultValue="3" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="timeout">Timeout par défaut (secondes)</Label>
                <Input id="timeout" type="number" min="30" max="3600" defaultValue="300" />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="debugMode" />
                <Label htmlFor="debugMode">Mode debug</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="autoBackup" />
                <Label htmlFor="autoBackup">Sauvegarde automatique des configurations</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end space-x-4">
        <Button variant="outline">Annuler</Button>
        <Button>Sauvegarder les modifications</Button>
      </div>
    </div>
  )
} 