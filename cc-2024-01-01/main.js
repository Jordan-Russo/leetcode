// # url: https://leetcode.com/problems/rising-temperature/
// select t1.id 
// from Weather as t1, Weather as t2
// where t1.temperature > t2.temperature
// and Datediff(t1.RecordDate, t2.RecordDate) = 1 