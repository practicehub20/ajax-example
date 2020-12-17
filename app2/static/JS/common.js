function submit_button()
{
    var button = document.getElementById("b1");
    return button;
}

function validate_contact()
{
    var button = submit_button();
    var contactno = document.getElementById("contact").value;
    var request = new XMLHttpRequest();
    if (contactno != '')
    {
        request.open("POST","http://127.0.0.1:8000/validate_contact/",true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.send("cno="+contactno);
        request.onreadystatechange = show;
    }
    else
    {
        alert('Must enter phone no.')
    }

    function show()
    {
        if(request.readyState == 4)
        {
          var res_text = request.responseText;
          // converting text(string) to json
          var json_data = JSON.parse(res_text);

          if(json_data.result)
          {
             document.getElementById("s_contact").innerText = "This Contact No is Taken";
             button.disabled = true
          }
          else
          {
              document.getElementById("s_contact").innerText = "";
              button.disabled = false
          }

        }
    }
}

function validate_email()
{
    var button = submit_button();
    var email = document.getElementById("email").value;
    var request = new XMLHttpRequest();
    request.open("POST","http://127.0.0.1:8000/validate_email/",true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send("email="+email);
    request.onreadystatechange = show;

    function show()
    {
        if(request.readyState == 4)
        {
          var res_text = request.responseText;
          // converting text(string) to json
          var json_data = JSON.parse(res_text);

          if(json_data.result)
          {
             document.getElementById("e_mail").innerText = "This Email is Taken";
             button.disabled = true
          }
          else {
              document.getElementById("e_mail").innerText = "";
              button.disabled = false
          }

        }
    }
}


