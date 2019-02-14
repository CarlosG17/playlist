/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Baka Mitai", "Shiawase Nara", "24 hour Cinderella", "Found a Light", "Like a Butterfly", "Drawing Days", "Kokoru Odoru(Heart's Dance)", "Snow Fairy", "Memories of You"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var imageLinks = ["https://upload.wikimedia.org/wikipedia/en/c/ca/Yakuza_original_logo.png","https://upload.wikimedia.org/wikipedia/en/7/7f/Yakuza_Kiwami_2.png","https://gamepedia.cursecdn.com/yakuza_gamepedia_en/3/3c/24-Hour_Cinderella.jpg?version=bdbf7be1acbebb7a29629a12ef45414f","https://i.ytimg.com/vi/FKz_KVimDSY/maxresdefault.jpg","https://yakuzafan.com/wp-content/uploads/2016/12/005-1.jpg","https://i.ytimg.com/vi/OL4qRM5t_1w/hqdefault.jpg","https://i.kym-cdn.com/photos/images/newsfeed/000/413/695/538.jpg","https://i.scdn.co/image/4a1ef6e25f34e801cc1f95112b100237ebd98d18","https://vignette.wikia.nocookie.net/megamitensei/images/0/0e/Tumblr_mvt9iazTxh1rabtpeo1_1383689315_cover.jpg/revision/latest?cb=20160824205251"];
var artists = ["Mitsuharu Fukuyama","Hidenori Shoji","ZENTA","LYN","Zenta","SPLAY","Nobody Knows","Funkist","Yumi Kawamura"];
var songLengths=["4:50","6:33","4:16","5:07","4:08","4:22","4:11","3:32","5:40"];
var links=["https://www.youtube.com/watch?v=3NjXJ39gdQg","https://www.youtube.com/watch?v=PTrbRMr3Bzk","https://www.youtube.com/watch?v=zMKGEyAmhkg","https://www.youtube.com/watch?v=IAJ3oyeptww","https://www.youtube.com/watch?v=lOf49157pFo","https://www.youtube.com/watch?v=1v2YhFRMy7U","https://www.youtube.com/watch?v=lTBd9TpT_v0","https://www.youtube.com/watch?v=SC6s6ATi90s","https://www.youtube.com/watch?v=jiiPjfueZEQ"];
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
        
        function displaySongInfo(){
    songs.forEach(function(song){
    $("#songs").append("<p>" + song + "</p>");
    });
    imageLinks.forEach(function(img){
    $("#images").append("<img src='" + img + "'>");
    });
    artists.forEach(function(artist){
    $("#artists").append("<p>" + artist + "</p>");
    });
    songLengths.forEach(function(length){
    $("#lengths").append("<p>" + length + "</p>");
    });
    links.forEach(function(link){
    $("#links").append("<a href='" + link + "'> Song Link </a>");
    });
 }



function emptySongInfo(){
    $("#songs").empty();
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}
    
function addSongInfo(){
    // Use jQuery to empty all of the remaining divs
  var userInput = $("#song").val();
         songs.push(userInput);
    var userInput2 = $("#artist").val();
         artists.push(userInput2);
    var userInput3 = $("#length").val();
         songLengths.push(userInput3);
    var userInput4 = $("#image").val();
         imageLinks.push(userInput4);
    var userInput5 = $("#link").val();
         links.push(userInput5);

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    console.log(songs[0]);
   displaySongInfo();
});
displaySongInfo();

