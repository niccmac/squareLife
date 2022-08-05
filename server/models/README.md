## Add models and migrations

(User model has already been created, and migration has been run)

1. Create a simple model with `npx sequelize-cli model:generate --name Frog --attributes firstName:string` (Creates 2 files; 1 in migrations and 1 in model)
2. Add the properties in model/frog.js to your desired properties
3. Add the values in migrations/20220714042323-create-frog.js to match the properties in the model.
4. Apply the migration in the database with `npx sequelize-cli db:migrate`

More [about migrations](https://sequelize.org/docs/v6/other-topics/migrations/)

If you need models with foreign keys, checkout [Associations](https://sequelize.org/docs/v6/core-concepts/assocs/)
