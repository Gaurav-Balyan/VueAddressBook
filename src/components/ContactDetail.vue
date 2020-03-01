<template>
  <div>
    <router-link to="/" id="cancelBtn" />
    <a href="#" id="deleteBtn" />
    <div class="contact-detail-pane">
      <span class="detail-name"></span>
      <span class="detail-phone"></span>
      <span class="detail-email"></span>
      <span class="detail-address"></span>
      <div class="social-ids">
        <div class="social-id">
          <span class="icon fbico"></span>
          <span class="social-id-value"></span>
        </div>
        <div class="social-id">
          <span class="icon twico"></span>
          <span class="social-id-value"></span>
        </div>
        <div class="social-id">
          <span class="icon instaico"></span>
          <span class="social-id-value"></span>
        </div>
        <div class="social-id">
          <span class="icon linkedinico"></span>
          <span class="social-id-value"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact-detail',
  props: ['isOnline', 'id']
};
</script>
