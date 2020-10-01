const axios = require('axios');

const getUserFollowersFromGithub = async (username) => {
    const result = await axios.get(`https://api.github.com/users/${username}/followers?per_page=100`)
    const followers = result.data.map(follower => follower.login)
    return result.data
}

module.exports = { getUserFollowersFromGithub }
