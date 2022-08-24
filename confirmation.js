let flightId = localStorage.getItem("FlightID");
let FirstName = localStorage.getItem("FirstName");
let LastName = localStorage.getItem("LastName");
let Gender = localStorage.getItem("Gender");
let Age = localStorage.getItem("Age");
let Email = localStorage.getItem("Email");
let PhoneNo = localStorage.getItem("PhoneNo");
let secondfname = localStorage.getItem("Second Passenger FirstName");
let secondlname = localStorage.getItem("Second Passenger LastName");
let secondage = localStorage.getItem("Second Passenger Age");
let secondgender = localStorage.getItem("Second Passenger Gender");
let Display = localStorage.getItem("display");
flightId -= 1;
//displaying contents on to screen
let content = '';

function display_details(data)  // on first submit click
{
    var departure = new Date(data[flightId].departTime)
    var arrival = new Date(data[flightId].ArrivalTime)

    content += `
    <div class="details" >
        
        <div class="confirmdisplay">
            <p> ${data[flightId].flightNum}</p>
            
            <p>Origin:  ${data[flightId].origin}</p>
            
            <p>Destination:  ${data[flightId].destination}</p>
            
            <p>Departure: ${departure.toUTCString()} </p>
            
            <p>Arrival: ${arrival.toUTCString()} </p>
            
            <p>Price: &#8377;${data[flightId].price}</p>
            
        </div>
        <div class="confirmdisplay" style="padding-bottom:145px;">
        <p>Name: ${FirstName} ${LastName}</p>
        <p>Age: ${Age}</p>
        <p>Email: ${Email}</p>
        <p>Gender:${Gender}</p>
        <p>Phone Number:${PhoneNo}</p>

        </div>
       

        </div>

        <button type="button" class="clicktohome" onclick="location.href='letsgo.html'">Home</button>
`
    document.querySelector("#displaydetails").innerHTML = content;
}

// display function on second submit click
function displayboth(data) {

    var departure = new Date(data[flightId].departTime)
    var arrival = new Date(data[flightId].ArrivalTime)

    content += `
    <div class="details" >
        
        <div class="confirmdisplay" style="padding-bottom:260px">
        <h3>Flight Details</h3>
            <p> ${data[flightId].flightNum}</p>
            
            <p>Origin:  ${data[flightId].origin}</p>
            
            <p>Destination:  ${data[flightId].destination}</p>
            
            <p>Departure: ${departure.toUTCString()} </p>
            
            <p>Arrival: ${arrival.toUTCString()} </p>
            
            <p>Price: &#8377;${data[flightId].price * 2}</p>
            
        </div>
        <div class="confirmdisplay">
        <h3>First Passenger </h3>
        <p> Name: ${FirstName} ${LastName}</p>
        <p>Age: ${Age}</p>
        <p>Email: ${Email}</p>
        <p>Gender:${Gender}</p>
        <p>Phone Number:${PhoneNo}</p>
        <br>
        <h3>Second Passenger Details</h3>
        <p> Name:${secondfname} ${secondlname}</p>
        <p>Age:${secondage}</p>
        <p>Gender:${secondgender}</p>
        </div>
       




    
    
    
    
    </div>
    <button type="button" class="clicktohome" onclick="location.href='letsgo.html'">Home</button>
    `
    document.querySelector("#displaydetails").innerHTML = content;
}

//check which submit button is clicked and call functions for displaying
if (Display == 1) {
    console.log("here");
    fetch('flights.json')
        .then(response => response.json())
        .then(data => display_details(data));

}
else {
    fetch('flights.json')
        .then(response => response.json())
        .then(data => displayboth(data));
}


