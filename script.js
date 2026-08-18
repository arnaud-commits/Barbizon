// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? '✕' : '☰';
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = '☰';
      });
    });
  }

  // Devis form: builds a pre-filled email (works with zero backend).
  // IMPORTANT — voir STRATEGIE-SEO-SEA.md : pour du SEA, remplacer ce
  // comportement par un vrai endpoint (Formspree / CRM / webhook) afin
  // de tracker les conversions Google Ads et ne pas dépendre du client mail.
  var form = document.getElementById('devis-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var lines = [
        'Nom : ' + data.get('nom'),
        'Email : ' + data.get('email'),
        'Téléphone : ' + data.get('telephone'),
        'Type d\'événement : ' + data.get('type'),
        'Date souhaitée : ' + data.get('date'),
        'Nombre de couverts : ' + data.get('couverts'),
        'Message : ' + data.get('message')
      ];
      var subject = encodeURIComponent('Demande de devis événement — ' + (data.get('type') || ''));
      var body = encodeURIComponent(lines.join('\n'));
      window.location.href = 'mailto:info@barbizon.be?subject=' + subject + '&body=' + body;

      var success = document.getElementById('devis-success');
      if (success) success.classList.add('show');

      if (typeof gtag === 'function') {
        // Conversion Google Ads — remplacer AW-XXXXXXX/XXXXXXXXX par vos identifiants
        gtag('event', 'conversion', { send_to: 'AW-XXXXXXX/XXXXXXXXX' });
      }
    });
  }
});
