/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('item_table').del()
  await knex('item_table').insert([
    {item_id: 1, userID: 1, item_Name: 'pencil', description: 'example of how a long description will cut off and display ..., although not 100c that will be future goals. writing utensil', quantity: 1},
    {item_id: 2, userID: 2, item_Name: 'eraser', description: 'erasing stuff', quantity: 2},
    {item_id: 3, userID: 3, item_Name: 'paper', description: 'made from trees', quantity: 3},
  ]);
};
