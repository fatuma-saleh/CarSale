const save = () => {

  const formData = {}

  let sellerName = document.forms["carForm"]["sellerName"].value
  let address =  document.forms["carForm"]["address"].value
  let city = document.forms["carForm"]["city"].value
  let provinces = document.getElementById("provinces");
  let postalCode = document.forms["carForm"]["postal"].value
  let phoneNumber = document.forms["carForm"]["phone"].value
  let email =  document.forms["carForm"]["email"].value
  let make =  document.forms["carForm"]["make"].value
  let model =   document.forms["carForm"]["model"].value
  let year =  document.forms["carForm"]["year"].value
  let kilometers =  document.forms["carForm"]["km"].value
  let ac = document.forms["carForm"]["accheck"].value
  let backCamera =  document.forms["carForm"]["bccheck"].value
  let heatedSeats =  document.forms["carForm"]["hscheck"].value
  let tpms = document.forms["carForm"]["tpms"].value

  if (sellerName && address && city && provinces && postalCode && phoneNumber && email && make && model && year && kilometers && ac && backCamera && heatedSeats && tpms) {

    
    formData["sellerName"] = sellerName;
    formData["address"] = address;
    formData["city"] = city;
    formData["province"] = provinces.options[provinces.selectedIndex].text
    formData["postalCode"] = postalCode;
    formData["phoneNumber"] = phoneNumber;
    formData["email"] = email;
    formData["vehicle"] =  {
      "make": make,
      "model": model,
      "year": year
    }
    formData["kilometers"] = kilometers;
    formData["features"] = {}
    let newOwner = document.getElementById("new")
    let one = document.getElementById("one")
    let multiple = document.getElementById("multiple")

    if(newOwner.checked) {
      formData["ownership"] = "No previous owner(new)"
    }
    if(one.checked) {
      formData["ownership"] = "Only one previous owner"
    }
    if(multiple.checked) {
      formData["ownership"] = "More than one previous owner"
    }
    
    let ac = document.getElementById("accheck");
    let bc = document.getElementById("bccheck");
    let hs = document.getElementById("hscheck");
    let tpms = document.getElementById("tpms");

    if(ac.checked) {
      formData["features"]["ac"] = "Yes"
    } else {
      formData["features"]["ac"] = "N/A"
    }
    if (bc.checked) {
      formData["features"]["backCamera"] = "Yes"
    } else {
      formData["features"]["backCamera"] = "N/A"
    }
    if (hs.checked) {
      formData["features"]["heatedSeats"] = "Yes"
    } else {
      formData["features"]["heatedSeats"] = "N/A"
    }
    if (tpms.checked) {
      formData["features"]["tpms"] = "Yes"
    } else {
      formData["features"]["tpms"] = "N/A"
    }

    if (typeof (Storage) !== "undefined") {

      if(localStorage.getItem("carStorage")) {
        storage =  JSON.parse(localStorage.getItem("carStorage"))
        storage.push(formData);
        localStorage.setItem("carStorage", JSON.stringify(storage))
          } else {
        let storage = []
        storage.push(formData)
        localStorage.setItem("carStorage", JSON.stringify(storage))
        console.log(JSON.parse(localStorage.getItem("carStorage")));
      }      

    } else {
      alert("Browser does not support HTML Webstorage")
    }
    const segment = document.getElementById("segment");
    const content = `
    <div class="ui card">
        <div class="content">
          <div class="header">${formData.vehicle.make} ${formData.vehicle.model}</div>
          <div class="meta">${formData.vehicle.year} - ${formData.sellerName} </div>
          <div class="description">
            <div class="ui small header">
              Features: 
            </div>
            <div class="ui bulleted list">
              <div class="item">Air Conditioning: ${formData.features.ac}</div>
              <div class="item">Backup Camera: ${formData.features.backCamera}</div>
              <div class="item">Heated Seats: ${formData.features.heatedSeats}</div>
              <div class="item">TPMS: ${formData.features.tpms}</div>
            </div>
            <strong style="color: black">Kilometers: </strong> ${formData.kilometers}
            <br>

            <strong style="color: black">Ownership: </strong> ${formData.ownership}

            <div class="ui small header">
              Contact:
            </div>
            <div class="ui list">
              <div class="item">Address: ${formData.address}</div>
              <div class="item">City: ${formData.city}</div>
              <div class="item">Postal Code: ${formData.postalCode}</div>
              <div class="item">Email: ${formData.email}</div>
            </div>
          </div>
        </div>
        <div class="extra content">
          <a class="ui primary button" href="http://www.jdpower.com/cars/${formData.vehicle.make}/${formData.vehicle.model}/${formData.vehicle.year}" target="_blank" >JDPower</a>
          <a class="ui primary button" href="../index.html" >Home Page</a>
        </div>
      </div>
      `

    segment.innerHTML += content;
    document.forms["carForm"].reset()
    return false
    
  } else {
    let message = document.getElementById("error");
    message.style.display = "block"
    return false;
  }
}
