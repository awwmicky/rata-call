import { FC } from 'react'
import { ActionIcon, Sx, Tooltip } from '@mantine/core'
import { useClipboard } from '@mantine/hooks'
import { Icon } from '@/components/core'

interface ICopyToClipboardProps {
	copyItem?: string
	sx?: Sx
}

const CopyCode: FC<ICopyToClipboardProps> = ({ copyItem, sx={} }) => {
  const clipboard = useClipboard()

	const label = (clipboard.copied) ? 'Copied' : 'Copy code'
	const color = (clipboard.copied) ? 'teal' : 'grey'
	const IconCliboard = (clipboard.copied) ? <Icon.Copied /> : <Icon.Copy />
	const handleCopy = () => clipboard.copy(copyItem)

	return (
    <Tooltip
      label={ label }
			color={ color }
      offset={ 6 }
			withArrow
      position="left"
      transition="slide-down"
      transitionDuration={ 100 }
			children={
				<ActionIcon
					sx={ sx }
					onClick={ handleCopy }
					children={ IconCliboard }
				/>
			}
    />
  )
}

export { CopyCode }
