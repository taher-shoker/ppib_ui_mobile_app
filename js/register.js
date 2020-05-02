var  nameInput = document.getElementById('name'),
     phoneInput = document.getElementById('phone'),
     companyName = document.getElementById('company-name');


/******************* function to insert inputs value to local storage***************************/
var user=[]
function register() {
   var name =nameInput.value,
       phone=phoneInput.value,
       company=companyName.value;
if (name === '' && phone === '' && company ==='') {
  Swal.fire({
    type: 'error',
    title: 'خطأ فى البيانات',
    text: 'ادخل البيانات الصحيحة',
    timer: 3000,
    animation: false,
    customClass: {
      popup: 'animated heartBeat'
    }
  })
}else {
  user.push(name,phone,company);

  localStorage.setItem('user',JSON.stringify(user))
  Swal.fire({
    type: 'success',
    title: 'تم التسجيل بنجاح',
    html:
    '<b>الاسم:</b> '+name+'<br>' +
    '<b>الموبيل:</b> '+phone+'<br>'+
    '<b>الشركة:'+company + '</b>',
    timer: 5000,
 
  onClose: () => {
    
    window.location.replace('login.html')
  }
})
 
      
   
  }
}       


/********* Script when clcik on Register btn************* */
$('#register').on('click',function(e){
  e.preventDefault()
    register()
   
  
})

/********* Script when clcik on login btn************* */
$('#login').on('click',function(e){
  e.preventDefault()
   window.location.replace('login.html')
   
  
})