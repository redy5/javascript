function add() {
    var text = $(".b-nazv").val();
    var TEMPLATE_ROW = $(".conts").html();
    var TEMPLATE_MINI = $(".b-goods").html();
    var node = $(TEMPLATE_ROW);
    var node_mini = $(TEMPLATE_MINI);
    var chosen = false;
    var count = 1;
    node.find(".bl-product").text(text);
    node_mini.find(".spen").text(text);
    node_mini.find(".spen").append("<button class='b-smallone'>"+count+"</button>");
    node.find(".change").hide();

    node.find(".b-cross").click(function () {
        node.remove();
        node_mini.remove();
    });

    node.find(".b-minus").click(function () {
        if (count != 1)
            count--;
        node.find(".b-count").text(count);
        node_mini.find(".b-smallone").text(count);
    });

    node.find(".b-plus").click(function () {
        count++;
        node.find(".b-count").text(count);
        node_mini.find(".b-smallone").text(count);
    });

    node.find(".b-bought").click(function () {
        if (chosen) {
            node.find(".b-cross").show();
            node.find(".b-plus").show();
            node.find(".b-minus").show();
            node.find(".b-bought").text("Куплено");
            chosen = false;
            node_mini.remove();
            $(".bl-row-left").append(node_mini);
            node.find(".bl-product").text(text);
            node_mini.find(".spen").text(text);
            node_mini.find(".spen").append("<button class='b-smallone'>"+count+"</button>");
        }
        else {
            node.find(".b-cross").hide();
            node.find(".b-plus").hide();
            node.find(".b-minus").hide();
            node.find(".b-bought").text("Не куплено");
            chosen = true;
            node_mini.remove();
            $(".bl-row-bought").append(node_mini);
            node.find(".bl-product").html("<s>"+text+"</s>");
            node_mini.find(".spen").html("<s>"+text+"</s>");
            node_mini.find(".spen").append("<button class='b-smallone'>"+count+"</button>");
        }
    });

    node.find(".bl-product").click(function () {
        if (!chosen) {
            node.find(".bl-product").hide();
            node.find(".change").show();
            node.find(".change").val(text);
            $(".change").focus();
        }
    });

    node.find(".change").focusout(function () {
        node.find(".bl-product").show();
        node.find(".change").hide();
        text = node.find(".change").val();
        node.find(".bl-product").text(text);
        node_mini.find(".spen").text(text);
        node_mini.find(".spen").append("<button class='b-smallone'>"+count+"</button>");
    });

    $(".bl-list").append(node);
    $(".bl-row-left").append(node_mini);
    $(".b-nazv").focus();
    $(".b-nazv").val("");

    return false;
}

$(".b-dod").click(add);

$(".b-nazv").keypress(function (e) {
    if (e.which == 13) {
        add();
    }
});

$(".b-nazv").val("Помідори");
$(".b-dod").trigger("click");
$(".b-nazv").val("Печиво");
$(".b-dod").trigger("click");
$(".b-nazv").val("Сир");
$(".b-dod").trigger("click");
$(".b-nazv").val("");