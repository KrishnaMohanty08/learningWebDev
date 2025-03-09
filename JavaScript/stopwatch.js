function StopWatch(){
    let startTime,endTime,running=false,duration=0;

    this.start=function(){
        if(running)throw new Error("Already started");

        running=true;
        startTime= new Date;
        return ;
    }
    this.stop=function(){
        if(!running )throw new Error("not Started yet");
        running=false;
        endTime =new Date;

        duration=endTime.getTime()-startTime.getTime();
        duration=duration>60?(duration/60+duration%60):duration;

    }
    this.reset=function(){
        if(running)throw new Error("The clock is ticking");
        startTime=null;
        endTime=null;
        running=false;
        duration=0;

    }
    this.duration=function(){
        duration=endTime-startTime;
        duration=duration>60?(duration/60+duration%60):duration;
        
    }
    Object.defineProperty(this,'duration',{
        get :function(){return duration/1000;}
        });
}

const sw = new StopWatch();
sw.start();
// setTimeout(() => {
//     sw.stop();
//     console.log(`Duration: ${sw.duration} seconds`); // Output the duration in seconds
// }, 2000); // Stop after 2 seconds