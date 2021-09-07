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

