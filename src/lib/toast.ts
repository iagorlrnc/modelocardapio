import {
  toast,
  type ToastContent,
  type ToastOptions,
  type Id,
} from "react-toastify"

const MAX_VISIBLE_TOASTS = 3
const toastQueue: Id[] = []

type ToastVariant = "success" | "error" | "info" | "warn"

const removeFromQueue = (id: Id) => {
  const index = toastQueue.indexOf(id)
  if (index >= 0) {
    toastQueue.splice(index, 1)
  }
}

const ensureLimit = () => {
  while (toastQueue.length >= MAX_VISIBLE_TOASTS) {
    const oldestId = toastQueue.shift()
    if (oldestId !== undefined) {
      toast.dismiss(oldestId)
    }
  }
}

const showToast = (
  variant: ToastVariant,
  content: ToastContent,
  options?: ToastOptions,
) => {
  ensureLimit()

  let id: Id
  const onClose: ToastOptions["onClose"] = (props) => {
    removeFromQueue(id)
    options?.onClose?.(props)
  }

  switch (variant) {
    case "success":
      id = toast.success(content, { ...options, onClose })
      break
    case "error":
      id = toast.error(content, { ...options, onClose })
      break
    case "info":
      id = toast.info(content, { ...options, onClose })
      break
    case "warn":
      id = toast.warn(content, { ...options, onClose })
      break
    default:
      id = toast(content, { ...options, onClose })
      break
  }

  toastQueue.push(id)
  return id
}

export const appToast = {
  success: (content: ToastContent, options?: ToastOptions) =>
    showToast("success", content, options),
  error: (content: ToastContent, options?: ToastOptions) =>
    showToast("error", content, options),
  info: (content: ToastContent, options?: ToastOptions) =>
    showToast("info", content, options),
  warn: (content: ToastContent, options?: ToastOptions) =>
    showToast("warn", content, options),
}
