let nn = [];
var x;
Check = window.prompt('Geben Sie Ihren Namen ein', '');
if (Check == '') {
    alert('Keine Angabe');
}
else {
    nn.push(Check);
    console.log(nn[0]);
}
window.addEventListener("load", function () {
    document.getElementById("nome").innerHTML = nn[0];
});
//# sourceMappingURL=script.js.map