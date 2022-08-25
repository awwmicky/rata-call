import { FC } from 'react'
import { ActionIcon, Sx, Tooltip } from '@mantine/core'
import { Icon } from '@/components/core'

interface IResetCodeProps {
	onClick?: () => void
	sx?: Sx
}

const ResetCode: FC<IResetCodeProps> = ({ onClick, sx={} }) => {
	return (
		<Tooltip
			label="Reset code"
			color="gray"
      offset={ 6 }
			withArrow
			position="left"
      transition="slide-down"
      transitionDuration={ 100 }
			children={
				<ActionIcon
					sx={ sx }
					onClick={ onClick }
					children={ <Icon.Remove /> }
				/>
			}
		/>
	)
}

export { ResetCode }
