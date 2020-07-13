function add_row()
{
    var add_new_name=document.getElementById("name").value;
    var add_new_country=document.getElementById("country").value;
    var add_new_age=document.getElementById("age").value;
 
    var table=document.getElementById("details_table");
    var table_length=(table.rows.length)-1;
    var row = table.insertRow(table_length).outerHTML="<tr id='row"+table_length+"'><td id='name_row"+table_length+"'>"+add_new_name+"</td><td id='country_row"+table_length+"'>"+add_new_country+"</td><td id='age_row"+table_length+"'>"+add_new_age+"</td><td><input type='button' id='edit_button"+table_length+"' value='Edit' class='edit' onclick='edit_row("+table_length+")'> <input type='button' id='save_button"+table_length+"' value='Save' class='save' onclick='save_row("+table_length+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_length+")'></td></tr>";

    document.getElementById("add_new_name").value=" ";
    document.getElementById("add_new_country").value=" ";
    document.getElementById("add_new_age").value=" ";
}


function edit_row(edit)
{
    document.getElementById("edit_button"+edit).style.display="none";
    document.getElementById("save_button"+edit).style.display="block";
	
    var name=document.getElementById("name_row"+edit);
    var country=document.getElementById("country_row"+edit);
    var age=document.getElementById("age_row"+edit);
	
    var name_data=name.innerHTML;
    var country_data=country.innerHTML;
    var age_data=age.innerHTML;
	
    name.innerHTML="<input type='text' id='name_text"+edit+"' value='"+name_data+"'>";
    country.innerHTML="<input type='text' id='country_text"+edit+"' value='"+country_data+"'>";
    age.innerHTML="<input type='text' id='age_text"+edit+"' value='"+age_data+"'>";
}


function save_row(save)
{
    var name_val=document.getElementById("name_text"+save).value;
    var country_val=document.getElementById("country_text"+save).value;
    var age_val=document.getElementById("age_text"+save).value;

    document.getElementById("name_row"+save).innerHTML=name_val;
    document.getElementById("country_row"+save).innerHTML=country_val;
    document.getElementById("age_row"+save).innerHTML=age_val;
    document.getElementById("edit_button"+save).style.display="block";
    document.getElementById("save_button"+save).style.display="none";
}


function delete_row(del)
{
    document.getElementById("row"+del+"").outerHTML="";
}




