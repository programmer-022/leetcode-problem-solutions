/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    var arr = [];
  
    while (head) {
      arr.push(new ListNode(head.val));
      head = head.next;
    }
  
    arr.splice(-n, 1);
  
    for (var i = 0, len = arr.length; i < len - 1; i++)
      arr[i].next = arr[i + 1];
    
    return arr.length === 0 ? null : arr[0];
  };