 

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bucketitempostimage').del()
    .then(function () {
      // Inserts seed entries
      return knex('bucketitempostimage').insert([
        {post_id: 3, url: "https://1bo9y82e76el2rf8ms1m5i0r-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/NaPaliRiders_Hcom_slider_v2.jpg"}
      ]);
    });
};

 