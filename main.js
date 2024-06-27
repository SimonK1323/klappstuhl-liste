fetch('klappstuhl-liste.txt')
    .then((res) => res.text())
    .then((text) => {
        doSyncStuffWithText(text.split('\r\n').filter(x => !!x));
    })

const doSyncStuffWithText = (arr) => {
    document.getElementById('amount-of-reasons').innerText = arr.length;
    const unlinkedList = document.getElementById('unlinked-list');
    for (let i = 0; i < arr.length; i++) {
        const liElement = document.createElement('li');
        const textNode = document.createTextNode(arr[i]);
        liElement.append(textNode);
        unlinkedList.append(liElement);
    }
}

