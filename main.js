//penggunaan event click paragraf jadi hilang(hide) menggunakan class
$(document).ready(function() {
    $(".button1").click(function() {
        $(".estt").hide();
    });
});

//penggunaan event click paragraf jadi hilang(hide) menggunakan id
$(document).ready(function() {
    $("#button").click(function() {
        $("#test").hide();
    });
});

//penggunaan Event doble click paragraf jadi hilang(hide) menggunakan this
$(document).ready(function() {
    $("p").dblclick(function() {
        $(this).hide();
    });
});

//penggunaan focus dan blur
$(document).ready(function() {
    $("input").focus(function() {
        $(this).css("background-color", "yellow");
    });
    $("input").blur(function() {
        $(this).css("background-color", "green");
    });
});

// penggunaan jQuery effect show-hide
$(document).ready(function() {
    $("#hide").click(function() {
        $("p").hide();
    });
    $("#show").click(function() {
        $("p").show();
    });
});

//penggunaan jQuery Effect fade
$(document).ready(function() {
    $(".button1").click(function() {
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });
});

// penggunaan jquery Effect slide
$(document).ready(function() {
    $("#flip1").click(function() {
        $("#panel1").slideToggle("slow");
    });
});
// penggunaan jquery Effect animate
$(document).ready(function() {
    $(".button2").click(function() {
        $(".div4").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    });
});

// penggunaan jquery Effect stop()
$(document).ready(function() {
    $("#flip2").click(function() {
        $("#panel2").slideDown(5000);
    });
    $("#stop").click(function() {
        $("#panel2").stop();
    });
});
// penggunaan jquery Effect callback
$(document).ready(function() {
    $(".button3").click(function() {
        $(".p1").hide("slow", function() {
            alert("The paragraph is now hidden");
        });
    });
});
// penggunaan jquery Effect chaining
$(document).ready(function() {
    $(".button4").click(function() {
        $(".p2").css("color", "red")
            .slideUp(2000)
            .slideDown(2000);
    });
});
// penggunaan jquery HTML get
$(document).ready(function() {
    $("#btn3").click(function() {
        alert("Text: " + $("#test2").text());
    });
    $("#btn4").click(function() {
        alert("HTML: " + $("#test2").html());
    });
});
// penggunaan jquery HTML set
$(document).ready(function() {
    $("#btn5").click(function() {
        $("#test3").text("Hello world!");
    });
    $("#btn6").click(function() {
        $("#test4").html("<b>Hello world!</b>");
    });
    $("#btn7").click(function() {
        $("#test5").val("Dolly Duck");
    });
});
// penggunaan jquery HTML add
$(document).ready(function() {
    $("#btn8").click(function() {
        $(".p3").append(" <b>Appended text</b>.");
    });

    $("#btn9").click(function() {
        $("ol").append("<li>Appended item</li>");
    });
});
// penggunaan jquery HTML remove
$(document).ready(function() {
    $("button").click(function() {
        $("#div5").remove();
    });
});