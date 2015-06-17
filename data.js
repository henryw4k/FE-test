var result = {
	"marks": [
		{
			"Id": 1,
			"IMI": {
				"Name": "Fly Round-Trip to Myrtle Beach from Philadelphia",
				"Brand": "Expedia",
				"Image":"https://stream.inmarkit.com/uploads/mm/P498/62/GwVmHPI_50x50.jpg"
			}
		},
		{
			"Id": 2,
			"IMI": {
				"Name": "Cape Cod",
				"Brand": "Salt House Inn",
				"Image": "https://stream.inmarkit.com/uploads/mm/P498/6e/GiISz50_50x50.jpg"
			}
		},
		{
			"Id": 3,
			"IMI": {
				"Name": "Round-Trip to Tokyo",
				"Brand": "Major Airlines",
				"Image": "https://stream.inmarkit.com/uploads/mm/P498/bc/GVAPD3A_50x50.jpg"
			}
		},
		{
			"Id":4,
			"IMI": {
				"Name": "Phoenix Boutique Hotel w/Breakfast",
				"Brand": "Groupon Getaways with Expedia",
				"Image":"https://stream.inmarkit.com/uploads/mm/P498/8f/GIC2Mf4_50x50.jpg"
			}
		},
		{
			"Id": 5,
			"IMI": {
				"Name": "Wisconsin Dells Water Park Resort w/Passes & Dining Credit",
				"Brand": "Groupon Getaways with Expedia",
				"Image":"https://stream.inmarkit.com/uploads/mm/P498/8f/GWisfWm_50x50.jpg"
			}
		},
		{
			"Id": 6,
			"IMI": {
				"Name": "Car Rentals Worldwide",
				"Brand": "SIXT Rent a Car",
				"Image": "https://stream.inmarkit.com/uploads/mm/P498/f9/GmcvVJS_50x50.jpg"
			}
		},
		{
			"Id": 7,
			"IMI": {
				"Name": "Florida: Round-Trip Flights to Orlando, Tampa & Fort Lauderdale",
				"Brand": "Major Airlines",
				"Image":"https://stream.inmarkit.com/uploads/mm/P498/bc/GXvIxAj_50x50.jpg"
			}
		},
		{
			"Id": 8 ,
			"IMI": {
				"Name": "14-Nt New England & Canada Fall Foliage Tour w/Cruise",
				"Brand": "YMT Vacations",
				"Image":"https://stream.inmarkit.com/uploads/mm/P498/d4/GQzYmgB_50x50.jpg"
			}
		},
		{
			"Id": 9,
			"IMI": {
				"Name": "China: 3-City Guided Tour w/Air & Upscale Hotels",
				"Brand": "smarTours",
				"Image":"https://stream.inmarkit.com/uploads/mm/P498/91/G3RHYNg_50x50.jpg"
			}
		},
		{
			"Id": 10,
			"IMI": {
				"Name": "National Parks & Las Vegas Package Incl. Grand Canyon w/Bonus",
				"Brand": "Monograms",
				"Image":"https://stream.inmarkit.com/uploads/mm/P498/6c/GVeGEYz_50x50.jpg"
			}
		}]
};//result

$.each(result.marks, function(index, element){
		$("#container").append('<div class="elementContainer">'+element+"</div>");
});