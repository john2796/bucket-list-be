exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bucketitem').del()
    .then(function () {
      // Inserts seed entries
      return knex('bucketitem').insert([
        {user_id: 1, description: 'Drive a Ferrari'},
        {user_id: 1, description: 'Go to Hawaii'},
        {user_id: 1, description: 'Eat a pizza'},
        {user_id: 2, description: 'Go to Alaska'},
        {user_id: 2, description: 'Drive a Lambo'},
        {user_id: 2, description: 'Eat a taco'},
        {user_id: 2, description: 'Get rich'},
        {user_id: 2, description: 'Buy a computer'},
      ]);
    });
};