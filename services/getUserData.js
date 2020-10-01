const axios = require('axios');

const getUserDataFromGithub = async (username) => {
    const result = await axios.get(`https://api.github.com/users/${username}`)
    return result.data
}

module.exports = { getUserDataFromGithub }
