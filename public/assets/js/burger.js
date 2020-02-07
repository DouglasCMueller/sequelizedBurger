$(function () {

  $(".create-form").on("submit", function (event) {
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
      function (data) {
        console.log(data)
        console.log("Added new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".devourButton").on("click", function (event) {

    var id = $(this).data("id");

    console.log(id);
    var newDevoured = $(this).data("devoured");
    // console.log(newDevoured)
    var newDevouredState = {
      devoured: true
    };
    console.log({ newDevouredState })
    console.log(id)
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        console.log("updated burger to devoured with id: ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
