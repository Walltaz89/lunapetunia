<script>
  const form = document.getElementById('contact-form');
  const confirmation = document.getElementById('confirmation-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    confirmation.style.display = 'block'; 
    
    form.reset();
  });
</script>