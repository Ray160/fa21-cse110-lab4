let print1s = setInterval(function(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}, 1000);