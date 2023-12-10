//Task - 1

let MyTime = {
   hours: 0,
   minutes: 0,
   seconds: 0,

   timeStr(){ return `${this.hours}:${this.minutes}:${this.seconds}`},
   
   ShowTime(){console.info(`${this.timeStr()}\n`);},

   ChangeSeconds(time,sec){
      let tempDate = new Date(0,0,0,time.hours,time.minutes,time.seconds);
      tempDate.setSeconds(tempDate.getSeconds()+sec);
      time.seconds = tempDate.getSeconds();     
      time.hours =  tempDate.getHours();
      time.minutes = tempDate.getMinutes();
   },

   SecondUp(time){this.ChangeSeconds(time,1);},

   SecondDown(time){this.ChangeSeconds(time,-1);},

   WriteTimeToHTML(){
       document.open();
       document.write(`<h1>${this.timeStr()}</h1>`);
       document.close();
   }
}

MyTime.ShowTime();
MyTime.SecondUp(MyTime);
MyTime.SecondUp(MyTime);
MyTime.ShowTime();
MyTime.SecondDown(MyTime);
MyTime.ShowTime();
MyTime.WriteTimeToHTML();

//Task - 2

let MyCar = {
   brand: "Audi",
   model: "A8",
   year:2011,
   average_speed:130,

   showInfo(){
      alert(`Car info
      Brand:    "${this.brand}"
      Model:    "${this.model}"
      Year:        ${this.year} year
      ASpeed:  ${this.average_speed} km/h`);
   },

   getDistanceTime()
   {
      let distance = +prompt("Enter distance in km:");
      if(Number.isNaN(distance))
      {
         alert("Invalid entered distance...");
        
      }
      else{
         let time = distance / this.average_speed;
         let hours = parseInt(time);
         let minutes = Math.round((time - hours)*60);
         hours +=parseInt(hours/4) ;
         console.info(distance % this.average_speed);
         alert(`The car will travel a distance of ${distance} km in ${hours} hours ${minutes} min`);
      }
      
   }
}

MyCar.showInfo();
MyCar.getDistanceTime();