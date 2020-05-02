/*************** script for add active class ****************** */

/***********************************************************/

var url ='./data/insurance_types.json';



$.getJSON(url, function(data) {
    DisplayData(data)
})

/********** Function to display data*********** */
function DisplayData(data) {
    // Work with JSON data here
    all_insurances = data.types
  for (let index = 0; index < all_insurances.length; index++) {
      var element = all_insurances[index];
      var x = element.insurances
   console.log(x)

      $('.insurance-types').append(`
    <div class="insurance">
            <div class="container">
              <div class="row">
                  <div class="col-12">
                      <h3>${element.title}</h3>
                  </div>
              </div>
              <div class="row">
                  <div class="col-12 p-0">
                      <ul class="types">
                      
                        ${element.insurances.map(el => 
                           
                       (    "<li> <div class='icon'><img src="+el.icon+" alt=''> </div><div class='icon-name'>"+el.iconName+"</div></li>")
                        )
                    }
                      </ul>
                  </div>
              </div>
            </div>
    </div>`)
      
  }
  
}

/**************************************** */
