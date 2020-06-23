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
    //Little Nic
    site_0.src = getURL(131, nextDay);

    var site_0 = document.getElementById("wframe_4");
    //pemby
    site_0.src = getURL(15, nextDay);

    var site_0 = document.getElementById("wframe_6");
    //Oscar, Savona
    site_0.src = getURL(47, nextDay);

    var site_0 = document.getElementById("wframe_7");
    //Hedly
    site_0.src = getURL(40, nextDay);

    var site_0 = document.getElementById("wframe_8");
    //Lumby
    site_0.src = getURL(29, nextDay);

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
  
