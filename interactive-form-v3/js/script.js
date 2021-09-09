//sets focus to the name input field.
const userName = document.getElementById('name');
userName.focus();

/*hides the other job role input field until
  the other option is picked by the user*/
const otherJobRole = document.querySelector('#other-job-role');
otherJobRole.style.display = 'none';

/*adds the input field for other job roles when
the other option is chosen on the dropdown list */ 
jobRoleList = document.querySelector('#title');
jobRoleList.addEventListener('change', e => 
{
    if(e.target.value === "other"){
       return otherJobRole.style.display = 'initial';
    }
    else{
        otherJobRole.style.display = 'none';
    }
}
)

const shirtDesign = document.querySelector('#design');
const shirtColors = document.querySelector('#color');
const colorOptions = shirtColors.children;
shirtColors.disabled = true;
// for(let i = 1; i<colorOptions.length; i++){
    // colorOptions[i].disabled = true;
    // colorOptions[i].style.display = 'none';
//}


// function showDesignColors(design){
//     shirtColors.disabled = false;
//     /*itirates through all the options and displays 
//       them according to the theme chosen.*/
//     for(let i = 1; i<colorOptions.length; i++)
//     {
//         if(design === "js puns")
//         {
//             colorOptions[i].disabled = false;
//             if(colorOptions[i].getAttribute('data-theme') === 'js puns')
//             colorOptions[i].style.display = 'initial';
//             colorOptions[i].setAttribute('selected', "true");
//         }   
//         else
//         {
//             if(colorOptions[i].getAttribute('data-theme') === 'heart js')
//             colorOptions[i].style.display = 'initial';
//             colorOptions[i].setAttribute('selected', "true");
//         }
//     }
//     return colorOptions;
// }

/*itirates through all the options and hides 
  the options that should not be showing according to the theme chosen.*/
// function hideOtherDesignColors(design){
//     for(let i = 1; i<colorOptions.length; i++)
//     {
//         if(design === "js puns")
//         {
//             if(colorOptions[i].getAttribute('data-theme') === 'heart js')
//             colorOptions[i].style.display = 'none';
//         }
//     else{
//             if(colorOptions[i].getAttribute('data-theme') === 'js puns')
//             colorOptions[i].style.display = 'none';
//         }
//     }
//     return colorOptions;
// }


shirtDesign.addEventListener("change", e => {
    const designInput = e.target.value;
    shirtColors.disabled = false;

    for(let i = 1; i<colorOptions.length; i++){
        const dataTheme = colorOptions[i].getAttribute('data-theme');

        if(designInput === dataTheme)
        {
            colorOptions[i].setAttribute('hidden', 'false')
            colorOptions[i].setAttribute('selected', 'true')
        }else{
            colorOptions[i].setAttribute('hidden', 'true')
            colorOptions[i].setAttribute('selected', 'false')
            }
        }
    }
)
//Register for Activities code block//
const activities = document.querySelector('#activities');
const totalCostFinal = document.querySelector('#activities-cost');
let totalCost = 0;


activities.addEventListener('change', e => {
    //insures that the data-cost attribute is valid before adding the totalCosts//
    if(e.target.getAttribute('data-cost') !== ''){
        const dataCost = +e.target.getAttribute('data-cost');
        /*If target is checked, adds the checked items value to the total costs
            if checked is false subtracks the item value from total cost */
        if(e.target.checked === true)
            {
            totalCost += dataCost; 
            }
        else{
            totalCost -= dataCost;
            }
            //shows the current value of totalCost as a value for the user//
        totalCostFinal.innerHTML = `Total: $${totalCost}`;
        }
    }
)

//Payment info code block
/*sets creditCard as the initial selected item and hides
  the other payment methods until selected*/
const payment = document.querySelector('#payment');
const paymentMethods = payment.children;
paymentMethods[1].setAttribute('selected', 'true');
const creditCard = document.querySelector('#credit-card');
const paypal = document.querySelector('#paypal');
const bitcoin = document.querySelector('#bitcoin');
paypal.style.display = 'none';
bitcoin.style.display= 'none';

payment.addEventListener('change', e=>{
    /*if target is selected as payment method, the selected target's
    payment info is displayed and the other options are hidden*/
    if(e.target.value === 'paypal'){
        paypal.style.display = 'inline-block';
        creditCard.style.display = "none"
        bitcoin.style.display = 'none';
    }
    else if(e.target.value === 'bitcoin'){
        bitcoin.style.display = 'inline-block';
        paypal.style.display = 'none';
        creditCard.style.display = "none"
        }
    else{
        creditCard.style.display = "initial"
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
        }
    }
)

const form = document.querySelector('form');

function validationHelper(requiredFields){

}

form.addEventListener('submit', e=>{

})


