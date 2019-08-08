
$("document").ready(function(){
    //Add a new burger
    $("#submit").on("click",function(event){
        event.preventDefault();
        var newBurger = {
            newBurgerName :$("#inputID").val()
        }
        console.log(newBurger)
        $.post("/burgers", newBurger)
        .then(function(data){
            console.log(data);
        });
        console.log(newBurger);
        location.reload() 


 
    });
    //Eats the burger
    $(".btnID").on("click",  function(event){
        event.preventDefault();
        var clickedBurger = event.target.id;
        var queryString = "/burgers/" + clickedBurger;
        console.log(clickedBurger);
        $.ajax({
            url: queryString,
            type: "PUT"
            
        }).then(function(data){
            
            location.reload();
            
            

        })
    })
});