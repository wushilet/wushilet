  $(function() {
   myPrint([""], 100);
 
   function myPrint(arr, speed) {
    var index = 0;
    var str = arr[index];
    var i = 0;
    var add = true;
    var mySetInterval = setInterval(function() {
     // 延时4个字符的时间
     if (i == str.length + 4) {
      add = false;
      // 如果是最后一个字符串则终止循环函数
      if (index + 1 >= arr.length) {
       clearInterval(mySetInterval);
      }
     } else if (i == -2) {
      // 删除后延时2个字符的时间
      add = true;
      str = arr[++index];
     }
     setTimeout(function() {
      if (add) {
       i++;
       $(".text").html(str.substring(0, i));
      } else {
       $(".text").html(str.substring(0, i - 1));
       i--;
      }
     })
 
    }, speed)
   }
 
  })
