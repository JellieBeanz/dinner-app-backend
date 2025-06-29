export default ({ env }: { env: {
  (key: string, defaultValue?: string | boolean | number): string | boolean | number;
  int: (key: string, defaultValue?: number) => number;
  bool: (key: string, defaultValue?: boolean) => boolean;
} }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'), 
      // If DATABASE_SSL is set to true we still allow the
      // connection even when the remote certificate is self-signed.
      // Heroku Postgres, Supabase and a few other providers expect
      // this behaviour. When DATABASE_SSL is false we disable SSL
      // altogether so the local development experience remains the same.
      ssl: env.bool('DATABASE_SSL', false)
        ? { rejectUnauthorized: false }
        : false,
    },
  },
});
