document.addEventListener('DOMContentLoaded', () => {
    const quickViewBtns = document.querySelectorAll('.card-action-btn[aria-labelledby="card-label-3"]');
    const quickViewBox = document.getElementById('quick-view-box');
    const quickViewOverlay = document.getElementById('quick-view-overlay');
    const quickViewCloseBtn = quickViewBox.querySelector('.quick-view-close-btn');
    const quickViewImage = document.getElementById('quick-view-image');
    const quickViewName = document.getElementById('quick-view-name');
    const quickViewPrice = document.getElementById('quick-view-price');
    const quickViewDescription = document.getElementById('quick-view-description');
    const thumbnails = quickViewBox.querySelectorAll('.quick-view-thumbnail');
    const connectFarmerBtn = quickViewBox.querySelector('.quick-view-connect-farmer');
  
    quickViewBtns.forEach(button => {
      button.addEventListener('click', (event) => {
        const productCard = button.closest('.product-card');
        const imageSrc = productCard.querySelector('.card-banner img').src;
        const name = productCard.querySelector('.card-title a').textContent;
        const price = productCard.querySelector('.card-price').textContent;
        const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget ligula magna. Duis id dapibus metus. Etiam quis turpis ut ligula tempus fermentum eget et dui."; // Example description
  
        quickViewImage.src = imageSrc;
        quickViewImage.alt = name;
        quickViewName.textContent = name;
        quickViewPrice.textContent = price;
        quickViewDescription.textContent = description;
  
        // Use the main product image for both thumbnails
        document.getElementById('thumbnail-1').src = imageSrc;
        document.getElementById('thumbnail-2').src = imageSrc;
  
        quickViewBox.style.display = 'block';
        quickViewOverlay.style.display = 'block';
  
        // Add event listeners to thumbnails
        thumbnails.forEach(thumbnail => {
          thumbnail.addEventListener('click', () => {
            quickViewImage.src = thumbnail.src;
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            thumbnail.classList.add('active');
          });
        });
      });
    });
  
    quickViewCloseBtn.addEventListener('click', () => {
      quickViewBox.style.display = 'none';
      quickViewOverlay.style.display = 'none';
    });
  
    connectFarmerBtn.addEventListener('click', () => {
      // Implement functionality for Connect with Farmer button
      alert('Connect with Farmer functionality not implemented yet.');
    });
  
    window.addEventListener('click', (event) => {
      if (event.target == quickViewOverlay) {
        quickViewBox.style.display = 'none';
        quickViewOverlay.style.display = 'none';
      }
    });
  });
  