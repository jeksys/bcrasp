function init() {
  
    var site_0 = document.getElementById("wframe_0");
    //woodside
    site_0.src = getURL(0);
    
     var site_0 = document.getElementById("wframe_1");
    //bridal
    site_0.src = getURL(1);
  
     var site_0 = document.getElementById("wframe_2");
    //benny
    site_0.src = getURL(5);
  
    var site_0 = document.getElementById("wframe_3");
    //pemby
    site_0.src = getURL(5);
    
  }
  
  function getURL(zone){
    var thisYear = new Date().getFullYear();
    var thisMonth = new Date().getMonth() + 1;
    var thisDay = new Date().getDate();
    
    if(thisMonth < 10){
      thisMonth = "0" + thisMonth;
    }
    if(thisDay < 10){
      thisDay = "0" + thisDay;
    }
   
    var url = "http://canadarasp.com/windgrams-data/oneDay/"+thisYear+"-"+thisMonth+"-"+thisDay+"/hrdpswindgram"+zone+".png";
    return url
  }
  