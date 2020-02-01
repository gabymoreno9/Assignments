class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = []
    }

    addAvailableTickets(name, price) {
        this.availableTickets.push(new TicketType(name, price));
    }

    allTickets(){
        let answer = "All Tickets: "
        for (let i = 0; i < this.availableTickets.length; i++){
            let ticket = this.availableTickets[i];
            answer += `${i + 1}. ${ticket.name} ($${ticket.price}) `
        }
        return answer
    }
    searchTickets(lower, upper){
        let tickets = []
        for (let i = 0; i < this.availableTickets.length; i++){
            let ticket = this.availableTickets[i];
            if (ticket.price >= lower && ticket.price <= upper) {
                tickets.push(ticket)
            }
        }
        
        if (tickets.length === 0) {
            return "No tickets available"
        }
        else {
            let answer = "Eligible Tickets: "
            for (let i = 0; i < tickets.length; i++){
                answer += `${i + 1}. ${tickets[i].name} ($${tickets[i].price}) `
            }
            return answer
        }
    }

}

class TicketType{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

  // The below statement creates an object.
const eventObj1 = new Event("KLOS Golden Gala", "An evening with hollywood vampires");

const eventObj2 = new Event("Skillet & Sevendust", "Victorious war tour");
const eventObj3 = new Event("Jenny Lewis", "On the line tour 2019");

const eventArray = new Array();


// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);

// in order to check whether the elements are pushed, use console.log
console.log(eventArray);

$(document).ready(function() {
    let html = "";
    $.each(eventArray, function(index, item) {
      html+= `<li>${item.name} - ${item.description} - ${item.searchTickets(50, 200)}</li>`;
    });
    // insert final html into #event...
    $("#event").html(html);
  });

  eventObj1.addAvailableTickets("human", 299);
  eventObj1.addAvailableTickets("vampire", 99);

  eventObj2.addAvailableTickets("General Admission", 25)
  eventObj2.addAvailableTickets("Floor Seating", 80)

  eventObj3.addAvailableTickets("Orchestra", 300)
  eventObj3.addAvailableTickets("Mezzanine", 200)
  eventObj3.addAvailableTickets("Balcony", 100)