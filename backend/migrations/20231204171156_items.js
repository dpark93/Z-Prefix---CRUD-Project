/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('item_table', table =>{
        table.increments('item_id');
        table.integer('userID');
        table.foreign('userID').references('user_table.user_id')
        table.string('item_Name', 250);
        table.string('description', 250);
        table.integer('quantity');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable ('item_table', table =>{
        table.dropForeign('userID');
      })
      .then(function(){
        return knex.schema.dropTableIfExists('item_table')
      })  
};
