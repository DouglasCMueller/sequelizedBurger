$(function() {
    // $(".change-devoured").on("click", function(event) {
    //   var id = $(this).data("id");
    //   var newDevoured = $(this).data("newDevoured");
  
    //   var newDevouredState = {
    //     devoured: newDevoured
    //   };
  
    //   // Send the PUT request.
    //   $.ajax("/api/burgers/" + id, {
    //     type: "PUT",
    //     data: newDevouredState
    //   }).then(
    //     function() {
    //       console.log("changed devoured to", newDevoured);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#userInputBurger").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      
      }).then(
        function() {
          console.log(newBurger)
          console.log("Added new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".devourButton").on("click", function(event) {
  
      var id = $(this).data("id");
     
console.log(id);
var newDevoured = $(this).data("devoured");
console.log(newDevoured)
var newDevouredState ={
  devoured: true
};
  console.log(newDevouredState)
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("updated burger to devoured", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  });
  