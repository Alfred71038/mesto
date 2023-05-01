export default function renderLoading (isLoading, buttonSelector) {
    if (isLoading) {
        if (buttonSelector.textContent.length >= 9) {
            buttonSelector.textContent = 'Сохранение...';
        } else {
            buttonSelector.textContent = 'Создание...';
        }
  
    } else {
        if (buttonSelector.textContent.length >= 12) {
            buttonSelector.textContent = 'Сохранить';
        } else {
            buttonSelector.textContent = 'Создать';
        }
    }
}