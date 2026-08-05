/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
const wealth=accounts.map(custemer=>
custemer.reduce((sum,mony)=>sum+mony,0));
const total=Math.max(...wealth)
return total
};