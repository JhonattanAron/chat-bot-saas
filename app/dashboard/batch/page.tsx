import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BatchList } from "@/components/batch/batch-list";
import { CreateBatchDialog } from "@/components/batch/create-batch-dialog";
import { DashboardLayout } from "@/components/dashboard-layout";
import { EmailTable } from "@/components/email-table";

export default async function DashboardPage() {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <DashboardLayout>
        <main className="flex-1">
          <div className="container mx-auto px-4 py-8 md:px-6">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground mt-1">
                  Manage your lead scraping batches and email data
                </p>
              </div>
              <CreateBatchDialog />
            </div>

            <Tabs defaultValue="batches" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="batches">Batches</TabsTrigger>
                <TabsTrigger value="emails">Emails</TabsTrigger>
              </TabsList>

              <TabsContent value="batches">
                <BatchList />
              </TabsContent>

              <TabsContent value="emails">
                <EmailTable />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </DashboardLayout>
    </div>
  );
}
