
        var max_limit_car=60;
	var max_limit_bike=40;
	var no_of_car=0;
	var no_of_bike=0;
        var res5=0;
        var res6=0;
        var res7;
        var res8;

function a()
 {
  	var val0=document.getElementById('val0').value;
       var val1=parseInt(document.getElementById('val1').value);
       var val2=parseInt(document.getElementById('val2').value);
       var val3=document.getElementById('val3').value;
       if (document.getElementById('val0').value == '') { alert('warning : Enter a proper name !'); return }
       if (document.getElementById('val1').value == '') { alert('warning : Please select from option !'); return }
       if (document.getElementById('val2').value == '') { alert('warning : Enter number of bike/car !'); return }
       if (document.getElementById('val3').value == '') { alert('warning : Enter Vehicle number !'); return }
   switch(val1)
	{
		case 1: if(max_limit_bike>=val2)
   			{
   				max_limit_bike=max_limit_bike-val2;
   				no_of_bike=no_of_bike+val2;
   				document.getElementById('res1').innerHTML=no_of_bike;
   				document.getElementById('res2').innerHTML=max_limit_bike;
                                var res5=no_of_bike*20;
                                document.getElementById('res5').innerHTML=res5;
                                var res7=((no_of_bike)*20+(no_of_car)*50);
                                document.getElementById('res7').innerHTML=res7;
                                document.getElementById('res0').innerHTML=val0;
   			           document.getElementById('res8').innerHTML=val3;
   			}
   			else
   			{
    				alert("Sorry! Space not available");
   			}
			break; 
		case 2: if(no_of_bike>=val2)
			{
  				no_of_bike=no_of_bike-val2; 
				max_limit_bike=max_limit_bike+val2;	
   				document.getElementById('res1').innerHTML=no_of_bike;
   				document.getElementById('res2').innerHTML=max_limit_bike;
                                var res5=no_of_bike*20;
                                document.getElementById('res5').innerHTML=res5;
                                var res7=((no_of_bike)*20+(no_of_car)*50);
                                document.getElementById('res7').innerHTML=res7;
                                document.getElementById('res0').innerHTML=val0;
                                document.getElementById('res8').innerHTML=val3;	
			} 
   			else
   			{
   				alert("Not available!");
   			} 
			break; 
                 case 3: if(max_limit_car>=val2)
   			    {
   				max_limit_car=max_limit_car-val2;
   				no_of_car=no_of_car+val2;
   				document.getElementById('res3').innerHTML=no_of_car;
   				document.getElementById('res4').innerHTML=max_limit_car;
                                var res6=no_of_car*50;
                                document.getElementById('res6').innerHTML=res6;
                                var res7=((no_of_bike)*20+(no_of_car)*50);
                                document.getElementById('res7').innerHTML=res7;
                                document.getElementById('res0').innerHTML=val0;
                                document.getElementById('res8').innerHTML=val3;
   			
   			   }
   			   else
   			   {
    				alert("Sorry! Space not available");
   			   }
	                  break;
                  case 4: if(no_of_car>=val2)
			{
  				no_of_car=no_of_car-val2; 
				max_limit_car=max_limit_car+val2;	
   				document.getElementById('res3').innerHTML=no_of_car;
   				document.getElementById('res4').innerHTML=max_limit_car;
                                var res6=no_of_car*50;
                                document.getElementById('res6').innerHTML=res6;
                                var res7=((no_of_bike)*20+(no_of_car)*50);
                                document.getElementById('res7').innerHTML=res7;
                                document.getElementById('res0').innerHTML=val0;
                                document.getElementById('res8').innerHTML=val3;	
			} 
   			else        
   			{
   				alert("Not available!");
   			} 
			break; 
                  case 5:
                         var res7=((no_of_bike)*20+(no_of_car)*50);
                         document.getElementById('res7').innerHTML=res7;
                         alert("Thank you!\nName: "+val0+"\nVehicle Number: "+val3+"\nYour total bill: "+res7+" Rs. only/-");	
			 break; 
                           
         } 
} 