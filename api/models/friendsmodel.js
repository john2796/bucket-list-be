const db = require("../../data/dbConfig");

module.exports = {
    getFriends,
    createFriend,
    deleteFriend,
}

function getFriends(id) {

    return db
    .select('friend_id', 'name', 'email')
    .from('friends')
    .join('users', 'users.id', 'friends.friend_id')
    .where({user_id: id})
    
   // return db.raw(`SELECT friend_id, name, email FROM friends JOIN users ON users.id = friends.friend_id WHERE friends.user_id = ${id}`);
}

async function createFriend(user_id, friend_id) {

    const result = await db('friends')
    .where({user_id: user_id, friend_id: friend_id} )
    .first();

    if (result)
        return {exists: result};

    const user = await db('users')
    .where({id: user_id})
    .first();

    const friend = await db('users')
    .where({id: friend_id})
    .first();

    if (!user)
        return {bad_user: 'User ID is invalid'}

    if ( !friend)
        return {bad_friend: 'Friend ID is invalid'}

    const userid = await db('friends')
    .insert({user_id: user_id, friend_id: friend_id});

    return userid;
}

function deleteFriend(user_id, friend_id){
    return db('friends')
    .where({user_id: user_id, friend_id: friend_id})
    .del();
}