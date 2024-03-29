/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    var ans = [];
  
    lists.forEach(function(item) {
      while (item) {
        ans.push(new ListNode(item.val));
        item = item.next;
      }
    });
  
    ans.sort(function(a, b) {
      return a.val - b.val;
    });
  
    if (!ans.length)
      return null;
  
    for (var i = 0, len = ans.length - 1; i < len; i++)
      ans[i].next = ans[i + 1];
  
    return ans[0];
  };