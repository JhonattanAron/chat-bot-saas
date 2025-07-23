"use client";

import Link from "next/link";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  PlusCircle,
  MessageSquare,
  Globe,
  MoreHorizontal,
  Edit,
  Copy,
  Trash2,
  Power,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useChatAssistantStore } from "@/store/chatAsistantStore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import SimpleAlert from "@/components/ui/simple-alert";

export default function BotsPage() {
  const { getAssistants, assistants } = useChatAssistantStore();
  const { data: session } = useSession();
  const [errorBots, setErrorBots] = useState(false);
  useEffect(() => {
    if (session === undefined) return;
    if (session) {
      getAssistants(session.binding_id || "");
    } else {
      setErrorBots(true);
    }
  }, [session]);

  if (assistants.length === 0 && !errorBots) {
    return (
      <DashboardLayout>
        <div className="flex flex-col gap-4 p-2 sm:p-4 md:gap-8 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex justify-between w-1/2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  My Bots
                </h1>
                <p className="text-muted-foreground text-sm mb-3">
                  Manage and monitor your chatbots.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Bots Activos</span>
                    <Badge variant="default">2/3</Badge>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Basic Plan
                  </Badge>
                </div>
              </div>
            </div>
            <Link href="/dashboard/bots/create">
              <Button className="gap-1 w-full sm:w-auto">
                <PlusCircle className="h-4 w-4" />
                Create Bot
              </Button>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center h-full p-4">
            <h2 className="text-xl font-semibold mb-2">
              No tienes bots creados
            </h2>
            <p className="text-muted-foreground mb-4">
              Crea tu primer bot para comenzar a gestionar tus conversaciones.
            </p>
            <Link href="/dashboard/bots/create">
              <Button className="gap-1">
                <PlusCircle className="h-4 w-4" />
                Crear Bot
              </Button>
            </Link>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4 p-2 sm:p-4 md:gap-8 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex justify-between w-1/2">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                My Bots
              </h1>
              <p className="text-muted-foreground text-sm mb-3">
                Manage and monitor your chatbots.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Bots Activos</span>
                  <Badge variant="default">2/3</Badge>
                </div>
                <Badge variant="outline" className="text-xs">
                  Basic Plan
                </Badge>
              </div>
            </div>
          </div>
          <Link href="/dashboard/bots/create">
            <Button className="gap-1 w-full sm:w-auto">
              <PlusCircle className="h-4 w-4" />
              Create Bot
            </Button>
          </Link>
        </div>
        {errorBots && (
          <SimpleAlert message="Se produjo un error con la sesión. Por favor, cierra sesión e intenta ingresar nuevamente." />
        )}
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {assistants.map((bot) => (
            <Card key={bot._id} className="overflow-hidden">
              <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 pb-2">
                <CardTitle className="text-lg sm:text-xl font-bold">
                  {bot.name}
                </CardTitle>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="flex-shrink-0"
                    >
                      <MoreHorizontal className="h-5 w-5" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Copy className="mr-2 h-4 w-4" />
                      Duplicate
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Power className="mr-2 h-4 w-4" />
                      {bot.status === "online" ? "Turn Off" : "Turn On"}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge
                    variant={
                      bot.status === "online"
                        ? "default"
                        : bot.status === "maintenance"
                        ? "outline"
                        : "secondary"
                    }
                  >
                    {bot.status.charAt(0).toUpperCase() + bot.status.slice(1)}
                  </Badge>
                  <Badge variant="outline">
                    {bot.type === "web" ? (
                      <Globe className="mr-1 h-3 w-3" />
                    ) : (
                      <MessageSquare className="mr-1 h-3 w-3" />
                    )}
                    {bot.type === "web" ? "Website" : "WhatsApp"}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {bot.description}
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-xs">
                      Messages
                    </span>
                    <span className="font-medium">1245</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-xs">
                      Last Active
                    </span>
                    <span className="font-medium text-xs">2 minutes ago</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row sm:justify-between gap-2 border-t bg-muted/50 px-4 sm:px-6 py-3">
                <Link
                  href={`/dashboard/bots/${bot._id}`}
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full sm:w-auto"
                  >
                    View Details
                  </Button>
                </Link>
                <Link
                  href={`/dashboard/bots/${bot._id}/edit`}
                  className="w-full sm:w-auto"
                >
                  <Button size="sm" className="w-full sm:w-auto">
                    Manage
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
