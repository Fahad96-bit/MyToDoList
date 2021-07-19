var form = document.getElementById('addForm');
var intemList=document.getElementById('items');
var filter = document.getElementById('filter');
let editItem = null;

form.addEventListener('submit',addItem);
intemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);
intemList.addEventListener('click',editTask);


function addItem(e){
  e.preventDefault();
  
    if (submit.value != "Submit") {
      
  
        editItem.target.parentNode.childNodes[0].data
            = document.getElementById("item").value;
  
        submit.value = "Submit";
        document.getElementById("item").value = "";

        return false;
      
    }


    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className ='list-group-item';
   li.appendChild(document.createTextNode(newItem));


    var editbtn=document.createElement('button');
     editbtn.className='btn btn-danger btn-sm float-right Edit'
     editbtn.id='btn';

     var deletebtn=document.createElement('button');
     deletebtn.className='btn btn-danger btn-sm float-right delete';
     deletebtn.id='btn';

     deletebtn.appendChild(document.createTextNode('X'));
     li.appendChild(deletebtn);

     editbtn.appendChild(document.createTextNode('Edit'));
     li.appendChild(editbtn);
     
    intemList.appendChild(li);
    document.getElementById("item").value = "";
}

function removeItem(e){
if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        intemList.removeChild(li);
    }
}
}

function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
  
    var items = intemList.getElementsByTagName('li');

    // Convert to an array
    Array.from(items).forEach(function(item){
       
      var itemName = item.firstChild.textContent;
   
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
 function editTask(e){
  if (e.target.classList.contains("Edit")) {
    document.getElementById("item").value = e.target.parentNode.childNodes[0].data;
    submit.value = "EDIT";
    editItem = e;
    console.log(editItem);
}
   
 }