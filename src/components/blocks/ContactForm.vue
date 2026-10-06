<script setup lang="ts">
/**
 * Contact form handled by Netlify Forms (submissions appear in the Netlify
 * dashboard and can be emailed on). Netlify finds the form in the pre-rendered
 * HTML at deploy time; we submit it with fetch so the page doesn't reload.
 */
import { reactive, ref } from 'vue'

const FORM_NAME = 'contact'
const fields = reactive({ firstName: '', lastName: '', email: '', message: '', 'bot-field': '' })
const status = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')

async function submit() {
  status.value = 'sending'
  try {
    const body = new URLSearchParams({ 'form-name': FORM_NAME, ...fields }).toString()
    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
    if (!res.ok) throw new Error(String(res.status))
    status.value = 'sent'
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <div class="contact-form">
    <p v-if="status === 'sent'" class="contact-form__thanks" role="status">Thank you!</p>
    <form
      v-else
      :name="FORM_NAME"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      @submit.prevent="submit"
    >
      <input type="hidden" name="form-name" :value="FORM_NAME" />
      <p class="visually-hidden">
        <label>Don’t fill this out: <input v-model="fields['bot-field']" name="bot-field" tabindex="-1" autocomplete="off" /></label>
      </p>

      <fieldset class="field">
        <legend class="field__title">Name</legend>
        <div class="name-row">
          <label class="field__sub">
            <span class="field__label">First Name <span class="required">(required)</span></span>
            <input v-model="fields.firstName" name="firstName" type="text" autocomplete="given-name" required />
          </label>
          <label class="field__sub">
            <span class="field__label">Last Name <span class="required">(required)</span></span>
            <input v-model="fields.lastName" name="lastName" type="text" autocomplete="family-name" required />
          </label>
        </div>
      </fieldset>

      <label class="field">
        <span class="field__title">Email <span class="required">(required)</span></span>
        <input v-model="fields.email" name="email" type="email" autocomplete="email" required />
      </label>

      <label class="field">
        <span class="field__title">Message <span class="required">(required)</span></span>
        <textarea v-model="fields.message" name="message" required />
      </label>

      <p v-if="status === 'error'" class="contact-form__error" role="alert">
        Sorry, something went wrong sending your message. Please try again.
      </p>

      <button class="btn" type="submit" :disabled="status === 'sending'">Send</button>
    </form>
  </div>
</template>

<style scoped>
.contact-form {
  color: var(--text);
  font-size: var(--normal-size);
}
form {
  margin: 0;
}
.field {
  display: block;
  margin: 0 0 19px;
  padding: 0;
  border: 0;
}
.field__title {
  display: block;
  margin-bottom: 4px;
  padding: 0;
  line-height: var(--body-line);
}
.name-row {
  display: flex;
  gap: 10px;
  margin-top: 4px;
}
.field__sub {
  flex: 1 1 0;
  min-width: 0;
}
.field__label {
  display: block;
  margin-bottom: 0;
  font-size: 12px;
  line-height: 1;
}
.required {
  margin-left: 4px;
  font-size: 12px;
  opacity: 0.7;
}
.field__label .required {
  font-size: inherit;
}
input,
textarea {
  display: block;
  width: 100%;
  margin: 0;
  padding: 10px;
  border: 1px solid var(--black);
  border-radius: 0;
  background: var(--field-fill);
  color: var(--black);
  font: inherit;
  line-height: var(--body-line);
}
textarea {
  height: 100px;
  resize: vertical;
}
.btn {
  margin-top: 1px;
}
.btn:disabled {
  opacity: 0.6;
  cursor: wait;
}
.contact-form__thanks {
  margin: 0;
  font-size: var(--large-size);
}
.contact-form__error {
  margin: 0 0 16px;
}
</style>
