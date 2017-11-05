function MenuChoice(selection)
{
    document.getElementById("custlist").style.visibility = "hidden";
    document.getElementById("custhist").style.visibility = "hidden";
    document.getElementById("aboutsect").style.visibility = "hidden";
    
    
    switch(selection)
    {
        case "cslist":
                document.getElementById("custlist").style.visibility = "visible";
        
        CustList();
        break;
        
        case "cshist":
                document.getElementById("custhist").style.visibility = "visible";
        break;
    
        case "about":
                document.getElementById("aboutsect").style.visibility = "visible";
        break;
        
        case "None":
        break;
    default:
        alert("Please select a different menu option");
    }
}


function CustList()
{
    var xmlhttp = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getAllCustomers";
    
    xmlhttp.onreadystatechange = function ()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status==200)
        {
            var output = JSON.parse(xmlhttp.responseText);
            GenerateOutput(output);  
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
}

function GenerateOutput(result)
{
    var display = "<table class = 'tablecenter'><tr><th> Customer Name </th><th> Customer ID</th><th> City</th></tr>";
    var count = 0;
    var companyname = "";
    var customerid = "";
    var city = "";
    
    for (count = 0; count < result.GetAllCustomersResult.length; count ++)
    {
        customerid = result.GetAllCustomersResult[count].CustomerID;
        companyname = '<a href = "javascript:Orders('+"'"+customerid+"');"+'">';
        companyname += result.GetAllCustomersResult[count].CompanyName;
        companyname += '</a>';
        city = result.GetAllCustomersResult[count].City;
        
        display += "<tr><td>"+ companyname + "</td><td>" + customerid + "</td><td>" + city + "</td></tr>";
        
    }
    display +="</table>";
    
    document.getElementById("custlist").innerHTML = display;
   
  //  document.getElementById('enterstore').value = customerid;
    //document.getElementById('CompanyID').value = customerid;
}

function Orders(customerid)

{
    var xmlhttp = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
    
    url += customerid;
    xmlhttp.onreadystatechange = function()
    {
        if(xmlhttp.readyState == 4 && xmlhttp.status ==200)
        {
            var output = JSON.parse(xmlhttp.responseText);
            GenerateOutput(output);
        }
    };
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
    function GenerateOutput(result)
    {
        var display = "<table class= 'tablecenter' > <tr><th> Product Name</th><th> Total</th></tr>";
        
        var count = 0;
        for ( count = 0; count<result.length; count ++)
        
        {
            display += "<tr><td>" + result[count].ProductName + "</td><td>" + result[count].Total + "</td></tr>";
           //  display2+= "<tr><td>" + result[count].ProductName + "</td><td>" + result[count].Total + "</td></tr>";
        }
        display +="</table>";
     
      document.getElementById('stname').value = "";     
      document.getElementById("sec2").innerHTML = display;
       //document.getElementById("testb").style.visibility = "visible";
       //document.getElementById("testb").innerHTML = display;
        MenuChoice("cshist");
    }
  
}

function Orders1()

{
    customerid=document.getElementById("stname").value;
    var xmlhttp = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
    
    url += customerid;
    xmlhttp.onreadystatechange = function()
    {
        if(xmlhttp.readyState == 4 && xmlhttp.status ==200)
        {
            var output = JSON.parse(xmlhttp.responseText);
            GenerateOutput(output);
        }
    };
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
    function GenerateOutput(result)
    {
        var display = "<table class= 'tablecenter' > <tr><th> Product Name</th><th> Total</th></tr>";
        
        var count = 0;
        for ( count = 0; count<result.length; count ++)
        
        {
            display += "<tr><td>" + result[count].ProductName + "</td><td>" + result[count].Total + "</td></tr>";
           //  display2+= "<tr><td>" + result[count].ProductName + "</td><td>" + result[count].Total + "</td></tr>";
        }
        display +="</table>";
     
      document.getElementById("sec2").innerHTML = display;
       //document.getElementById("testb").style.visibility = "visible";
       //document.getElementById("testb").innerHTML = display;
        MenuChoice("cshist");
    }
  
}

  function goBack() {
    
      document.getElementById("custlist").style.visibility = "visible";
      document.getElementById("custhist").style.visibility = "hidden";
      document.getElementById("aboutsect").style.visibility = "hidden";
        
}
 