function addBook(id)
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // If user is not logged in display an error message
      if (this.responseText.localeCompare('error') == 0) {
        // Error message
        let alert = document.createElement('div');
        alert.innerHTML = 'You are not logged in! ';
        alert.role = 'alert';
        alert.classList.add('alert');
        alert.classList.add('alert-danger');
        // Link to login
        let link = document.createElement('a');
        link.href = 'login';
        link.innerHTML = 'Sign in here!';
        link.classList.add('alert-link');
        // Add link to error
        alert.appendChild(link);
        // Add error to the top of the page
        let parent = document.getElementById('body');
        let after = parent.children[0];
        parent.insertBefore(alert, after);
      } else {
        // If logged in modify button text
        let button = document.getElementById(id);
        button.innerHTML = 'saved';
      }
		}
  };
  xhttp.open('POST', 'addBook', true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhttp.send('book=' + id.replace('&', 'and'));
}


function removeBook(id)
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let button = document.getElementById(id);
      let parent = button.parentElement;
      let name = parent.children[0];
      button.hidden = true;
      name.hidden = true;
		}
  };
  xhttp.open('POST', 'removeBook', true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhttp.send('book=' + id.replace('&', 'and'));
}


document.addEventListener('DOMContentLoaded', function() {
  // Get all the buttons and description text
  let showBtns = document.querySelectorAll('.show-description');
  let descriptions = document.querySelectorAll('.card-text');
  // For each button make it toggle hidden attribute for description
  for (let i = 0; i < showBtns.length; i++) {
    showBtns[i].addEventListener('click', function() {
      if (descriptions[i].hidden) {
        descriptions[i].hidden = false;
        showBtns[i].innerHTML = 'hide description';
      } else {
        descriptions[i].hidden = true;
        showBtns[i].innerHTML = 'show description';
      }
    });
  }
});
