import TabTransaction from "../../tabs/transactions/TabTransaction";
import CardListTransaction from "./CardListTransaction";

export default function CardTransactionWrapper() {
  return (
    <div className="px-6 bg-background rounded-t-3xl -mt-8 py-6 relative z-10 space-y-8">
      <TabTransaction />
      <CardListTransaction />
    </div>
  );
}
