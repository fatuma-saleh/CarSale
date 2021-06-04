
window.onload = () => {
  if(localStorage.getItem("carStorage")) {
  
    let storage = JSON.parse(localStorage.getItem("carStorage"))

    let cards = document.getElementById("cards");
    
    
    storage.forEach(item => {
      const content = `
        <div class="ui card">
          <div class="content">
            <div class="header">${item.vehicle.make} ${item.vehicle.model}</div>
            <div class="meta">${item.vehicle.year} - ${item.sellerName} </div>
            <div class="description">
              <div class="ui small header">
                Features: 
              </div>
              <div class="ui bulleted list">
                <div class="item">Air Conditioning: ${item.features.ac}</div>
                <div class="item">Backup Camera: ${item.features.backCamera}</div>
                <div class="item">Heated Seats: ${item.features.heatedSeats}</div>
                <div class="item">TPMS: ${item.features.tpms}</div>
              </div>
              <strong style="color: black">Kilometers: </strong> ${item.kilometers}
              <br>
              <strong style="color: black">Province: </strong> ${item.province}
              <br>
    
              <strong style="color: black">Ownership: </strong> ${item.ownership}
    
              <div class="ui small header">
                Contact:
              </div>
              <div class="ui list">
                <div class="item">Address: ${item.address}</div>
                <div class="item">City: ${item.city}</div>
                <div class="item">Postal Code: ${item.postalCode}</div>
                <div class="item">Email: ${item.email}</div>
              </div>
            </div>
          </div>
          <div class="extra content">
            <a class="ui primary button" href="http://www.jdpower.com/cars/${item.vehicle.make}/${item.vehicle.model}/${item.vehicle.year}" target="_blank" >JDPower</a>
          </div>
        </div>
      `
     cards.innerHTML +=content;
    });
  }
}
