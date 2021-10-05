/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    if (!head)
      return null;
    
    var arr = [];
  
    while (head) {
      var next = head.next;
      head.next = null;
      arr.push(head);
      head = next;
    } 
  
    var len = arr.length;
  
    for (var i = 0; i < len; i+= 2) {
      var a = arr[i];
      var b = arr[i + 1];
  
      if (!b)
        continue;
  
      arr[i] = b;
      arr[i + 1] = a;
    }
  
    for (var i = 0; i < len - 1; i++)
      arr[i].next = arr[i + 1];
  
    return arr[0];
  };