import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const scrollY = ref(0)
  const isScrolled = ref(false)

  const handleScroll = () => {
    scrollY.value = window.scrollY
    isScrolled.value = window.scrollY > 50
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    scrollY,
    isScrolled
  }
}

export function useIntersectionObserver(callback, options = {}) {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px',
    ...options
  }

  const observe = (element) => {
    if (!element) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry)
        }
      })
    }, defaultOptions)

    observer.observe(element)

    return () => observer.disconnect()
  }

  return { observe }
}

export function useParallax(speed = 0.5) {
  const offset = ref(0)

  const handleScroll = () => {
    offset.value = window.scrollY * speed
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    offset,
    style: () => ({
      transform: `translateY(${offset.value}px)`
    })
  }
}
