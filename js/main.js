

$(function() {
	function addEntry() {
		var e = {};
		e.time = new Date().getTime();
		e.body = $('textarea').val();
		e.place = $('input[type="text"]').val();
		localStorage.setItem(e.time, JSON.stringify(e));
		window.location.href='index.html';
	}

	function renderEntries() {

		$('#main').empty();
		var _t;

		for(var i = localStorage.length - 1; i > -1; --i) {
			var e = JSON.parse(localStorage.getItem(localStorage.key(i)));
			var d = new Date(e.time);
			var m = d.getMinutes() < 10 ? '0'+d.getMinutes() : d.getMinutes();
			var _d = d.toDateString() + ' ' + d.getHours() + ':' + m;
			_t = '<article class="idea"><header><span>' + e.place + '</span>, ' +_d+'</span></header><p>'+e.body+'</p></article>';
			$('#main').append($(_t));
		}
	}

	if($('button').length > 0) {
		$('button').on('click', function() {
			addEntry();
		});
	} else {
		renderEntries();
	}
});
