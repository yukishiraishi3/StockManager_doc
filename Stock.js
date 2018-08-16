
for (i = 0; i < 9; i++) {
  var newLine = $('<tr>');

  for (j = 1; j < 11; j++) {
    var td = $('<td>').text(j);
    td.appendTo($(newLine));
  }
    newLine.appendTo($('tbody'));
}

$('#from').datepicker({
    format: 'yyyy/mm/dd',
    language:'ja'
});

$('#to').datepicker({
    format: 'yyyy/mm/dd',
    language:'ja'
});

$('#main').on('shown.bs.collapse', function () {
  $('#button').hide();
});

$('#main').on('hidden.bs.collapse', function () {
  $('#button').show();
});
