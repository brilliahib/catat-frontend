import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DialogBudgetInformationProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function DialogBudgetInformation({
  open,
  setOpen,
}: DialogBudgetInformationProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Informasi Fitur Budget</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            Fitur Budget ini dibuat buat bantu kamu ngatur batas pengeluaran
            biar lebih terkontrol dan gak gampang jebol.
          </p>

          <div>
            <p className="mb-2">Dengan fitur ini kamu bisa:</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Membuat budget harian, mingguan, atau bulanan</li>
              <li>Melihat sisa budget secara realtime</li>
              <li>Mendapatkan alert kondisi budget aman atau tidak</li>
              <li>Mengedit atau update budget kapan aja</li>
            </ol>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
