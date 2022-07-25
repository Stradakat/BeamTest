(function() {
  var cartContainer = document.getElementById("CartContainer");
  var checkout = document.getElementsByClassName('order-summary__section--discount')[0];

  var idme = `<div class="idme">
    <div class="idme-shopify">
      <p class='idme-btn-affinity'>Hospital Employees, 65+, Medical Providers, Military, Nurses, First Responders, and Teachers receive 25% off</p>
      <a class="idme-btn-unify" href="https://discountify.id.me/oauth/checkpoint/beamtlc" >
        <img src="https://s3.amazonaws.com/idme/developer/idme-buttons/assets/img/verify.svg" alt="ID.me" style="height:52px"/>
      </a>
    </div>
  </div>`;


  checkout && checkout.insertAdjacentHTML("afterend", idme);
})();

