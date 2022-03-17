import { useRef } from 'react'

export default function useDebounce(fn: Function, delay: number) {
  const timeoutRef: any = useRef(null)

  function debounceFn(...args: any) {
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      fn(...args)
    }, delay)
  }

  return debounceFn
}
