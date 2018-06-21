const listingsData = [

{
	
	address: "123 Marlborough Lane",
	borough: "Kensington & Chelsea",
	bedrooms: 3,
	price: 1500000,
	floorSpace: 3000,
	extras: ["Conservatory", "Garage", "Gym"],
	homeType: "House",
	image: "https://az696418.vo.msecnd.net/images/properties/lg_b163_636044572249365198.jpg",
	userName: "Jill Rawlinson"

},

{

	address: "33 Apple Lane",
	borough: "Hammersmith & Fulham",
	bedrooms: 3,
	price: 760000,
	floorSpace: 3000,
	extras: ["Conservatory"],
	homeType: "House",
	image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=350",
	userName: "Nathan George"
	
},

{

	address: "12 Bowl Street",
	borough: "Hammersmith & Fulham",
	bedrooms: 1,
	price: 300000,
	floorSpace: 1000,
	extras: ["Balcony"],
	homeType: "Flat",
	image: "https://cdn.images.express.co.uk/img/dynamic/51/590x/london-flat-cheap-communal-pool-property-791939.jpg",
	userName: "Valentine Jones"
},

{

	address: "27 Unicorn Mews",
	borough: "Kensington & Chelsea",
	bedrooms: 2,
	price: 1200000,
	floorSpace: 1000,
	extras: ["Basement", "Balcony"],
	homeType: "House",
	image: "http://www.cityam.com/assets/uploads/main-image/cam_standard_article_main_image/2017/07/mews-5968f2da02035-5968f32eb49b5.jpg",
	userName: "Sarah McDonald"
}
,

{

	address: "540 Myesore Lane",
	borough: "Wandsworth",
	bedrooms: 3,
	price: 500000,
	floorSpace: 1000,
	extras: ["Conservatory"],
	homeType: "House",
	image: "https://www.mortgageintroducer.com/wp-content/uploads/2016/01/london-houses.jpg",
	userName: "Joseph Guild"
}

,

{

	address: "1112 Putney lane",
	borough: "Wandsworth",
	bedrooms: 3,
	price: 1400000,
	floorSpace: 1000,
	extras: ["Balcony", "Swimming Pool"],
	homeType: "Flat",
	image: "https://images.theconversation.com/files/130384/original/image-20160713-12372-1coon9q.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip",
	userName: "Ruth Dee"
},

{

	address: "1 Angel Road",
	borough: "Islington",
	bedrooms: 2,
	price: 400000,
	floorSpace: 1000,
	extras: ["Balcony"],
	homeType: "Flat",
	image: "https://alto2-live.s3.amazonaws.com/gpCrxsJh4ERxDn1hYIKrUcs3cmI/qiP3xIpgdAI4dbfGmn9IcyQ_vTY/Photo/[2]/6Va-PXhj0Uup6jGW1eXaHg.jpg",
	userName: "Jack Guildford"
},

{

	address: "44 Lion's Gate",
	borough: "Ealing",
	bedrooms: 2,
	price: 450000,
	floorSpace: 1000,
	extras: ["Garden"],
	homeType: "House",
	image: "http://www.hatarch.co.uk/images/projects/rs_Swains_001.jpg",
	userName: "Sharon Mulberry"
},

{

	address: "50 Wavey Lane",
	borough: "Islington",
	bedrooms: 3,
	price: 700000,
	floorSpace: 1000,
	extras: ["Garden", "Conservatory"],
	homeType: "House",
	image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkwyJHJcqXqAVIYynMT99c80z04IgQrTYjUdP7nuPq2OXi8ti7w",
	userName: "Thomas Rizal"
},

{

	address: "325 Applewood Road",
	borough: "Hammersmith & Fulham",
	bedrooms: 2,
	price: 650000,
	floorSpace: 1000,
	extras: ["Garden"],
	homeType: "House",
	image: "http://media.rightmove.co.uk/dir/66k/65830/60594499/65830_SJW160193_IMG_01_0000_max_656x437.jpg",
	userName: "Yvonne Fields"
},

{

	address: "555 Master Avenue",
	borough: "Kensington & Chelsea",
	bedrooms: 10,
	price: 45000000,
	floorSpace: 10000,
	extras: ["Garden", "Balcony", "Conservatory", "Swimming Pool", "Garage", "Gym"],
	homeType: "House",
	image: "https://media.architecturaldigest.com/photos/5953cf9f13f4522790b28af0/master/w_640,c_limit/10697%2520Somma%2520Way.jpg",
	userName: "Yvonne Fields"
}
,

{

	address: "526 Parkhill Gardens",
	borough: "Westminster",
	bedrooms: 3,
	price: 21000000,
	floorSpace: 5000,
	extras: ["Garden", "Balcony", "Conservatory", "Swimming Pool", "Garage", "Gym"],
	homeType: "House",
	image: "https://ward8online.com/wp-content/uploads/best-millionaire-homes-home-designs-interior-exterior-pinterest_67949.jpg",
	userName: "Yvonne Fields"
},
{

	address: "46 First Avenue",
	borough: "Wandsworth",
	bedrooms: 3,
	price: 420000,
	floorSpace: 500,
	extras: ["Garden"],
	homeType: "House",
	image: "https://cdn.images.express.co.uk/img/dynamic/23/590x/house-647764.jpg",
	userName: "David Morelli"
},

{

	address: "32 Bishops Park Gardens",
	borough: "Ealing",
	bedrooms: 3,
	price: 350000,
	floorSpace: 500,
	extras: ["Garden", "Conservatory"],
	homeType: "House",
	image: "http://www.yellowad.co.uk/images/news/2018/388_MD-TERRACED-HOUSES005.jpg",
	userName: "Elizabeth Roberts"
},

{

	address: "11 Flamstead Lane",
	borough: "Ealing",
	bedrooms: 2,
	price: 250000,
	floorSpace: 500,
	extras: ["Garden"],
	homeType: "House",
	image: "http://www.homeandbuild.co.uk/public/uploads/images/lewisham_house_images_1466079436.jpg",
	userName: "Neil O'Sullivan"
},

{

	address: "32 Brick Avenue",
	borough: "Greenwich",
	bedrooms: 3,
	price: 370000,
	floorSpace: 500,
	extras: ["Garden", "Conservatory"],
	homeType: "House",
	image: "https://www.kfh.co.uk/i/976/293/220/0/london-house-prices-rise.jpg",
	userName: "Stephanie Nathans"
}
,

{

	address: "15 Sandy Woods",
	borough: "Wandsworth",
	bedrooms: 2,
	price: 650000,
	floorSpace: 500,
	extras: ["Balcony"],
	homeType: "House",
	image: "https://i.ebayimg.com/00/s/NjgzWDEwMjQ=/z/gdcAAOSwomJas9hT/$_86.JPG",
	userName: "David Andrews"
},
{

	address: "5 Colorado Court",
	borough: "Ealing",
	bedrooms: 3,
	price: 400000,
	floorSpace: 500,
	extras: ["Balcony"],
	homeType: "Flat",
	image: "http://rockmystyle.co.uk/wp-content/gallery/greg-london-flat/1254_d_and_g_2a_dempster_road_kitchen1-1.jpg",
	userName: "Tiffany Thomas"
},

{

	address: "7 Conduit Mews",
	borough: "Kensington & Chelsea",
	bedrooms: 3,
	price: 5000000,
	floorSpace: 2000,
	extras: ["Garden", "Conservatory"],
	homeType: "House",
	image: "https://media.rightmove.co.uk/dir/crop/10:9-16:9/43k/42848/72371795/42848_CHE080065_IMG_01_0000_max_476x317.jpg",
	userName: "Sir David Dean"
}
,

{

	address: "9 Lucky Lane",
	borough: "Greenwich",
	bedrooms: 3,
	price: 370000,
	floorSpace: 700,
	extras: ["Garden", "Garage"],
	homeType: "House",
	image: "https://mr0.homeflow-assets.co.uk/files/photo/image/14764/7573/_x_/STH160159_41.jpg",
	userName: "Silva McCleod"
}

];




export default listingsData;
