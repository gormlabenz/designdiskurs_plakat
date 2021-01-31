<template>
  <div
    id="app"
    class="p-16"
    v-bind:style="
      'background: linear-gradient(-45deg, #' + this.tl + ', #' + this.br + ');'
    "
  >
    <button
      @click="print"
      class="bg-white shadow-md px-4 py-2 rounded-md focus:outline-none absolute top-0 right-0 m-8 print-hidden"
    >
      Print
    </button>
    <div class="flex space-x-4 print-hidden">
      <div
        @click="setTl(color)"
        v-for="color in colors"
        :key="color"
        v-bind:style="'background-color: #' + color"
        class="w-8 h-8 rounded-full border-gray-700 shadow-md cursor-pointer"
      ></div>
    </div>
    <div class="flex space-x-4 bottom-0 absolute right-0 m-8 print-hidden">
      <div
        @click="setBr(color)"
        v-for="color in colors"
        :key="color"
        v-bind:style="'background-color: #' + color"
        class="w-8 h-8 rounded-full border-gray-700 shadow-md cursor-pointer"
      ></div>
    </div>
    <div class="bg-transparent bottom-0 absolute flex flex-col max-w-md mb-8">
      <input
        class="bg-transparent text-6xl focus:outline-none"
        type="text"
        value="Das Plakat"
      />
      <textarea
        class="bg-transparent font-serif focus:outline-none"
        name=""
        id=""
        cols="30"
        rows="3"
      >
  Erstelle dein eigenes Plakat! Suche dir passende Farben aus, ersetze den Text, skaliere das Fenster zur richtigen Größe und drucke es aus!</textarea
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      colors: ["A3D9FF", "7E6B8F", "96E6B3", "DA3E52", "F2E94E"],
      tl: "A3D9FF",
      br: "DA3E52",
    };
  },
  methods: {
    setTl(color) {
      this.tl = color;
    },
    setBr(color) {
      this.br = color;
    },
    print() {
      window.print();
    },
  },
};
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
}
@media print {
  .print-hidden {
    visibility: hidden;
  }
}
</style>
