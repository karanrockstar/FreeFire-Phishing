<script>
var downloadButton = document.getElementById("download");
var counter = 100;
var newElement = document.createElement("p");
newElement.innerHTML = "<b> </b>";
var id;

downloadButton.parentNode.replaceChild(newElement, downloadButton);

function startDownload() {
    this.style.display = 'none';
    id = setInterval(function () {
        counter--;
        if (counter < 0) {
            newElement.parentNode.replaceChild(downloadButton, newElement);
            clearInterval(id);
        } else {
            newElement.innerHTML = +counter.toString() + " <b> Add & Bypass. Please Wait</b>";
        }
    }, 1000);
};

var clickbtn = document.getElementById("btn");
clickbtn.onclick = startDownload;
</script></div>
