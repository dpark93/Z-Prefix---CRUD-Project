/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_table').del()
  await knex('user_table').insert([
    {user_id: 1, firstName: 'dan', lastName: 'john', username: 'maximus'},
    {user_id: 2, firstName: 'dan2', lastName: 'john2', username: 'prime'},
    {user_id: 3, firstName: 'dan3', lastName: 'john3', username: 'negatron'}
  ]);
};
