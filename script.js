
        var textbox = document.getElementById("textbox");
        var result = document.getElementById("result")
        errormsg = document.getElementById("errormsg")
        var limit = 50;
        result.textContent = 0 + "/" + limit;

        textbox.addEventListener("input", function () {
            var charcount = textbox.value.length;
            result.textContent = charcount + "/" + limit;

            if (charcount == limit) {
                errormsg.textContent = " Oops.. You have reached the limit !";
                errormsg.style.color = "#cf0000";
            }
            else
            {
                errormsg.textContent = " ";
            }
        })


