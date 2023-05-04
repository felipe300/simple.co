$(() => {
	$("#code").on({
		focus: function () {
			$(this)
				.removeClass("bg-success")
				.addClass("bg-primary")
		},
		blur: function () {
			$(this)
				.removeClass("bg-primary")
				.addClass("bg-success")
		}
	})
	$("#bt").on({
		click: function () {
			$(this)
				.addClass("bg-warning")
				.text('¿Estás seguro?')
		},
		dblclick: function () {
			$(this)
				.removeClass("bg-warning")
				.addClass("bg-primary")
				.text('¡OK!')
		},
		blur: function () {
			$(this)
				.removeClass("bg-primary")
				.css({ 'background-color': 'transparent', 'color': 'green' })
				.addClass("text-uppercase")
				.text('comprado')
		}
	})
})