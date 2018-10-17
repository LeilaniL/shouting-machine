$(document).ready(function() {
  $("#formOne").submit(function() {
    var personInput = $("input#person1").val();
    var upperCase = personInput.toUpperCase();
    alert(upperCase);
    event.preventDefault();
  });
});
