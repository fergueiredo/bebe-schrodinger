var first = true

function batatas(form) {
    let formData = new FormData(form)
    let chestId = form.dataset.id
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
        return
    }
    let chest = document.querySelector(`#${chestId}`)
    chest.play()
    let hint = document.querySelector(`#${chestId}-hint`)
    setTimeout(() => {
        hint.innerText = first ? "Sozinho se vai mais rápido, Juntos se vai mais longe" : "A resposta já está em suas mãos"
        first = false
    }, 1000)
}
