
document.addEventListener('scroll', function(){
    document.getElementById('header').classList.add('scroll-header');
});





const customer = [
{ 
    id: 1 ,
    name : 'Elena Rabin',
    img : 'assets/1-customer.jpg',
    job : 'Designer',
    comment:'We had a very good experience with them!',


},{
     
    id: 2 ,
    name : 'Sam Smith',
    img : 'assets/3-customer.jpg',
    job : 'Designer',
    comment:'Definitely the best investment you can have for your collection.'
},{

    id:3,
    name : 'Rabert Muller',
    img : 'assets/second-customer.jpg',
    job : 'developer',
    comment : 'It was a wonderful collaboration.',
},{


    id:4,
    name : 'Rose Warner',
    img : 'assets/first-customer.jpg',
    job : 'boss',
    comment : 'Our business made great progress after working with them.',

}
]

const customerName =  document.getElementById('name-customer')
const customerImage =  document.getElementById('img-customer')
const customerJob = document.getElementById('job-customer')
const customerComment = document.getElementById('comment-customer')

const setCustomerData = (user)=>{
    customerName.textContent = user.name
    customerImage.src = user.img
    customerJob.textContent = user.job
    customerComment.textContent = user.comment

}


document.addEventListener('DOMContentLoaded', function(){
    const firstCustomer =  customer[0]
    setCustomerData(firstCustomer);
});


// btn-next
let currentUser = 0;

document.getElementById('next-btn').addEventListener('click', function(){
  if(currentUser >= 0 && currentUser < customer.length -1){
          currentUser ++;
          setCustomerData(customer[currentUser]);
  }else if (currentUser === customer.length - 1){
    currentUser = 0;
    setCustomerData(customer[currentUser]);
  }
});

// btn-back

document.getElementById('back-btn').addEventListener('click', function(){
    if(currentUser > 0){  
        currentUser --;
        setCustomerData(customer[currentUser]);
    }else if (currentUser === 0){
        currentUser = 3;
        setCustomerData(customer[currentUser]);
    }
});

// btn haye paeeni

document.getElementById('1-customer-btn').addEventListener('click', function(){
    currentUser = 0 ;
    setCustomerData(customer[currentUser]);
    // document.getElementById('1-customer-btn').classList.add('click-btn').
});
document.getElementById('2-customer-btn').addEventListener('click', function(){
    currentUser = 1 ;
    setCustomerData(customer[currentUser]);
});
document.getElementById('3-customer-btn').addEventListener('click', function(){
    currentUser = 2 ;
    setCustomerData(customer[currentUser]);
});
document.getElementById('4-customer-btn').addEventListener('click', function(){
    currentUser = 3 ;
    setCustomerData(customer[currentUser]);
});


