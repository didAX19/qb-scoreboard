QBScoreboard = {}

window.addEventListener("message", (event) => {
  switch (event.data.action) {
    case "open":
      Open(event.data);
      break;
    case "close":
      Close();
      break;
    case "setup":
      Setup(event.data);
      break;
  }
});


QBScoreboard.fadeInLeft = function(element, percent, time) {
  $(element).css({"display":"block"}).animate({right: percent,}, time);
}

QBScoreboard.fadeOutLeftOut = function(element, percent, time) {
  if (percent !== undefined) {
      $(element).css({"display":"block"}).animate({right: percent,}, time, function(){
          $(element).css({"display":"none"});
      });
  } else {
      $(element).css({"display":"block"}).animate({right: "-30%",}, time, function(){
          $(element).css({"display":"none"});
      });
  }
}

const Open = (data) => {
  QBScoreboard.fadeInLeft('.scoreboard-block', '1.8%', 450);
 /*  $(".scoreboard-block").fadeIn(150); */

  $("#status-tab-label").html("<p>Play Time: "+data.playTime+"</p>");
  $("#info-tab-label").html("<p>ID: "+data.PlayerId+"</p>");

  $.each(data.IllegalActions, (i, category) => {
    var beam = $(".scoreboard-info").find('[data-type="' + category.name + '"]');
    var status = $(beam).find(".info-beam-status");

    if (category.busy) {
      $(status).html('<i class="fa-solid fa-clock fa-lg"></i>');
    } else if (data.currentCops >= category.minimumPolice) {
      $(status).html('<i class="fa-solid fa-lock-open fa-lg"></i>');
    } else {
      $(status).html('<i class="fa-solid fa-lock fa-lg"></i>');
    }
  });
  
  
  $.each(data.availableJobs, (job, Jcount) => {
    var Jbeam = $(".scoreboard-info").find('[data-type="job-'+job+'"]');
    var Jstatus = $(Jbeam).find(".info-beam-status");
    $(Jstatus).html(Jcount);
  });

  $("#total-players").html(data.players + "/" + data.maxPlayers);
};

const Close = () => {
  QBScoreboard.fadeOutLeftOut('.scoreboard-block', '-30%', 650)
  /* $(".scoreboard-block").fadeOut(150); */
};

const Setup = (data) => {
  let scoreboardHtml = "";
  scoreboardHtml += `
    <div class="scoreboard-info-header">
      <div id="info-tab-label"><p>CCP: 19</p></div>
      <div id="status-tab-label"><p>Play Time: 00h 00m</p></div>
    </div>
    <div class="scoreboard-info-beams">
  `;
  $.each(data.creminalJobs, (index, value) => {
    scoreboardHtml += `
      <div class="scoreboard-info-beam" data-type="${value[0]}">
        <div class="info-beam-title">
          <p>${value[1]}</p>
        </div>
        <div class="info-beam-status"></div>
      </div>
    `;
  });
  $.each(data.availableJobs, (index, value) => {
    scoreboardHtml += `
        <div class="scoreboard-info-beam" data-type="job-${value[0]}">
          <div class="info-beam-title">
            <p>${value[1]}</p>
          </div>
          <div class="info-beam-status"></div>
        </div>
    `;
  });
  scoreboardHtml += `
      <div class="scoreboard-info-beam total-players-beam">
        <div class="info-beam-title"><p>Total Players</p></div>
        <div class="info-beam-number" id="total-players"></div>
      </div>
    </div>
  </div>
  `;
  $(".scoreboard-info").html(scoreboardHtml);
  var blockHeight = ((Object.keys(data.availableJobs).length*4) + (Object.keys(data.creminalJobs).length*4) + 16.7);
  $('.scoreboard-block').css({"height":blockHeight+"vh"})
};

Setup({
  creminalJobs : [
    ["CitizenKidnap", "Citizen kidnapping"],
    ["storerobbery", "Store Robbery"],
    ["Houserobbery", "House Robbery"],
    ["atm", "ATM Robbery"],
    ["jewellery", "Jewellery"],
    ["fleeca", "Bank Robbery"],
    ["paleto", "Paleto Bay Bank"],
    ["art_rob", "ART Robbery"],
    ["bobcat", "Bobcat Robbery"],
    ["Humanlabs", "Humanlabs Robbery"],
    ["Yachtrobbery", "Yacht Robbery"],
    ["pacific", "Pacific Bank"],
    ["PoliceKidnap", "Police kidnapping"],
  ],
  availableJobs : [
    ["police", "Police"],
    ["ambulance", "Ambulance"],
    ["mechanic", "Machanic"],
  ],
});

/* Open({
  action : "open",
  PlayerId : 19,
  playTime : "1h 9m",
  ping: 55,
  currentCops: 9,
  IllegalActions : [
    {
      name : "CitizenKidnap",
      minimumPolice : 4,
      busy : false,
      label : "Citizen kidnapping"
    },
    {
      name : "storerobbery",
      minimumPolice : 4,
      busy : false,
      label : "Store Robbery",
    },
    {
      name : "Houserobbery",
      minimumPolice : 4,
      busy : false,
      label : "House Robbery"
    },
    {
      name : "atm",
      minimumPolice : 4,
      busy : false,
      label : "ATM Robbery",
    },
    {
      name : "jewellery",
      minimumPolice : 6,
      busy : false,
      label : "Jewellery"
    },
    {
      name : "fleeca",
      minimumPolice : 6,
      busy : false,
      label : "Bank Robbery"
    },
    {
      name : "paleto",
      minimumPolice : 7,
      busy : true,
      label : "Paleto Bay Bank"
    },
    {
      name : "art_rob",
      minimumPolice : 7,
      busy : false,
      label : "ART Robbery",
    },
    {
      name : "bobcat",
      minimumPolice : 7,
      busy : false,
      label : "Bobcat Robbery"
    },
    {
      name : "Humanlabs",
      minimumPolice : 8,
      busy : true,
      label : "Humanlabs Robbery"
    },
    {
      name : "Yachtrobbery",
      minimumPolice : 8,
      busy : false,
      label : "Yacht Robbery"
    },
    {
      name : "pacific",
      minimumPolice : 10,
      busy : false,
      label : "Pacific Bank"
    },
    {
      name : "OilRig",
      minimumPolice : 10,
      busy : false,
      label : "Oil Rig Heist"
    },
    {
      name : "SubMarine",
      minimumPolice : 15,
      busy : false,
      label : "Submarine Heist"
    },
    {
      name : "PoliceKidnap",
      minimumPolice : 15,
      busy : false,
      label : "Police kidnapping"
    },
  ],
  coldowntxt : 19,
  players : 190,
  maxPlayers : 190,
  jobsOnOff: false,
  availableJobs : {
    ["police"] : 9,
    ["ambulance"] : 4,
    ["mechanic"] : 3,
    ["cardealer"] : 0,
    ["taxi"] : 1,
  },
});
 */
