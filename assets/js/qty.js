// 商品資訊的數量鈕

$(function() {
    // This button will increment the value
    $('.qtyplus').click(function(e) {
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      fieldName = $(this).attr('field');
      // Get its current value
      var currentVal = parseInt($('input[name=' + fieldName + ']').val());
      // If is not undefined
      if (!isNaN(currentVal)) {
        // Increment
        $('input[name=' + fieldName + ']').val(currentVal + 1);
      } else {
        // Otherwise put a 0 there
        $('input[name=' + fieldName + ']').val(0);
      }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      fieldName = $(this).attr('field');
      // Get its current value
      var currentVal = parseInt($('input[name=' + fieldName + ']').val());
      // If it isn't undefined or its greater than 0
      if (!isNaN(currentVal) && currentVal > 1) {
        // Decrement one
        $('input[name=' + fieldName + ']').val(currentVal - 1);
      } else {
        // Otherwise put a 0 there
        $('input[name=' + fieldName + ']').val(1);
      }
    });
  });

// 購物車按鈕
var app = new Vue({
  el:'#app',
  data:{
      itemList:[
        {
          id:'1',
          itemName:'寶可夢 劍',
          imgUrl:'../assets/img/1.jpg',
          price:'1790',
          count:'2'
        },
        {
          id:'2',
          itemName:'寶可夢 劍',
          imgUrl:'../assets/img/1.jpg',
          price:'1790',
          count:'3'
        },
        {
          id:'3',
          itemName:'寶可夢 劍',
          imgUrl:'../assets/img/1.jpg',
          price:'1790',
          count:'1'
        },
        {
          id:'4',
          itemName:'寶可夢 劍',
          imgUrl:'../assets/img/1.jpg',
          price:'1790',
          count:'1'
        },
        
  ]
  },
  methods:{
      handlePlus: function(item){
          item.count++;
      },
      handleSub: function(item){
          if(item.count>1){
          item.count--;                
          }
      },
      handledelete: function(index){
          console.log(this);
          this.itemList.splice(index,1);
      }
  },
  computed:{

  }
})


