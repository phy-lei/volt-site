import * as fileUpload from '@zag-js/file-upload'
import { normalizeProps, useMachine } from '@zag-js/solid'
import { Index, createMemo, createSignal, createUniqueId } from 'solid-js'
import Button from '@/components/button'

export default function ImgUpload() {
  const [previewUrl, setPreviewUrl] = createSignal<string>('')
  const [state, send] = useMachine(
    fileUpload.machine({
      id: createUniqueId(),
      maxFiles: 1,
      accept: 'image/*',
      onFileChange(details) {
        const reader = new FileReader()
        reader.onload = (event) => {
          const image = event.target.result
          setPreviewUrl(image as string)
        }
        reader.readAsDataURL(details.acceptedFiles[0])
      },
    }),
  )

  const api = createMemo(() => fileUpload.connect(state, send, normalizeProps))

  return (
    <div {...api().rootProps} class="flex items-center">
      <div {...api().dropzoneProps}>
        <input {...api().hiddenInputProps} />
      </div>

      <div classList={{ hidden: api().acceptedFiles.length > 0 }}>
        <Button {...api().triggerProps} class="mr-2">
          <i class="i-carbon:add-filled mr-1" />
          封面
        </Button>
      </div>

      <ul {...api().itemGroupProps} class="h-120px">
        <Index each={api().acceptedFiles}>
          {file => (
            <li
              {...api().getItemProps({ file: file() })}
              class="w-120px h-120px border border-[var(--main-color)] rounded relative flex items-center justify-center"
            >
              <img src={previewUrl()} class="w-100px h-100px" alt="" />
              <i
                class="i-carbon:close cursor-pointer absolute right-1 top-1"
                {...api().getItemDeleteTriggerProps({ file: file() })}
              />
            </li>
          )}
        </Index>
      </ul>
    </div>
  )
}
