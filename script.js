function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$(document).ready(async function () {
    $(".captain").addClass("show");
    await sleep(500);
    $(".message.0").addClass("show");

});

$(".message.0 .reply-yes").click(async function () {
    $(this).parents(".message").removeClass("show");
    $(this).parents(".message").addClass("hide");
    await sleep(300);
    $('.captain img').attr('src', "img/nobita.png");
    $('.message.1').addClass("show");
    await sleep(3000);
    $('.captain').addClass("on-1");
    $('.message.1').addClass("hide");
    await sleep(500);
    $('.message.2').addClass("show");
    await sleep(500);
    $(".login-box").addClass("show");
    await sleep(5000);
    $('.message.2').addClass("hide");
});

$(".btn-login").click(async function () {
    var inputs = $(".login-box input");
    console.log(inputs.eq(0).val().toLowerCase());
    console.log(inputs.eq(1).val().toLowerCase());
    console.log(inputs.eq(2).val().toLowerCase());
    console.log(inputs.eq(3).val().toLowerCase());
    console.log(inputs.eq(4).val());
    if (inputs.eq(0).val().toLowerCase() == "hoàng ngọc bảo minh" &&
            inputs.eq(1).val().toLowerCase() == "có" &&
            inputs.eq(2).val().toLowerCase() == "lê thị thu hoài" &&
            inputs.eq(3).val().toLowerCase() == "có" &&
            inputs.eq(4).val() == 2
        
    )
     {
        $('.captain img').attr('src', "img/nobita.png");
        $('.message.4').addClass("show");
        $('.login-box').addClass("unlock");
        $('.login-box img').attr("src", "img/heart-unlock.png");
        await sleep(5000);
        $('.message.4').addClass("hide");
        $('.message.5').addClass("show");
        $('.login-box').addClass("hide");
        await sleep(2000);
        $('.message.5').addClass("hide");
        $('.captain').removeClass("on-1");
        $('.captain').addClass("on-2");
        $('.background').addClass("on-1");
        $('#container').addClass('show');
        await sleep(3000);
        $('.paper').addClass('show');
        timedCount();
        var audio = new Audio('audio/Love _Paradise.mp3');
        audio.loop = true;
        audio.play();
    } else {
        $('.captain img').attr('src', "img/nobita.png");
        $('.message.3').removeClass("hide");
        $('.message.3').addClass("show");
        await sleep(5000);
        $('.message.3').addClass("hide");
    }
});