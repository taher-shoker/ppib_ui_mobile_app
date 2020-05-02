
var nameInput = document.getElementById('name'),
    phoneInput = document.getElementById('phone');
/* var getfavourtes ='http://khalifacomputer.com/kcgprojects/buffetbackend/buffetservice.php?order=9&val1=55' */

/****************************** */
 
$.ajax({
  url: 'http://khalifacomputer.com/kcgprojects/buffetbackend/buffetservice.php',
  method: 'GET',
  data: {
    "order": "9",
    "val1":"55"
  },
 
  success: function(data, textStatus, jqXHR) {

   
    // var obj = {}; 
    // someone answered that could get below code but I couldn't get it 
     console.log(data);
  }
})
///Login Function
function login() {

    var name = nameInput.value,
        phone = phoneInput.value; 
        var x = JSON.parse(localStorage.getItem("user"))
    
    if (name ==='' && phone === '') {
        Swal.fire({
            type: 'error',
            title: 'خطأ فى البيانات',
            text: 'ادخل البيانات الصحيحة',
            timer: 2000,
            animation: false,
            customClass: {
              popup: 'animated heartBeat'
            }
          })
    }
    if (x == null) {
      Swal.fire({
          type: 'error',
          title: 'ليس لديك  حساب',
          text: '  قم بإنشاء حساب ',
          timer: 2000,
          animation: false,
          customClass: {
            popup: 'animated heartBeat'
          }
        })
  }
    if(name === x[0] || phone === x[1]){
        
     window.location.replace('drinks.html')
        }
        else{
            Swal.fire({
                type: 'error',
                title: 'خطأ فى البيانات',
                text: 'ادخل البيانات الصحيحة',
                timer: 2000,
                animation: false,
                customClass: {
                  popup: 'animated heartBeat'
                }
              })
        }
      

    


}

/*********Script when click on login btn************* */
$('#login').on('click', function (e) {
    e.preventDefault()
    login()

})
/*********Script when click on login btn************* */
$('#create').on('click', function (e) {
  e.preventDefault()
  window.location.replace('register.html')

})


