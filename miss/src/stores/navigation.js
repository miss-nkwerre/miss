import { ref, computed} from 'vue'
import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('Navigation', () => {
  const iconShowing = ref(true)
  const icon= computed(() => iconShowing.value ? 'bars' : 'circle-xmark'  )
 
  function invert() {
    iconShowing.value =!iconShowing.value
  }
  return { iconShowing, icon,invert }
})
