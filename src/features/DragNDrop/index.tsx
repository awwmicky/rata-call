import { Children, FC, PropsWithChildren, ReactElement } from 'react'
import { closestCenter, DndContext, DragEndEvent } from '@dnd-kit/core'
import { restrictToParentElement } from '@dnd-kit/modifiers'
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { UseFieldArrayMove } from 'react-hook-form'
import { Icon } from '@/components/core'
import { useStyles } from './_.styles'

interface IEntryData {
	id: string | number
	keys: string
	value: string
	show: boolean
	// [key: string]: any
}

interface IDragNDropProps {
	children?: (item: IEntryData, index: number) => ReactElement
	items: IEntryData[]
	reorder: UseFieldArrayMove
}

interface IDnDItemProps extends PropsWithChildren {
	id: string | number
}

/*  */

const DragNDrop: FC<IDragNDropProps> = ({ children, items, reorder }) => {
	const handleDragEnd = ({ active, over }: DragEndEvent) => {
		if (active.id === over?.id) return
		const from = items.findIndex((item) => item.id === active.id)
		const to = items.findIndex((item) => item.id === over?.id) || 0
		reorder(from, to)
	}

	return (
		<DndContext
			onDragEnd={ handleDragEnd }
			collisionDetection={ closestCenter }
			modifiers={ [ restrictToParentElement ] }
			children={ (
				<SortableContext
					items={ items.map(({ id }) => id) }
					strategy={ verticalListSortingStrategy }
					children={ (
						<div data-container="dnd-kit">
							{ Children.toArray(items.map((item, index) => (
								<DnDItem key={ item.id } id={ item.id }>
									{ children?.(item, index) }
								</DnDItem>
							)))}
						</div>
					) }
				/>
			) }
		/>
	)
}

const DnDItem: FC<IDnDItemProps> = ({ children, id }) => {
	const { classes, cx } = useStyles()
	const { attributes, listeners, setNodeRef, transform, transition, isDragging
	} = useSortable({ id })

	const drag3D = CSS.Translate.toString(transform)

	const DragHandler = (
		<div
			{ ...listeners }
			style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
			className={ cx(classes.dragHandle, { [classes.dragActive]: isDragging }) }
		>
			<Icon.Grip />
		</div>
	)

	return (
		<fieldset
			{ ...attributes }
			ref={ setNodeRef }
			style={{ transition, transform: drag3D, marginInline: 0 }}
			className={ cx(classes.container, { [classes.dragContianer]: isDragging }) }
			data-id={ `dnd-item-${ id }` }
			draggable
		>
			{ children }
			{ DragHandler }
		</fieldset>
	)
}

export { DragNDrop }
