import axios from 'axios';
import {renderHTML} from './render'
let btn = document.getElementById('btn');
let pageCounter =  1;
btn/addEventListener("click",()=>{
axios
  .get(`https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`)
  .then(response => {
    console.log(response.data[0]);
    renderHTML(response.data);
  })
  .catch(error => {
    console.log(error);
  })
  .then(() => {});
  pageCounter++;
  if (pageCounter>3){
      btn.classList.add("hide-me");
  }
});

