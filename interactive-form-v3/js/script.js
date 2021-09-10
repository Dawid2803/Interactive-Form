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

/*pseudocode for color selector
    redisign code from start
    start by hiding all colors,
    itirate though all options;
    if option = data-theme, display option;
    if option != data-theme, display none;*/
const shirtDesign = document.querySelector('#design');
const shirtColors = document.querySelector('#color');
const colorOptions = shirtColors.children;
shirtColors.disabled = true;
for(let i = 0; i<colorOptions.length; i++){
    colorOptions[i].hidden = true;
}

shirtDesign.addEventListener('change', e=>{
    shirtColors.disabled = false;
    for(let i = 0; i<colorOptions.length; i++){
        const designValue = e.target.value;
        const dataTheme = colorOptions[i].getAttribute('data-theme');
        if(designValue === dataTheme){
            colorOptions[i].hidden = false;
            colorOptions[i].setAttribute('selected', 'true');
            
        }else if(designValue !== dataTheme){
            colorOptions[i].hidden = true;
        }
    }
})


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


/*pseudocode for form validation
    create helper functions for validating the user inputs for name,email
    , activities and credit card details if chosen as payment method.
    create event listener function.
    create addeventlistener for form and use helper functions to determine
    true of false values for the items validated, if any required
    items are returned false, do not accept form, else accept form.  */

const form = document.querySelector('form');
const nameHint = document.querySelector('#name-hint');

function nameValidation(name){
    return /\w/.test(name);
}

form.addEventListener('submit', e=>{
    const validName = nameValidation(userName);
    if(validName === false){
        nameHint.style.display = 'inline';
    }
})


