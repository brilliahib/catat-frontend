import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DialogReportInformationProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function DialogReportInformation({
  open,
  setOpen,
}: DialogReportInformationProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Informasi Fitur Report</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            Fitur Report ini ngebantu kamu nge-track pengeluaran berdasarkan
            kategorinya, biar kamu bisa lihat duit kamu habis paling banyak di
            mana.
          </p>

          <div>
            <p className="mb-2">Dengan fitur ini kamu bisa:</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>
                Melihat total pengeluaran per kategori seperti makan, transport,
                belanja, dan lainnya
              </li>
              <li>Bandingin kategori mana yang paling banyak nguras budget</li>
              <li>Ngecek tren pengeluaran biar tahu pola spending kamu</li>
              <li>
                Pakai insight ini buat atur strategi pengeluaran yang lebih
                sehat
              </li>
            </ol>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
