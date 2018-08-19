let animalContainer = document.getElementById("animal-info");
exports.renderHTML = renderHTML=(data)=>{
let htmlString = "";

for (i = 0; i< data.length; i++){
    htmlString += "<p>"+ data[i].name + " is a "+ data[i].species+ "that likes to eat ";
    for (ii =0; ii<data[i].foods.likes.length;ii++){
        if(ii==0){
        htmlString+=data[i].foods.likes[ii];}
        else{
           htmlString +=" and " + data[i].foods.likes[ii];  
        }
    }
htmlString += " and dislikes ";
     for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
       if (ii == 0) {
         htmlString += data[i].foods.dislikes[ii];
       } else {
         htmlString += " and " + data[i].foods.dislikes[ii];
       }
     }
    htmlString+="</p>";
}

animalContainer.insertAdjacentHTML('beforeend',htmlString);}
