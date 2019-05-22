function init(nextDay) {
  
    var site_0 = document.getElementById("wframe_0");
    //woodside
    site_0.src = getURL(0, nextDay);
    
     var site_0 = document.getElementById("wframe_1");
    //bridal
    site_0.src = getURL(1, nextDay);
  
     var site_0 = document.getElementById("wframe_2");
    //benny
    site_0.src = getURL(5, nextDay);
  
    var site_0 = document.getElementById("wframe_3");
    //pemby
    site_0.src = getURL(15, nextDay);
    
  }
  
  function getURL(zone, nextDay){
    
    // if(nextDay = nil){
    //   nextDay = 0;
    // }
    
    var ms = new Date().getTime() + 86400000 * nextDay;
    var date = new Date(ms);
    
    var thisYear = date.getFullYear();
    var thisMonth = date.getMonth() + 1;
    var thisDay = date.getDate();
    
    if(thisMonth < 10){
      thisMonth = "0" + thisMonth;
    }
    if(thisDay < 10){
      thisDay = "0" + thisDay;
    }
   
    var url = "http://canadarasp.com/windgrams-data/oneDay/"+thisYear+"-"+thisMonth+"-"+thisDay+"/hrdpswindgram"+zone+".png";
    return url
  }
  