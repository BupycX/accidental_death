function new_game()
	{
		//Переменные
		var a = 0; 

		//описанные варианты ответов в тюрьме
		var memory = 'Попытаться вспомнить';
		var call_guardian = 'Позвать стражника';
		var jailbreak = 'Попытаться сбежать';

		var location = ['jail', 'jail_2', 'room_1', 'room_2']; //локации [тюрьма, тюрьма_2, комната_1, комната_2]
		var event = ['meet', 'trap']; //события [встреча, ловушка]
		var meet = ['bandit', 'vendor', 'vampire']; //встреча [бандит, продавец, вампир]
		var ansver_meet = ['kill', 'say', 'escape']; //варианты ответов на встречу [убить, поговорить, убежать]
		var ansver_jail = [{memory:'memory'},'call_guardian','jailbreak']; //  alert( arr[0].name ) варианты ответов в тюрьме [память, зов стража, побег из тюрьмы]
		var ansver_obshiu = ['look_around']; //общие варианты [Осмотреться]
		
		

		var actual_say = "Вы снова проснулись в темной и сырой комнате на сене. Вам кажется, вы уже были в подобной ситуации, но не можете никак вспомнить.";
		var ansver_one_actual_say = "Позвать стражника";
		var ansver_two_actual_say = "Попробывать выбить решетку самостоятельно";
		var ansver_three_actual_say = "Попытаться вспомнить предыдущие события";

		//Начало

		location = 'jail';
		
			function an(ansver)
			{
				var ansver_id_span_one;
				var ansver_id_span_two;
				var ansver_id_span_three;

				if (document.getElementById(ansver).checked && document.getElementById(ansver).value == "ansver_value_span_one") 
				{
				ansver_one_actual_say = "Стражник выбил вам зубы";
				}
				else if (document.getElementById(ansver).checked && document.getElementById(ansver).value == "ansver_value_span_two") 
				{
				ansver_two_actual_say = "Вы пытались";
				}
				else (document.getElementById(ansver).checked && document.getElementById(ansver).value == "ansver_value_span_three")
				{
				ansver_three_actual_say = "Не получилось";
				}
			}


//рандом локаций

//рандом событий

//рандом ответов
		switch (location)
		{
		case 'jail': 
		ansver_jail.ansver_1 = Math.floor(Math.random() * (3 - 1 + 1)) + 1; //рандом вариантов в тюрьме
		var img_id = document.getElementById("img_id").innerHTML="<img src='img/jail.jpg'>"; //подключение изображений - работает
		break;
		case 'jail_2':
		
			var img_id = document.getElementById("img_id").innerHTML="<img src='img/jail_2.jpg'>";
		break;
		case 'room_1':
		
			var img_id = document.getElementById("img_id").innerHTML="<img src='img/jail.jpg'>";
		break;
		case 'room_2': 
		
			var img_id = document.getElementById("img_id").innerHTML="<img src='img/jail.jpg'>";
		break;
		default:
			alert('ошибочка');
		}

		//var actual = ("fdsdfsf"); // - работает только без функции
		//document.body.children[0].innerHTML = actual;

		//var actual = document.getElementById('actual').innerHTML = 'Вы снова проснулись';
		//var actual = "Вы снова проснулись в темной и сырой комнате на сене. Вам кажется, вы уже были в подобной ситуации, но не можете никак вспонить."
		//document.write(actual);

	
			var actual = document.getElementById('actual_text_js').innerHTML = actual_say;
			var ansver_one = document.getElementById('ansver_id_span_one').innerHTML = ansver_one_actual_say;
			var ansver_two = document.getElementById('ansver_id_span_two').innerHTML = ansver_two_actual_say;
			var ansver_three = document.getElementById('ansver_id_span_three').innerHTML = ansver_three_actual_say;

	// new_game2 = function variant() 
	// 	{ 
	// 	var actual = document.getElementById('actual').innerHTML = 'Вы снова проснулись в темной и сырой комнате на сене. Вам кажется, вы уже были в подобной ситуации, но не можете никак вспонить.';
	// 	}
		
		
	}
