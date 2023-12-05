/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_table').del()
  await knex('user_table').insert([
    {user_id: 1, firstName: 'dan', lastName: 'john', username: 'optimus'},
    {user_id: 2, firstName: 'john', lastName: 'deer', username: 'prime'},
    {user_id: 3, firstName: 'sdi', lastName: 'twentyone', username: 'autobots'},
    {user_id: 4, firstName: 'admin', lastName: 'admin', username: 'admin'}
  ]);
};
