
document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("btn-agendar");

    botao.addEventListener("click", function () {
        alert("💈 Agendamento demonstrativo! Em um site real, você poderia agendar seu horário aqui.");
    });
});

const botoesFiltro = document.querySelectorAll(".filtro");
const itensGaleria = document.querySelectorAll(".galeria-item");

botoesFiltro.forEach(function (botao) {
    botao.addEventListener("click", function () {
        const filtro = botao.getAttribute("data-filtro");

        botoesFiltro.forEach(function (item) {
            item.classList.remove("ativo");
        });

        botao.classList.add("ativo");

        itensGaleria.forEach(function (item) {
            const categoria = item.getAttribute("data-categoria");

            if (filtro === "todos" || filtro === categoria) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});
