import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, AlertCircle, CheckCircle2, X } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

export function RightSidebar() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-4">
          <Card className="border-none shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Notifications Récentes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="rounded-full bg-green-100 p-1">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Snapshot complété</p>
                  <p className="text-xs text-muted-foreground">Snapshot #1234 a été complété avec succès</p>
                  <p className="text-xs text-muted-foreground">Il y a 2 minutes</p>
                </div>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-start space-x-3">
                <div className="rounded-full bg-yellow-100 p-1">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Snapshot en attente</p>
                  <p className="text-xs text-muted-foreground">Snapshot #1235 est en attente de validation</p>
                  <p className="text-xs text-muted-foreground">Il y a 15 minutes</p>
                </div>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Actions Rapides</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full" variant="outline">
                Créer un nouveau snapshot
              </Button>
              <Button className="w-full" variant="outline">
                Voir les snapshots actifs
              </Button>
              <Button className="w-full" variant="outline">
                Exporter les rapports
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Statistiques</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Snapshots totaux</span>
                  <span className="font-medium">24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Actifs</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Complétés</span>
                  <span className="font-medium">16</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </div>
  )
} 