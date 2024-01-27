
function newItem(){

// jQuery Code
//1. Adding a new item to the list:

  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }
//2. Crossing an item out:
  function crossOut() {
		li.toggleClass("strike");
	}

	li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});
//3. Adding a delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

   crossOutButton.on("click", deleteListItem);
   function deleteListItem(){
 		li.addClass("delete")
 	}
   $('#list').sortable();

}

// Found it annoying that the enter key refreshes the page - so I added this to prevent that
$('#input').on('keypress', function(e) {
    if(e.which == 13) {
      newItem();
      e.preventDefault(); // Prevents the default action of the 'Enter' key
    }
  });