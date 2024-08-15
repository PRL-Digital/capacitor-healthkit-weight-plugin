export interface CapacitorHealthkitPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
