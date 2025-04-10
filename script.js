$(document).ready(function () {
    // Show all items initially with fade effect
    $(".gallery-item").fadeIn(1000);

    $(".filter-btn").click(function () {
        const filter = $(this).attr("data-filter");

        $(".filter-btn").removeClass("active");
        $(this).addClass("active");

        if (filter === "all") {
            $(".gallery-item").fadeOut(200, function () {
                $(".gallery-item").fadeIn(500);
            });
        } else {
            $(".gallery-item").each(function () {
                const category = $(this).data("category");
                if (category === filter) {
                    $(this).fadeOut(200).delay(200).fadeIn(500);
                } else {
                    $(this).fadeOut(300);
                }
            });
        }
    });
});
