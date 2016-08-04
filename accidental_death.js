function new_game()
	{
		var location = ['jail', 'jail_2', 'room_1', 'room_2']; //локации [тюрьма, комната_1, комната_2]
		var event = ['meet', 'trap']; //события [встреча, ловушка]
		var meet = ['bandit', 'vendor', 'vampire']; //встреча [бандит, продавец, вампир]
		var ansver_meet = ['kill', 'say', 'escape']; //варианты ответов на встречу [убить, поговорить, убежать]
		var ansver_jail = ['memory','call_guardian','jailbreak']; //варианты ответов в тюрьме [память, зов стража, побег из тюрьмы]
		var ansver = ['look_around']; //общие варианты [Осмотреться]
		var ansver_1 = document.getElementById('ansver_1');

//описанные варианты ответов в тюрьме
		var memory = 'Попытаться вспомнить';
		var call_guardian = 'Позвать стражника';
		var jailbreak = 'Попытаться сбежать';
//Начало

		location = 'jail';

//рандом локаций

//рандом событий

//рандом ответов
		if (location == 'jail') 
		{
		ansver_jail.ansver_1 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
		}

//подключение изображений
		if (location == 'jail') 
		{
			var img_id = document.getElementById("img_id").innerHTML="<img src='img/jail.jpg'>";
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

		var _text = document.getElementById('_text').innerHTML = 'Вы снова проснулись в темной и сырой комнате на сене. Вам кажется, вы уже были в подобной ситуации, но не можете никак вспонить.';
		
		var var_1 = document.getElementById('var_1').innerHTML = ansver_1;
		
		var var_2 = document.getElementById('var_2').innerHTML = 'Вы снова проснулись в темной и сырой комнате на сене. Вам кажется, вы уже были в подобной ситуации, но не можете никак вспонить.';
		
		var var_3 = document.getElementById('var_3').innerHTML = 'Вы снова проснулись в темной и сырой комнате на сене.';
		
		
		
	}
