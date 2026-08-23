// Minimal JS: year injection, mobile nav toggle, and simple form handler
document.addEventListener('DOMContentLoaded', function(){
  var year = new Date().getFullYear();
  var els = [document.getElementById('year'), document.getElementById('year-2'), document.getElementById('year-3'), document.getElementById('year-4')];
  els.forEach(function(e){ if(e) e.textContent = year; });

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      if(nav.style.display === 'flex') nav.style.display = '';
      else nav.style.display = 'flex';
    });
  }

  var form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var message = document.getElementById('message').value.trim();
      var status = document.getElementById('form-status');
      if(!name || !email || !message){
        status.textContent = 'Please fill out all fields.'; return;
      }
      // No backend: open mailto as fallback
      var mailto = 'mailto:jcamino12@gmail.com?subject=' + encodeURIComponent('Contact from ' + name) + '&body=' + encodeURIComponent(message + '\n\nFrom: ' + name + ' <' + email + '>');
      window.location.href = mailto;
      status.textContent = 'Opening mail client...';
    });
  }
});