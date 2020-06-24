function init(nextDay) {
  
    //woodside
    document.getElementById("wframe_0").src = getURL(15, nextDay);
    
    //bridal
    document.getElementById("wframe_1").src = getURL(1, nextDay);
  
    //benny
    document.getElementById("wframe_2").src = getURL(5, nextDay);

    //Little Nic
    document.getElementById("wframe_3").src = getURL(131, nextDay);

    //pemby
    document.getElementById("wframe_4").src = getURL(15, nextDay);

    //Oscar, Savona
    document.getElementById("wframe_6").src = getURL(47, nextDay);

    //Hedly
    document.getElementById("wframe_7").src = getURL(40, nextDay);

    //Lumby
    document.getElementById("wframe_8").src = getURL(29, nextDay);

  }
  
  function getURL(zone, nextDay){
    
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
  
