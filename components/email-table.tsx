import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail } from "lucide-react";

// Mock data for demonstration
const emailData = [
  {
    id: "1",
    email: "john.doe@techcorp.com",
    name: "John Doe",
    company: "TechCorp Inc.",
    page: "https://techcorp.com/contact",
    status: "verified",
    batchName: "Tech Companies Q1",
  },
  {
    id: "2",
    email: "sarah.wilson@saasstart.io",
    name: "Sarah Wilson",
    company: "SaaS Start",
    page: "https://saasstart.io/about",
    status: "verified",
    batchName: "SaaS Startups",
  },
  {
    id: "3",
    email: "mike.chen@ecommerce.shop",
    name: "Mike Chen",
    company: "E-Commerce Shop",
    page: "https://ecommerce.shop/team",
    status: "pending",
    batchName: "E-commerce Leads",
  },
  {
    id: "4",
    email: "lisa.brown@digital.agency",
    name: "Lisa Brown",
    company: "Digital Agency",
    page: "https://digital.agency/contact",
    status: "verified",
    batchName: "Tech Companies Q1",
  },
  {
    id: "5",
    email: "alex.kumar@startup.co",
    name: "Alex Kumar",
    company: "Startup Co",
    page: "https://startup.co/team",
    status: "invalid",
    batchName: "SaaS Startups",
  },
];

export function EmailTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Email Contacts</CardTitle>
        <CardDescription>
          View all extracted email contacts with their information
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Source Page</TableHead>
                <TableHead>Batch</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {emailData.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      {contact.email}
                    </div>
                  </TableCell>
                  <TableCell>{contact.name}</TableCell>
                  <TableCell>{contact.company}</TableCell>
                  <TableCell>
                    <a
                      href={contact.page}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      {new URL(contact.page).hostname}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-muted-foreground">
                      {contact.batchName}
                    </span>
                  </TableCell>
                  <TableCell>
                    {contact.status === "verified" && (
                      <Badge variant="default" className="bg-green-500">
                        Verified
                      </Badge>
                    )}
                    {contact.status === "pending" && (
                      <Badge variant="secondary">Pending</Badge>
                    )}
                    {contact.status === "invalid" && (
                      <Badge variant="destructive">Invalid</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="ghost">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
