let x=1;
const autoWrite=document.getElementById('auto');

      const autowritee=()=>{
      const title="Mohamed Shalash  - software enginner & frontend developer  ."
      auto.innerText=title.slice(0,x);
      x++;
      if(title.length<x){
           x=1;
        }
        };

const stoop=setInterval(autowritee,300);