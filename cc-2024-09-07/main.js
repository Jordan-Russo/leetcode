// url: https://leetcode.com/problems/design-twitter/
// Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the 10 most recent tweets in the user's news feed.

// Implement the Twitter class:

//     Twitter() Initializes your twitter object.
//     void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the user userId. Each call to this function will be made with a unique tweetId.
//     List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user themself. Tweets must be ordered from most recent to least recent.
//     void follow(int followerId, int followeeId) The user with ID followerId started following the user with ID followeeId.
//     void unfollow(int followerId, int followeeId) The user with ID followerId started unfollowing the user with ID followeeId.

 

// Example 1:

// Input
// ["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]
// [[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]
// Output
// [null, null, [5], null, null, [6, 5], null, [5]]

// Explanation
// Twitter twitter = new Twitter();
// twitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).
// twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5]. return [5]
// twitter.follow(1, 2);    // User 1 follows user 2.
// twitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).
// twitter.getNewsFeed(1);  // User 1's news feed should return a list with 2 tweet ids -> [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
// twitter.unfollow(1, 2);  // User 1 unfollows user 2.
// twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5], since user 1 is no longer following user 2.

class Twitter{
    constructor(){
        // post tweet: addition of tweets, that are userId + tweetId
        // get tweet: grabs and returns 10 most recent tweet Ids in the user's feed
            // must be made by the user or anyone they follow
            // ordered more recent to least recent
        // follow: followerId follows followeeId
        // unfollow: followwerId unfollows followeeId

        // need a datastructure of what user follows who
            // map / hash datastructure
                // value is a set of users
        this.follows = {};
        this.tweets = []
    }

    /** 
    * @param {number} userId 
    * @param {number} tweetId
    * @return {void}
    */
    postTweet(userId, tweetId){
        // each tweet is ordered but we need to know the user that made the post
        this.tweets.push([userId, tweetId]);
    }

    /** 
    * @param {number} userId
    * @return {number[]}
    */
    getNewsFeed(userId){
        let results = [];
        for(let i = this.tweets.length - 1; i >= 0; i--){
            const [user, tweetId] = this.tweets[i];
            if(user === userId || this.follows[userId]?.has(user)){
                results.push(tweetId);
                if(results.length === 10){return results}
            }
        }
        return results;
    }

    /** 
    * @param {number} followerId 
    * @param {number} followeeId
    * @return {void}
    */
    follow(followerId, followeeId){
        this.follows[followerId] ??= new Set();
        this.follows[followerId].add(followeeId);
        return;
    }

    /** 
    * @param {number} followerId 
    * @param {number} followeeId
    * @return {void}
    */
    unfollow(followerId, followeeId){
        this.follows[followerId]?.delete(followeeId);
        return;
    }


}
/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */