// Get all the accordion headers
const accordionHeaders = document.querySelectorAll('.accordion-header');

// Add click event listeners to each accordion header
accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    // Toggle the visibility of the accordion content
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'none' ? 'block' : 'none';

    // Toggle the plus and minus signs
    const icon = header.querySelector('.icon');
    icon.textContent = content.style.display === 'none' ? '+' : '-';
  });
});
