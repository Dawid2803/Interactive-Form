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
for(let i = 1; i<colorOptions.length; i++){
    colorOptions[i].disabled = true;
    colorOptions[i].style.display = 'none';
}


function showDesignColors(design){
    shirtColors.disabled = false;
    if(design === "js puns"){
        for(let i = 1; i<colorOptions.length; i++){
            colorOptions[i].disabled = false;
            if(colorOptions[i].getAttribute('data-theme') === 'js puns')
            colorOptions[i].style.display = 'initial';
        }
    }else{
        for(let i = 1; i<colorOptions.length; i++){
            if(colorOptions[i].getAttribute('data-theme') === 'heart js')
            colorOptions[i].style.display = 'initial';
        }
    }
    return colorOptions;
}

function hideOtherDesignColors(design){
    if(design === "js puns"){
        for(let i = 1; i<colorOptions.length; i++){
            if(colorOptions[i].getAttribute('data-theme') === 'heart js')
            colorOptions[i].style.display = 'none';
        }
    }else{
        for(let i = 1; i<colorOptions.length; i++){
            if(colorOptions[i].getAttribute('data-theme') === 'js puns')
            colorOptions[i].style.display = 'none';
        }
    }
    return colorOptions;
}

shirtDesign.addEventListener("change", e => {
    const designInput = e.target.value;
    colorOptions[0].hidden = true;
    if(designInput === "js puns"){
        showDesignColors(designInput);
        hideOtherDesignColors(designInput)
    }else{
        showDesignColors(designInput);
        hideOtherDesignColors(designInput);
    }
})


console.log(colorOptions[0]);