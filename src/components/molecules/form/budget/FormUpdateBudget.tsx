import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FormUpdateBudget() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <Label>Berapa Budgetmu?</Label>
        <Input type="number" placeholder="400000" />
      </div>

      <div className="space-y-1">
        <Label>Mau Budget Harian / Mingguan / Bulanan?</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Mingguan" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Frekuensi Budget</SelectLabel>
              <SelectItem value="daily">Harian</SelectItem>
              <SelectItem value="weekly">Mingguan</SelectItem>
              <SelectItem value="monthly">Bulanan</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full">
        <Button className="w-full">Ganti dong</Button>
      </div>
    </div>
  );
}
