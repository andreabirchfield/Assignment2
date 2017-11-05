function MenuChoice(selection)
{
    document.getElementById("cslist").style.visibility = "hidden";
    document.getElementById("cshist").style.visibility = "hidden";
    document.getElementById("about").style.visibility = "hidden";
    
    switch(selection)
    {
        case "cslist":
                document.getElementById("cslist").style.visibility = "visible";
        
        CustList();
        break;
        
        case "cshist":
                document.getElementById("cshist").style.visibility = "visible";
        break;
    
        case "about":
                document.getElementById("about").style.visibility = "visible";
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
    var display = "<table><tr><th> Customer Name </th><th> Customer ID</th><th> City</th></tr>";
    var count = 0;
    var companyname = "";
    var customerid = "";
    var city = "";
    
    for (count = 0; count < result.GetAllCustomersResult.length; count ++)
    {
        customerid = result.GetAllStoresResult[count].CustomerID;
        companyname = '<a href = "javascript:Orders('+""+customerid+"')';"+'">';
        companyname += result.GetAllStoresResult[count].CompanyName;
        companyname += '</a>';
        city = result.GetAllStoresResult[count].City;
        
        display += "<tr><td>"+ companyname + "</td><td>" + customerid + "</td><td>" + city + "</td></tr>";
        
    }
    display +="</table>";
    document.getElementById("customerlist").innerHTML = display;

}