document.addEventListener('DOMContentLoaded', () => {
  const connectWithFarmerBtns = document.querySelectorAll('.connect-with-farmer-btn');
  const messageBox = document.getElementById('message-box');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.querySelector('.close-btn');
  const productImage = document.getElementById('product-image');
  const productName = document.getElementById('product-name');
  const productPrice = document.getElementById('product-price');
  const emailInput = document.getElementById('email-input');
  const messageTextarea = document.querySelector('.message-box textarea');

  let currentProductId = null;

  connectWithFarmerBtns.forEach(button => {
    button.addEventListener('click', (event) => {
      const productCard = button.closest('.product-card');
      const imageSrc = productCard.querySelector('.card-banner img').src;
      const name = productCard.querySelector('.card-title a').textContent;
      const price = productCard.querySelector('.card-price').textContent;
      const productId = `${name}-${price}`.replace(/\s+/g, '-').toLowerCase();

      productImage.src = imageSrc;
      productImage.alt = name;
      productName.textContent = name;
      productPrice.textContent = price;
      currentProductId = productId;

      // Load saved email and message from local storage if available
      const savedEmail = localStorage.getItem(`${productId}-email`) || '';
      const savedMessage = localStorage.getItem(`${productId}-message`) || '';
      emailInput.value = savedEmail;
      messageTextarea.value = savedMessage;

      messageBox.style.display = 'block';
      overlay.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', () => {
    // Save the email and message to local storage
    if (currentProductId) {
      localStorage.setItem(`${currentProductId}-email`, emailInput.value);
      localStorage.setItem(`${currentProductId}-message`, messageTextarea.value);
    }

    messageBox.style.display = 'none';
    overlay.style.display = 'none';
    emailInput.value = ''; // Clear the email input
    messageTextarea.value = ''; // Clear the text area
  });

  window.addEventListener('click', (event) => {
    if (event.target == overlay) {
      // Save the email and message to local storage
      if (currentProductId) {
        localStorage.setItem(`${currentProductId}-email`, emailInput.value);
        localStorage.setItem(`${currentProductId}-message`, messageTextarea.value);
      }

      messageBox.style.display = 'none';
      overlay.style.display = 'none';
      emailInput.value = ''; // Clear the email input
      messageTextarea.value = ''; // Clear the text area
    }
  });
});
