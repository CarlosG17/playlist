/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Baka Mitai", "Shiawase Nara", "24_hour Cinderella", "Found a Light", "Rise"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var imageLinks = ["https://www.google.com/search?q=koi+no+disco+queen&safe=active&rlz=1CANQDY_enUS808&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi8y4mw8PXfAhUQrVkKHQXDDu4Q_AUIECgD&biw=1366&bih=610#imgrc=tcvDcHXsUmdQMM:"];
var artists = [""];
var songLengths=[""];
var links=["https://www.youtube.com/watch?v=3NjXJ39gdQg&list=FLI7CR_7EXIHM51BtHldJxnw&index=2&t=0s","https://www.youtube.com/watch?v=UkxIiWuauUU&list=FLI7CR_7EXIHM51BtHldJxnw&index=46", "https://www.youtube.com/watch?v=2qPSnq9YoYY&list=FLI7CR_7EXIHM51BtHldJxnw&index=75","https://www.youtube.com/watch?v=UHoOkZ7zWu4&t=0s&index=25&list=FLI7CR_7EXIHM51BtHldJxnw", ];



    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
    
      imageLinks.forEach(function(pic){
          $("body").append("<img src=" + pic + ">");
          console.log("hi")
      });
      


function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
