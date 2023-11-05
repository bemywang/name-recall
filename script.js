$(document).ready(function() {
    $(".submit-button").click(function() {
      // Retrieve the input values
      var inputs = [];
      $(".input-row input").each(function() {
        inputs.push($(this).val());
      });

      // Handle the submission
      handleSubmission(inputs);
    });




    $(".start-btn > button").click(function() {
      console.log("clicked");
      $(".start-btn").addClass("kickOff");
      $(".start-title").addClass("kickOff");
      $(".intro").addClass("kickOff");

      


      // remove elements after pressing btn
      $(".start-btn").on("animationend", function() {
        $(this).remove(); // Remove the button element
        showGame();
      });

      $(".start-title").on("animationend", function() {
        $(this).remove();
        showGame();
      });

      $(".intro").on("animationend", function() {
        $(this).remove();
        showGame();
      });
      updateContent(0);


      $(".re-watch").click(function() {
        location.reload();
      });



 
    });

    function updateContent(index) {
      


      if (index >= namePool.length) {
        $(".name-section").fadeOut(500, function() {
          $(this).addClass("hidden");
          $(".input-section").fadeIn(500, function() {
            $(this).removeClass("hidden");
          });
        });



        

      } else {
        $(".name-section").removeClass("hidden").hide();

        const faceName = namePool[index].name;
        const faceImg = namePool[index].imgSrc;
        const faceGreet = namePool[index].greeting;
      
        const imgElement = $("img").attr("src", faceImg);
        const greetElement = $(".greetFromCeleb").text(faceGreet);
        const currentNo = $(".gameIndex").text(index + 1);
        
        $(".name-section").fadeIn(1000, function() {
          // Animation complete callback
          setTimeout(function() {
            updateContent(index);
          }, 2000);
        });
      }

      index++;
      

    }

    function showGame() {
        $(".game-container").remove("hidden").addClass("visible");
    }

  });


  function handleSubmission(inputs) {
    var lowercaseInputs = inputs.map(function(input) {
      return input.toLowerCase();
    });

    var lowercaseAnswers = namePool.map(function(celebrity) {
      return celebrity.name.toLowerCase();
    });

    var isCorrect = lowercaseInputs.every(function(input, index) {
      return input === lowercaseAnswers[index];
    });

    if (isCorrect) {
      console.log("All correct!");
      $(".submit-button").addClass("hidden");

      $(".result").removeClass("hidden");
      $(".wrongText").addClass("hidden");
    } else {
      console.log("Oops! Incorrect!");
      $(".submit-button").addClass("hidden");
  
      $(".result").removeClass("hidden");
      $(".correctText").addClass("hidden");
      $(".wrongText").removeClass("hidden");


    // Add background color to incorrect inputs
    $(".input-row input").each(function(index) {
      if (lowercaseInputs[index] !== lowercaseAnswers[index]) {
        $(this).css("background-color", "#E8AA42");
      }
    });
    }


  };
