<script>
import logo from "../../assets/sakura.png";
</script>

<template>
  <div class="bg-gray-300 w-full h-screen flex items-center justify-center">
    <div
      class="flex flex-col bg-sky-300 bg-opacity-50 w-full max-w-md mx-auto p-12 rounded-3xl shadow-lg"
    >
      <n-form ref="formRef">
        <div class="flex flex-col space-y-0">
          <div class="flex justify-center mb-5">
            <img :src="logo" />
          </div>
          <n-form-item label="DNI:">
            <n-input
              size="large"
              placeholder="DNI: 9999498473"
              :allow-input="onlyAllowNumber"
              class="!rounded-2xl"
            >
              <template #suffix>
                <i-material-symbols-id-card-outline
                  class="text-gray-500 size-7"
                />
              </template>
            </n-input>
          </n-form-item>
          <n-form-item label="Contraseña:">
            <n-input
              size="large"
              type="password"
              show-password-on="click"
              :maxlength="8"
              class="!rounded-2xl"
            >
            </n-input>
          </n-form-item>
          <n-button
            size="large"
            class="!bg-gray-500 !text-white !rounded-2xl !border-gray-500 font-semibold transition-all duration-400 transform hover:!bg-rose-400 hover:!font-bold"
            >Buscar</n-button
          >
        </div>
      </n-form>
    </div>
  </div>
</template>
