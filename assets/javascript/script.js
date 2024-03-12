let url = "https://youtu.be/dQw4w9WgXcQ";
window.addEventListener("devtoolschange", (e) => {
    window.location = url;
});

$(function () {
    var title = document.title,
        animSeq = ["/", "$", "\\", "|", "$"],
        animIndex = 0,
        titleIndex = 0;
    function doInverseSpinZeroPitch() {
        var loadTitle = title.substring(0, titleIndex);
        if (titleIndex > title.length) {
            animIndex = 0;
            titleIndex = 0;
        }
        if (animIndex > 3) {
            titleIndex++;
            animIndex = 0;
        }
        document.title = loadTitle + animSeq[animIndex];
        animIndex++;
    }
    window.setInterval(doInverseSpinZeroPitch, 250);
});