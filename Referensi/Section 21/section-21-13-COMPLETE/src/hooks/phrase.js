import { ref, watch } from 'vue'

export const usePhrase = () => {
  const phrase = ref("");
  const reversedPhrase = ref("");
  const num = ref("");

  // watch([phrase], ([newVal], [oldVal]) => {
  //   reversedPhrase.value = phrase.value.split("").reverse().join("");
  // });

  watch(() => {
    reversedPhrase.value = phrase.value.split("").reverse().join("");
  });

  return {
    phrase,
    reversedPhrase,
    num
  }
}