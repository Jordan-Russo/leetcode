// # url: https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/
// select 
// distinct 
// t1.customer_id,
// count(t1.customer_id) - count(t2.visit_id) as count_no_trans
// from
// Visits as t1
// left join Transactions as t2
// on t1.visit_id = t2.visit_id
// group by t1.customer_id
// having count_no_trans > 0