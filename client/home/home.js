Template.home.onRendered(()=>{
	var splashContainer = $('.splash-container');
	splashContainer[0].appendChild(Trianglify({cell_size: 155, width: 3000,  height: 1000, seed: 'null', x_colors: 'BuPu'}).canvas());
});