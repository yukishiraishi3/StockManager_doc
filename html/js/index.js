
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

$('#detailedSearch').on('shown.bs.collapse', function () {
  $('#button').hide();
});

$('#detailedSearch').on('hidden.bs.collapse', function () {
  $('#button').show();
});

$('#signUp').on('show.bs.modal', function () {
    $('#alert').hide();
})

$(function () {
	$('#ragistration').on('click', function () {
		$('#alert').show();
	});
});

//  // datatableの日本語化
// $(function(){
//   console.log("1");
//   $.extend( $.fn.dataTable.defaults, {
//         language: {
//             url: "http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Japanese.json"
//         }
//   });
//   $("#stockTable").DataTable({
//     lengthChange: false,
//     searching: false,
//     info: false,
//     paging: false,
//     order: [ [ 0, "desc" ] ]
//   });
// });
