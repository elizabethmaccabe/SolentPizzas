//Order Page JavaScript

//Form Validation
function validate()
{
	var form = document.getElementById("orderForm");
	form.addEventListener("submit", orderValidate);
}

function orderValidate()
{
	var form = document.getElementById("orderForm");
	var toppingValid = false;
	
	if(form.base.value == "")
	{
		document.getElementById("errBaseRequired").style.display = "block";
		event.preventDefault();
	}
	
	else
	{
		document.getElementById("errBaseRequired").style.display = "none";
	}
	
	for(var i = 0; i < form.topping.length; i++)
	{
		if(form.topping[i].checked)
		{     
			toppingValid = true;
		}
	}
	
    if(toppingValid == false)
	{
		document.getElementById("errToppingRequired").style.display = "block";
		event.preventDefault();
	}
	
	else
	{
		document.getElementById("errToppingRequired").style.display = "none";
	}
}
//END


//Order Summary
function order()
{
	var form = document.getElementById("orderForm");
	form.addEventListener("change", summary);
}

function summary(event)
{
	var form = document.getElementById("orderForm");
    var price = 0;
	var desc = "";
    
    
    for(var i = 0; i < form.base.length; i++)
	{
		if(form.base[i].checked == true)
		{
			price = price + parseFloat(form.base[i].dataset.price);
			desc = desc + "<br>" + form.base[i].dataset.humanDesc;
		}	}
    
    for(var i = 0; i < form.topping.length; i++)
	{
		if(form.topping[i].checked == true)
		{
			price =  price + parseFloat(form.topping[i].dataset.price);
			desc = desc + "<br>" + form.topping[i].dataset.humanDesc;
		}
	}
    
    for(var i = 0; i < form.extra.length; i++)
	{
		if(form.extra[i].checked == true)
		{
			price = price + parseFloat(form.extra[i].dataset.price);
			desc = desc + "<br>" + form.extra[i].dataset.humanDesc;
		}
	}
	
	document.getElementById("items").innerHTML = desc;
    document.getElementById("price").innerHTML = "Total: £" + price.toFixed(2);
}
//END