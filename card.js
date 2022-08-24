function display_cards(flight_det){
    const number_of_flights = Object.keys(flight_det).length; //number of flights in the json
    //console.log(number_of_flights);
    let content = '';
    for(let count=0;count<number_of_flights;count++){    //for each flights in json
        let flight = flight_det[count];

        
        const departure = new Date(flight.departTime)  //departure and arrival time storing
        const arrival = new Date(flight.ArrivalTime)
        //dsiplaying on each card flight details 
        content +=  `                                  
        <div class="card" >
            <div class="card-body">
               
                <p class="Flight-number">${flight_det[count]['flightNum']}</p>
                
                <p class="origin">${flight_det[count]['origin']} - 
               
                ${flight_det[count]['destination']}</p>
                <h6 class="depart">Departure:</h5>
                <p class="departure-time">   ${departure.toUTCString()}</p>
                <h6 class="arr">Arrival:</h5>
                <p class="arrival-time">${arrival.toUTCString()}</p>
                <h5 class="cost">Price: &#8377;${flight_det[count]['price']}</h5>
                <button type="button"  class="button" onclick="flightid(${flight_det[count]['id']})">Proceed</button>
            </div>
        </div>

    `
    

    }

    document.querySelector("#card-collection").innerHTML = content;
}

function flightid(fID){
    localStorage.clear();

    localStorage.setItem("FlightID",fID);
    console.log(fID);
    location.href = 'booking.html';
}


//fetching flight details from json
fetch('flights.json')
.then(response => response.json())
.then(data => display_cards(data)); // calling function 

