exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('username')
    table.string('auth0id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}

