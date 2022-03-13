export type StockItem = {
  name: string
  amount: number
  step?: number
};

export type StockGroup = {
  name?: string
  items: Record<string, StockItem>
};
