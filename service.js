function init(nextDay) {
  
  let sites = [
  {
    name: "woodside",
    frame: "wframe_0",
    code: 0
  },
  {
    name: "bridal",
    frame: "wframe_1",
    code: 1
  },
  {
    name: "benny",
    frame: "wframe_2",
    code: 5
  },
  {
    name: "Little Nic",
    frame: "wframe_3",
    code: 131
  },
  {
    name: "Pemby",
    frame: "wframe_4",
    code: 15
  },
      {
    name: "Oscar, Savona",
    frame: "wframe_6",
    code: 47
  },
  {
    name: "Hedley",
    frame: "wframe_7",
    code: 40
  },
  {
    name: "Hedley",
    frame: "wframe_8",
    code: 29
  }
];
  
  for (i = 0; i < sites.length; i++) {
  document.getElementById(sites[i].frame).src = getURL(sites[i].code, nextDay);
}

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
  
