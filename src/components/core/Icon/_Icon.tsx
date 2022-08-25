import { CheckboxProps } from '@mantine/core'
import {
	IconCheck,
	IconCodePlus,
	IconCopy,
	IconEyeCheck,
	IconGripVertical,
	IconRefresh,
	IconSend,
	IconTrash,
} from '@tabler/icons'

export const Icon = () => <img src="" alt="icon" />

const IconCheckbox: CheckboxProps['icon'] = (props) => <IconEyeCheck { ...props } />
Icon.Checkbox = (props: any) => <IconCheckbox { ...props } />
Icon.Copied = () => <IconCheck size={ 20 } stroke={ 1.5 } />
Icon.Copy = () => <IconCopy size={ 20 } stroke={ 1.5 } />
Icon.Grip = () => <IconGripVertical size={ 18 } stroke={ 1.5 } />
Icon.Plus = () => <IconCodePlus />
Icon.Refresh = () => <IconRefresh />
Icon.Send = () => <IconSend size={ 16 } />
Icon.Remove = () => <IconTrash size={ 16 } />
