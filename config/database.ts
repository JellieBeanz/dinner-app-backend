export default ({ env }: { env: {
  (key: string, defaultValue?: string | boolean | number): string | boolean | number;
  int: (key: string, defaultValue?: number) => number;
  bool: (key: string, defaultValue?: boolean) => boolean;
} }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'), 
      ssl: env.bool('DATABASE_SSL', false), // Ensure this is set to false
    },
  },
});
