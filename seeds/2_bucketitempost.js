
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bucketitempost').del()
    .then(function () {
      // Inserts seed entries
      return knex('bucketitempost').insert([
        {item_id: 1, message: 'I did not drive one'},
        {item_id: 1, message: 'They are too damn expensive'},
        {item_id: 2, message: 'I finally went to Hawaii'},
        {item_id: 3, message: 'I a pizza'},
        {item_id: 3, message: 'Burned my tongue'},
        {item_id: 4, message: 'Did not make it to Alaska'},
        {item_id: 4, message: 'Plane crashed'},
        {item_id: 4, message: 'End of bucket list'},
        {item_id: 5, message: 'Drove a Lambo'},
        {item_id: 5, message: 'Immediately crashed it'},
        {item_id: 6, message: 'Ate a taco'},
        {item_id: 6, message: 'Now have gas'},
        {item_id: 7, message: 'Still poor as ever'},
        {item_id: 8, message: 'Blue screen of death'},
      ]);
    });
};
