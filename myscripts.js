$('ul li').click(function(){
    
    var clicked_href = $(this).children('a').attr('href');
    $('img').hide();
    $(clicked_href).show();



    var clicked_tab = $(this);
    
    
    clicked_tab.addClass('active');
    
    
    clicked_tab.parent().children('li').not(clicked_tab).removeClass('active');
});

$(document).ready(function(){
    var bag;
    if (localStorage.bag) {
        bag = JSON.parse(localStorage.bag);
    } else {
        bag = [];
       
    }
     localStorage.setItem("bag", JSON.stringify(bag));
    
$("#add").click(function(){
    var item = $("#item").html();
  var quantity = $("#quantity").val();
  var size = $("#size").val();
  var color = $("#color").val();
  var price =$(".price").html();
   $(".modal-body").append("Item: " + item);
   $(".modal-body").append("Quantity: " + quantity);
   $(".modal-body").append("Size: " + size);
   $(".modal-body").append("Color: " + color);
    bag.push({
         item: item,
         price: price,
         quantity: quantity,
         size : size,
         color:color
    });
    localStorage.setItem("bag", JSON.stringify(bag));
});

if($("body#checkout").length){
    var bag = JSON.parse(localStorage.bag);
    if (bag.length){
        console.log(localStorage.bag);
        for(var count=0;count<bag.length;count=count+1){
            console.log(bag[count]);
            $(".cart").append(bag[count].item);
            $(".cart").append(bag[count].price);
            $(".cart").append("<br>");


        }
    }else{
        $(".cart").append("No Items in the Cart");
    }
}
$("#empty").click(function(){
    localStorage.removeItem("bag")
    location.reload();
});
});

