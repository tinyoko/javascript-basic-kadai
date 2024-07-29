const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const textMessage = document.getElementById('text');
    textMessage.textContent = 'ボタンがクリックされました';
})