
exports.seed = function(knex) {
  return knex('dogs').del()
    .then(function () {
      return knex('dogs').insert([
        {name: 'Spot', breed: 'terrier', age: 10},
        {name: 'Clifford', breed: 'poodle', age: 4},
        {name: 'Bixby', breed: 'bulldog', age: 2}
      ]);
    });
};
