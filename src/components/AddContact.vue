<template>
  <div>
    <router-link to="/" id="cancelBtn" />
    <a href="#" id="saveBtn" @click.prevent="saveData" v-if="isOnline" />
    <div class="add-form">
      <user-input label="Name" v-model="contact.name" />
      <user-input mode="textHalf" label="E-Mail" v-model="contact.email" />
      <user-input mode="textHalf" label="Phone" v-model="contact.phone" />
      <user-input mode="textarea" label="Address" v-model="contact.address" />
      <user-input
        mode="social"
        platform="facebook"
        v-model="contact.fbHandle"
      />
      <user-input
        mode="social"
        platform="twitter"
        v-model="contact.twitterHandle"
      />
      <user-input
        mode="social"
        platform="instagram"
        v-model="contact.instaHandle"
      />
      <user-input
        mode="social"
        platform="linkedin"
        v-model="contact.linkedinHandle"
      />
    </div>
  </div>
</template>

<script>
import UserInput from './UserInput';
import { firebase } from '../db';
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegEx = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;

export default {
  name: 'add-contact',
  components: {
    UserInput
  },
  props: ['isOnline'],
  data() {
    return {
      contact: {
        name: '',
        email: '',
        phone: '',
        address: '',
        fbHandle: '',
        twitterHandle: '',
        instaHandle: '',
        linkedinHandle: ''
      }
    };
  },
  firebase,
  computed: {
    validate() {
      let { name, email, phone, address } = this.contact;
      return (
        name !== '' &&
        emailRegEx.test(email) &&
        phoneRegEx.test(phone) &&
        address !== ''
      );
    }
  },
  methods: {
    clearOut() {
      for (let item in this.contact) {
        this.contact[item] = '';
      }
    },
    saveData() {
      if (this.validate) {
        // Save Data
        this.$firebaseRefs.contacts.push(this.contact);
        console.log('data');
        this.clearOut();
        this.$router.push('/');
      }
    }
  }
};
</script>
