// # url: https://leetcode.com/problems/employee-bonus/
// # Write your MySQL query statement below
// # Given Employee and Bonus table
// # Return all employees who have a bonus less than 1000
// select 
// t1.name,
// t2.bonus
// from Employee as t1
// left join Bonus as t2
// on t1.empId = t2.empId
// where t2.bonus < 1000
// or t2.bonus is NULL;