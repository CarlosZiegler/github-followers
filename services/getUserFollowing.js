const axios = require('axios');

const getUserFollowingFromGithub = async (username) => {
    const result = await axios.get(`https://api.github.com/users/${username}/following?per_page=1000`)
    const following = result.data.map(follower => follower.login)
    return result.data
}

module.exports = { getUserFollowingFromGithub }
