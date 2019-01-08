$(document).ready(function(){
	$("#topmenu table td, #topmenu table td a").bind("mouseover", function(event){
		//$("#topmenu table td a").css("color", "#f00");
		event.target.style.background = "#9edc91";
		$("#line_to_menu").css("background-color", "#9edc91");
	});
	
	$("#topmenu table td").bind("mouseout", function(event){
		//$("#topmenu table td a").css("color", "#f00");
		event.target.style.background = "#fff";
		$("#line_to_menu").css("background-color", "#fff");
	});
	
	$("#select_group").bind("change", function(event){
		$("#select_group").css("color", "#000");
	});
	
	$("#select_floor").bind("change", function(event){
		$("#select_floor").css("color", "#000");
	});
	
	$("#input_date").bind("change", function(event){
		$("#input_date").css("color", "#000");
	});
	
	$("#add_new_people").bind("click", function(){
		$("#search").hide();
		$("#form_for_add_people").fadeIn(500, function(){
			$("#add_new_people").hide();
			$("#cancel_add_new_people").show();
		});
	});
	
	$("#cancel_add_new_people").bind("click", function(){
		$("#form_for_add_people").fadeOut(500, function(){
			$("#add_new_people").show();
			$("#cancel_add_new_people").hide();
			$("#search").show();
		});
	});
	
	
	var arr = new Array();
	arr[0] = new Array("Аверкиев Сергей", "ФИИТ", "12.05.1993", "", "м", "+7-980-000-00-00");
	arr[1] = new Array("Алексеев Сергей", "ФИИТ", "02.06.1993", "", "м", "+7-980-000-00-00");
	arr[2] = new Array("Баранов Дан", "ПМИ", "04.10.1993", "", "м", "+7-980-000-00-00");
	arr[3] = new Array("Бельская Карина", "ПМИ", "09.11.1993", "", "ж", "+7-980-000-00-00");
	arr[4] = new Array("Березина Полина", "ФИИТ", "17.05.1993", "", "ж", "+7-980-000-00-00");
	arr[5] = new Array("Голубцов Василий", "ПМИ", "07.09.1993", "", "м", "+7-980-000-00-00");
	arr[6] = new Array("Григорьева Елена", "ФИИТ", "10.09.1993", "", "ж", "+7-980-000-00-00");
	arr[7] = new Array("Ершов Сергей", "ПМИ", "28.07.1993", "", "м", "+7-980-000-00-00");
	arr[8] = new Array("Климычев Михаил", "ПМИ", "26.07.1993", "", "м", "+7-980-000-00-00");
	arr[9] = new Array("Крайнов Дмитрий", "ПМИ", "30.12.1993", "", "м", "+7-980-000-00-00");
	arr[10] = new Array("Лебедев Владимир", "ПМИ", "18.02.1992", "", "м", "+7-980-000-00-00");
	arr[11] = new Array("Лебедев Дмитрий", "ПМИ", "01.11.1994", "", "м", "+7-980-000-00-00");
	arr[12] = new Array("Лебедева Валерия", "ФИИТ", "03.09.1993", "", "ж", "+7-980-000-00-00");
	arr[13] = new Array("Полупанов Евгений", "ПМИ", "17.06.1993", "", "м", "+7-980-000-00-00");
	arr[14] = new Array("Рубацов Иван", "ПМИ", "28.06.1993", "", "м", "+7-980-000-00-00");
	arr[15] = new Array("Сергейчук Олег", "ПМИ", "23.02.1994", "", "м", "+7-980-000-00-00");
	arr[16] = new Array("Фролов Даниил", "ПМИ", "17.03.1994", "", "м", "+7-980-000-00-00");
	arr[17] = new Array("Фростов Егор", "ПМИ", "13.06.1993", "", "м", "+7-980-000-00-00");
	arr[18] = new Array("Харченко Алексей", "ПМИ", "11.11.1993", "", "м", "+7-980-000-00-00");
	arr[19] = new Array("Шалаева Наталия", "ПМИ", "17.04.1993", "", "ж", "+7-980-000-00-00");
	
	/* Вычисляем возраст */
	function theAgeCalculation(birthday){
		day = Number(birthday.slice(0, 2));
		month = Number(birthday.slice(3, 5));
		year = Number(birthday.slice(6));
		var today = new Date();
		year_today = today.getFullYear();
		month_today = today.getMonth() + 1;
		day_today = today.getDate();
		
		age = year_today - year;
		if(month_today < month)
			age--;
		if(month_today == month)
			if(day_today < day)
				age--;
		return age;
	}
	
	/* Заполнение таблицы */
	function filling_table(){
		$("#table_with_people_list").empty();
		$("#table_with_people_list").append("<tr id='table_with_people_list_first_tr'><td>Фамилия Имя</td><td>Группа</td><td>Дата рождения</td><td>Возраст</td><td>Пол</td><td>Телефон</td></tr>");
		for(var i = 0; i < arr.length; i++){
			arr[i][3] = theAgeCalculation(arr[i][2]);
			$("#table_with_people_list").append("<tr><td>" + arr[i][0] +  "</td><td>" + arr[i][1] + "</td><td>" + arr[i][2] +"</td><td>" + arr[i][3] + "</td><td>" + arr[i][4] + "</td><td>" + arr[i][5] + "</td></tr>");
		}
	}
	
	filling_table();
	
	$("#button_add_in_table").bind("click", function(){
		var fi = $("#fi").val();
		var birthday = $("#input_date").val();
		var group = $("#select_group").val();
		var floor = $("#select_floor").val();
		var telephone = $("#add_telefon").val();
		
		//проверка валидности полей
		var bad = "";
		if(fi == ""){
			bad = "Вы не ввели имя* <br />";
		}
		else{
			var k = 0;
			fi = $.trim(fi);
			for(var i = 0; i < fi.length; i++)
				if(fi.charAt(i) == " ")
					k++;
			if(k != 1)
				bad += "Вы неправильно ввели имя и фамилию* <br />";
		}	
		
		if(birthday == ""){
			bad += "Вы не ввели дату* <br />";
		}
		else{
			year = birthday.slice(0, 4);
			month = birthday.slice(5, 7);
			day = birthday.slice(8, 10);
			if((year < 1990) ||(year > 2000))
				bad += "Вы неверно ввели дату* <br />";
			birthday = day + "." + month + "." + year;
		}
		
		if((group != "fiit") && (group != "pmi"))
			bad += "Вы не указали группу* <br />";
		else{
			if(group == "fiit")
				group = "ФИИТ";
			if(group == "pmi")
				group = "ПМИ";
		}
		
		if((floor != "m") && (floor != "w"))
			bad += "Вы не указали пол* <br />";
		else{
			if(floor == "m")
				floor = "м";
			if(floor == "w")
				floor = "ж";
		}
		
		var age = theAgeCalculation(birthday);
		
		if(telephone.length != 10)
			bad += "Вы неправильно указали номер (пример: 9809110202)*";
		else{
			var first = telephone.slice(0, 3);
			var second = telephone.slice(3, 6);
			var third = telephone.slice(6, 8);
			var four = telephone.slice(8);
			telephone = "+7-" + first + "-" + second + "-" + third + "-" + four;
		}
		
		if(bad != ""){
			$("#error_list_add_people").remove();
			$("#form_for_add_people").append("<div id='error_list_add_people'>" + bad + "</div>");
			var tmp = true; //чтобы ошибки показывались только один раз
		}
		
		else{
			$("#error_list_add_people").remove();
			$("#table_with_people_list").append("<tr><td>" + fi + "</td><td>" + group + "</td><td>" + birthday +"</td><td>" + age + "</td><td>" + floor + "</td><td>" + telephone + "</td></tr>");
		}
	});
	
	$("#filters_submit").bind("click", function(){
		$("#content #table_for_add_people_and_search").hide();
		$("#content #form_for_add_people").hide();
		$("#table_with_people_list").empty();
		$("#rezult_search").remove();
		$(".br").remove();
		$("<br class='br'/><br class='br'/><span id='rezult_search'>Результаты поиска... </span>").insertBefore("#table_with_people_list");
		$("#table_with_people_list").append("<tr id='table_with_people_list_first_tr'><td>Фамилия Имя</td><td>Группа</td><td>Дата рождения</td><td>Возраст</td><td>Пол</td><td>Телефон</td></tr>");
		
		var floor = $("input[name='floor_filters']:checked").val();
		var age = $("select[name='filters_age']").val();
		var group = $("select[name='filters_group']").val();
		
		switch(age){
			case "1":{
				age = "20";
				break;
			}
			case "2":{
				age = "21";
				break;
			}
			case "3":{
				age = "22";
				break;
			}
			case "4":{
				age = "23";
				break;
			}
			case "5":{
				age = "24";
				break;
			}
			case "6":{
				age = "25";
				break;
			}
			case "7":{
				age = "26";
				break;
			}
		}
		switch(group){
			case "1":{
				group = "ПМИ";
				break;
			}
			case "2":{
				group = "ФИИТ";
				break;
			}
		}

		var count_return_people = 0;
		if(floor == 1){
			if(age == "0"){
				if(group == "0"){
					for(var i = 0; i < arr.length; i++){
						arr[i][3] = theAgeCalculation(arr[i][2]);
						$("#table_with_people_list").append("<tr><td>" + arr[i][0] +  "</td><td>" + arr[i][1] + "</td><td>" + arr[i][2] +"</td><td>" + arr[i][3] + "</td><td>" + arr[i][4] + "</td><td>" + arr[i][5] + "</td></tr>");
						count_return_people++;
					}
				}
				else{
					for(var i = 0; i < arr.length; i++){
						if(arr[i][1] == group){
							arr[i][3] = theAgeCalculation(arr[i][2]);
							$("#table_with_people_list").append("<tr><td>" + arr[i][0] +  "</td><td>" + arr[i][1] + "</td><td>" + arr[i][2] +"</td><td>" + arr[i][3] + "</td><td>" + arr[i][4] + "</td><td>" + arr[i][5] + "</td></tr>");
							count_return_people++;
						}
					}
				}
			}
			else{
				if(group == "0"){
					for(var i = 0; i < arr.length; i++){
						arr[i][3] = theAgeCalculation(arr[i][2]);
						if(arr[i][3] == age){
							$("#table_with_people_list").append("<tr><td>" + arr[i][0] +  "</td><td>" + arr[i][1] + "</td><td>" + arr[i][2] +"</td><td>" + arr[i][3] + "</td><td>" + arr[i][4] + "</td><td>" + arr[i][5] + "</td></tr>");
							count_return_people++;
						}
					}
				}
				else{
					for(var i = 0; i < arr.length; i++){
						if(arr[i][1] == group){
							
							arr[i][3] = theAgeCalculation(arr[i][2]);
							if(arr[i][3] == age){
								$("#table_with_people_list").append("<tr><td>" + arr[i][0] +  "</td><td>" + arr[i][1] + "</td><td>" + arr[i][2] 	+"</td><td>" + arr[i][3] + "</td><td>" + arr[i][4] + "</td><td>" + arr[i][5] + "</td></tr>");
								count_return_people++;
							}
						}
					}
				}
			}
		}
		
		if(floor == 2){
			if(age == "0"){
				if(group == "0"){
					for(var i = 0; i < arr.length; i++){
						arr[i][3] = theAgeCalculation(arr[i][2]);
						if(arr[i][4] == "м"){
							$("#table_with_people_list").append("<tr><td>" + arr[i][0] +  "</td><td>" + arr[i][1] + "</td><td>" + arr[i][2] +"</td><td>" + arr[i][3] + "</td><td>" + arr[i][4] + "</td><td>" + arr[i][5] + "</td></tr>");
							count_return_people++;
						}
					}
				}
				else{
					for(var i = 0; i < arr.length; i++){
						if(arr[i][1] == group){
							arr[i][3] = theAgeCalculation(arr[i][2]);
							if(arr[i][4] == "м"){
								$("#table_with_people_list").append("<tr><td>" + arr[i][0] +  "</td><td>" + arr[i][1] + "</td><td>" + arr[i][2] +"</td><td>" + arr[i][3] + "</td><td>" + arr[i][4] + "</td><td>" + arr[i][5] + "</td></tr>");
								count_return_people++;
							}
						}
					}
				}
			}
			else{
				if(group == "0"){
					for(var i = 0; i < arr.length; i++){
						arr[i][3] = theAgeCalculation(arr[i][2]);
						if(arr[i][3] == age){
							if(arr[i][4] == "м"){
								$("#table_with_people_list").append("<tr><td>" + arr[i][0] +  "</td><td>" + arr[i][1] + "</td><td>" + arr[i][2] +"</td><td>" + arr[i][3] + "</td><td>" + arr[i][4] + "</td><td>" + arr[i][5] + "</td></tr>");
								count_return_people++;
							}
						}
					}
				}
				else{
					for(var i = 0; i < arr.length; i++){
						if(arr[i][1] == group){		
							arr[i][3] = theAgeCalculation(arr[i][2]);
							if(arr[i][3] == age){
								if(arr[i][4] == "м"){
									$("#table_with_people_list").append("<tr><td>" + arr[i][0] +  "</td><td>" + arr[i][1] + "</td><td>" + arr[i][2] 	+"</td><td>" + arr[i][3] + "</td><td>" + arr[i][4] + "</td><td>" + arr[i][5] + "</td></tr>");
									count_return_people++;
								}
							}
						}
					}
				}
			}
		}
		if(floor == 3){
			if(age == "0"){
				if(group == "0"){
					for(var i = 0; i < arr.length; i++){
						arr[i][3] = theAgeCalculation(arr[i][2]);
						if(arr[i][4] == "ж"){
							$("#table_with_people_list").append("<tr><td>" + arr[i][0] +  "</td><td>" + arr[i][1] + "</td><td>" + arr[i][2] +"</td><td>" + arr[i][3] + "</td><td>" + arr[i][4] + "</td><td>" + arr[i][5] + "</td></tr>");
							count_return_people++;
						}
					}
				}
				else{
					for(var i = 0; i < arr.length; i++){
						if(arr[i][1] == group){
							arr[i][3] = theAgeCalculation(arr[i][2]);
							if(arr[i][4] == "ж"){
								$("#table_with_people_list").append("<tr><td>" + arr[i][0] +  "</td><td>" + arr[i][1] + "</td><td>" + arr[i][2] +"</td><td>" + arr[i][3] + "</td><td>" + arr[i][4] + "</td><td>" + arr[i][5] + "</td></tr>");
								count_return_people++;
							}
						}
					}
				}
			}
			else{
				if(group == "0"){
					for(var i = 0; i < arr.length; i++){
						arr[i][3] = theAgeCalculation(arr[i][2]);
						if(arr[i][3] == age){
							if(arr[i][4] == "ж"){
								$("#table_with_people_list").append("<tr><td>" + arr[i][0] +  "</td><td>" + arr[i][1] + "</td><td>" + arr[i][2] +"</td><td>" + arr[i][3] + "</td><td>" + arr[i][4] + "</td><td>" + arr[i][5] + "</td></tr>");
								count_return_people++;
							}
						}
					}
				}
				else{
					for(var i = 0; i < arr.length; i++){
						if(arr[i][1] == group){		
							arr[i][3] = theAgeCalculation(arr[i][2]);
							if(arr[i][3] == age){
								if(arr[i][4] == "ж"){
									$("#table_with_people_list").append("<tr><td>" + arr[i][0] +  "</td><td>" + arr[i][1] + "</td><td>" + arr[i][2] 	+"</td><td>" + arr[i][3] + "</td><td>" + arr[i][4] + "</td><td>" + arr[i][5] + "</td></tr>");
									count_return_people++;
								}
							}
						}
					}
				}
			}
		}
			
		if(count_return_people == 0){
			$("#rezult_search").append(" (поиск не дал результатов)");
			$("#rezult_search").append("<input id='cancel_filters' type='button' value='Снять фильтры'/>");
		}else{
			$("#rezult_search").append(" (" + count_return_people + ") ")
			$("#rezult_search").append("<input id='cancel_filters' type='button' value='Снять фильтры' />");
		}
	});
	
	$(document).on("click", "#cancel_filters", function(){
		$("#table_with_people_list").empty();
		$("#rezult_search").remove();
		$("#content #table_for_add_people_and_search").show();
		$(".br").remove();
		$("#content #add_new_people").show();
		$("#content #cancel_add_new_people").hide();
		$("#table_with_people_list").append("<tr id='table_with_people_list_first_tr'><td>Фамилия Имя</td><td>Группа</td><td>Дата рождения</td><td>Возраст</td><td>Пол</td><td>Телефон</td></tr>");
		filling_table();
	});
	
	$("#input_search").keydown(function (e) {
		if (e.which == 13) { //13 - это код клавиши "Enter"
			$("#content #search img").click();
		}
	});
	
	
	$("#content #search img").bind("click", function(){
		$("<span id='rezult_search'>Результаты поиска... </span>").remove();
		$("#rezult_search").remove();
		$("#cancel_search").remove();
		
		filters_activity(true);
		
		var search = $("#content #search #input_search").val();
		if(search.length != 0){
			$("#table_with_people_list").empty();
			$("#table_for_add_people_and_search a").hide();
			$("#table_with_people_list").append("<tr id='table_with_people_list_first_tr'><td>Фамилия Имя</td><td>Группа</td><td>Дата рождения</td><td>Возраст</td><td>Пол</td><td>Телефон</td></tr>");
			search = search.toLowerCase();
			var count_return_people = 0;
			for(var i = 0; i < arr.length; i++){
				var name = arr[i][0].toLowerCase();
				if(name.indexOf(search) != -1){
					$("#table_with_people_list").append("<tr><td>" + arr[i][0] + "</td><td>" + arr[i][1] + "</td><td>" + arr[i][2] + "</td><td>" + arr[i][3] + "</td><td>" + arr[i][4] + "</td><td>" + arr[i][5] + "</td></tr>");
					count_return_people++;
				}
			}
			$("<span id='rezult_search'>Результаты поиска... </span>").insertBefore("#table_with_people_list");
			if(count_return_people == 0){
				$("#rezult_search").append(" (поиск не дал результатов)");
			}else{
				$("#rezult_search").append(" (" + count_return_people + ") ")
			}
			$("<input id='cancel_search' type='button' value='Завершить поиск'>").insertAfter("#table_with_people_list");
		}
	});
	
	function filters_activity(bool){//активность фильтров при работе поиска
		if(bool){
			$("#filters_submit").css("background-color", "#ebecec");
			$("#filters_submit").css("color", "#6d6d6d");
			$("#filters_submit").css("border", "1px solid #b8b0b0");
		}
		else{
			$("#filters_submit").css("background-color", "#114a76");
			$("#filters_submit").css("color", "#fff");
			$("#filters_submit").css("border", "1px solid #fff");
			$(document).on("mouseover", "#filters_submit", function(){
				$(this).css("background-color", "#08375a");	
			});
			$(document).on("mouseout", "#filters_submit", function(){
				$(this).css("background-color", "#114a76");	
			});
			
			
		}
		$("input[name='floor_filters']").attr("disabled" ,bool);
		$("select[name='filters_age']").attr("disabled" ,bool);
		$("select[name='filters_group']").attr("disabled" ,bool);
		$("#filters_submit").attr("disabled" ,bool);
	}
	
	$(document).on("click", "#cancel_search", function(){
		filters_activity(false);
		$("#table_with_people_list").empty();
		$("#rezult_search").remove();
		$("#cancel_search").remove();
		$("#add_new_people").show();
		$("#table_with_people_list").append("<tr id='table_with_people_list_first_tr'><td>Фамилия Имя</td><td>Группа</td><td>Дата рождения</td><td>Возраст</td><td>Пол</td><td>Телефон</td></tr>");
		filling_table()
		$("#content #search #input_search").val('');
	});
	
});