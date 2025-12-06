import { Handbag } from "lucide-react";

export default function CardListTransaction() {
  return (
    <div>
      <div className="space-y-4">
        <p className="text-muted-foreground">Today</p>
        <div className="space-y-6">
          <div className="flex justify-between gap-3">
            <div className="flex gap-3">
              <div className="p-4 rounded-full bg-blue-100 w-fit">
                <Handbag className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h3 className="font-medium">Shopping</h3>
                <p className="text-muted-foreground">Beli macbook di DP Mall</p>
              </div>
            </div>
            <h3>Rp 12.500.000</h3>
          </div>
          <div className="flex justify-between gap-3">
            <div className="flex gap-3">
              <div className="p-4 rounded-full bg-blue-100 w-fit">
                <Handbag className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h3 className="font-medium">Shopping</h3>
                <p className="text-muted-foreground">Beli macbook di DP Mall</p>
              </div>
            </div>
            <h3>Rp 12.500.000</h3>
          </div>
          <div className="flex justify-between gap-3">
            <div className="flex gap-3">
              <div className="p-4 rounded-full bg-blue-100 w-fit">
                <Handbag className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h3 className="font-medium">Shopping</h3>
                <p className="text-muted-foreground">Beli macbook di DP Mall</p>
              </div>
            </div>
            <h3>Rp 12.500.000</h3>
          </div>
          <div className="flex justify-between gap-3">
            <div className="flex gap-3">
              <div className="p-4 rounded-full bg-blue-100 w-fit">
                <Handbag className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h3 className="font-medium">Shopping</h3>
                <p className="text-muted-foreground">Beli macbook di DP Mall</p>
              </div>
            </div>
            <h3>Rp 12.500.000</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
