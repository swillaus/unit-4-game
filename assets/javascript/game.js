// set up variables with random number generated and a randomally generated number associated to the crystals
$(document).ready(function () {

    function RandomNumberGenerator(min, max) {
        return Math.floor(Math.random() * (max - min)) + min
    }

    // function JQ(tag) {
    //     this.isClass = function (tag) {
    //         if (tag[0] === ".") {
    //             return true
    //         }
    //     }
    //     this.isId = function (tag) {
    //         if (tag[0] === "#") {
    //             return true
    //         }
    //     }
    //     this.on = function(listener, cb){
    //         if(listener === "click"){
    //             if(this.isId){
    //                 document.getElementById(tag.split("").slice(1).join("")).addEventListener("click", cb)
    //             }
    //         }
    //     }
    // }
    // var jq = new JQ("#button")
    // jq.on("click", function(){
    //     console.log("created our own jquery")
    // })

    // Set up Variable for Crystal 1-4
    // var Crystal1 = 0;
    // var Crystal2 = 0;
    // var Crystal3 = 0;
    // var Crystal4 = 0;

    // Set up variable to generate random target number (green box)
    var targetNumber = 0;

    // Set up variable to keep track of total score (dark green box)
    var userNumber = 0;

    // Variable for cummulative wins and losses
    var wins = 0;
    var losses = 0;

    Start()
    // Set up function to initate the game on doc load
    function Start() {
        userNumber = 0;
        $("#userNumber").text(userNumber);
        targetNumber = RandomNumberGenerator(75, 100);
        $("#targetNumber").text(targetNumber)

        $("#wins").text(wins)
        $("#losses").text(losses)

        $("#crystal1").attr("data-val", RandomNumberGenerator(1, 3))
        $("#crystal2").attr("data-val", RandomNumberGenerator(3, 6))
        $("#crystal3").attr("data-val", RandomNumberGenerator(6, 9))
        $("#crystal4").attr("data-val", RandomNumberGenerator(1, 10))
    }


    // Set up function to take user input when clicking crystals
    $(".crystal-btn").on("click", clickedCrystal)

    function clickedCrystal() {
        console.log(this)
        userNumber += parseInt($(this).attr("data-val"));
        $("#userNumber").text(userNumber);

        if (userNumber > targetNumber) {
            losses++;
            alert("You Lost! Better luck next time")
            Start();
        }
        else if (userNumber === targetNumber) {
            wins++;
            alert("You won! Keep trying")
            Start();
        }
    }


    // Set up function to add to scores and reload page on a result





    // Execute functions above







})