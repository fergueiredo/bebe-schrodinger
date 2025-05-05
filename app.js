var first = true
const firstMessage = "Sozinho se vai mais rápido, Juntos se vai mais longe";
const secondMessage = "A resposta já está em suas mãos"

function openChest(form) {
    let formData = new FormData(form)
    let chestId = form.dataset.id
    let button = form.querySelector("button")
    button.disabled = true
    console.log("Chest ID: ", chestId)
    let secret = form.dataset.secret
    if (
        secret[0] != formData.get("first") ||
        secret[1] != formData.get("second") ||
        secret[2] != formData.get("third") ||
        secret[3] != formData.get("fourth") ||
        secret[4] != formData.get("fifth") ||
        secret[5] != formData.get("sixth")
    ) {
        console.log("Incorrect!")
        button.disabled = false
        return
    }

    first = false

    button.innerText = "Aberto"

    let hint = document.querySelector(`#${chestId}-hint`)
    hint.innerText = first ? firstMessage : secondMessage
    hint.classList.add("open")

    let chest = document.querySelector(`#${chestId}`)
    chest.play()
}
