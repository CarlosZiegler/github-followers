const { getUserDataFromGithub } = require('../services/getUserData.js')
const { getUserFollowersFromGithub } = require('../services/getUserFollowers')
const { getUserFollowingFromGithub } = require('../services/getUserFollowing')

module.exports = {
    async getUser(req, res, next) {
        const { username } = req.params
        const user = await getUserDataFromGithub(username)
        try {
            res.json(user)
        } catch (error) {
            res.json(error)
        }
    },
    async getAllFollowers(req, res, next) {
        try {
            const { username } = req.params
            const allFollowers = await getUserFollowersFromGithub(username)
            const allFollowing = await getUserFollowingFromGithub(username)

            const isFollowed = allFollowers.filter(follower => allFollowing.includes(follower))
            const isNotFollowed = allFollowers.filter(follower => !allFollowing.includes(follower))

            res.json({ isFollowed, isNotFollowed })
        } catch (error) {
            res.status(404).json(error)
        }
    },
}
