function new_game()
	{
		//Переменные
		var a = 0; 
		var variant_1="";
		var variant_2="";
		var variant_3="";

		//описанные варианты ответов в тюрьме
		var memory = 'Попытаться вспомнить';
		var call_guardian = 'Позвать стражника';
		var jailbreak = 'Попытаться сбежать';

		var location = ['jail', 'jail_2', 'room_1', 'room_2']; //локации [тюрьма, тюрьма_2, комната_1, комната_2]
		var event = ['meet', 'trap']; //события [встреча, ловушка]
		var meet = ['bandit', 'vendor', 'vampire']; //встреча [бандит, продавец, вампир]
		var ansver_meet = ['kill', 'say', 'escape']; //варианты ответов на встречу [убить, поговорить, убежать]
		var ansver_jail = [{memory:'memory'},'call_guardian','jailbreak']; //  alert( arr[0].name ) варианты ответов в тюрьме [память, зов стража, побег из тюрьмы]
		var ansver = ['look_around']; //общие варианты [Осмотреться]
		var ansver_1 = document.getElementById('ansver_1'); //переменная ответов


//Начало

		location = 'jail';

//рандом локаций

//рандом событий

//рандом ответов
		if (location == 'jail') 
		{
		ansver_jail.ansver_1 = Math.floor(Math.random() * (3 - 1 + 1)) + 1; //рандом вариантов в тюрьме
		var img_id = document.getElementById("img_id").innerHTML="<img src='img/jail.jpg'>"; //подключение изображений
		}
		else if (location == 'jail_2') 
		{
			var img_id = document.getElementById("img_id").innerHTML="<img src='img/jail_2.jpg'>";
		}
		else if (location == 'room_1') 
		{
			var img_id = document.getElementById("img_id").innerHTML="<img src='img/jail.jpg'>";
		}
		else if (location == 'room_2') 
		{
			var img_id = document.getElementById("img_id").innerHTML="<img src='img/jail.jpg'>";
		}
		else
			alert('ошибочка');


		//var _text = ("fdsdfsf"); // - работает только без функции
		//document.body.children[0].innerHTML = _text;

		//var _text = document.getElementById('_text').innerHTML = 'Вы снова проснулись';
		//var _text = "Вы снова проснулись в темной и сырой комнате на сене. Вам кажется, вы уже были в подобной ситуации, но не можете никак вспонить."
		//document.write(_text);

	function variant(ansver_1) 
		{ 
		var variant_1=""; 
		
		if (document.getElementById(checked).checked 
		&& document.getElementById(checked).value == "var_value_1") 
		{ 
		variant_1 ="Вариант №1"; 
		} 

		var _text = document.getElementById('_text').innerHTML = 'Вы снова проснулись в т';
		
		var ansver_1 = document.getElementById('ansver_1').innerHTML = variant_1 + "1"; //вариант №1
		var ansver_2 = document.getElementById('ansver_2').innerHTML = variant_2 + "2"; //вариант №2
		var ansver_3 = document.getElementById('ansver_3').innerHTML = variant_3 + "3"; //вариант №3
		}
		
		
	}
