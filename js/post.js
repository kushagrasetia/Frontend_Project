//adding functionality to edit button

var editBtn = document.getElementById('editBtn');
var editables = document.querySelectorAll('#blogText, #blogTitle');
 
editBtn.addEventListener('click', function() {
  if (!editables[0].isContentEditable) {
    
     editBtn.innerHTML = ' Save' + ' <i class="fa fa-save"></i>';
    editables[0].contentEditable = 'true';
    editables[1].contentEditable = 'true';
   
   
  } 
  else {
    // Disable Editing
   
     editBtn.innerHTML = 'Edit ' + '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>';
    editables[0].contentEditable = 'false';
    editables[1].contentEditable = 'false';
    
    // Save the data in localStorage 
    for (var i = 0; i < editables.length; i++) {
      localStorage.setItem(editables[i].getAttribute('id'), editables[i].innerHTML);
    }
  }
});
  
   
//ading functionality to like button

//adding functionality to comment button
function commentFunction()
{
    var str = document.getElementById("comment").value;

     document.getElementById('comments').innerHTML=document.getElementById('comments').innerHTML+str;
}




