export function showDialog(open: boolean = true) {
    const dialog = document.getElementById("dialogBox") as HTMLDialogElement

    if(open) {
        dialog.showModal();
    } else {
        dialog.close();
    }
}