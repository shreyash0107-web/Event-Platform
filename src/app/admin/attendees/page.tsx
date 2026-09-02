import { AdminLayout } from "@/components/AdminLayout";
import { AdminAttendeesTable } from "@/components/AdminAttendeesTable";

export default function AdminAttendeesPage() {
  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <AdminAttendeesTable />
      </div>
    </AdminLayout>
  );
}
