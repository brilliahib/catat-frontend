export interface Transaction {
  id: number;
  user_id: number;
  amount: number;
  type: string;
  notes?: string;
  date: Date;
  created_at: Date;
  updated_at: Date;
}
