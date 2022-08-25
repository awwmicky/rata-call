import React, { FC } from 'react'
import { indentWithTab } from '@codemirror/commands'
import { json } from '@codemirror/lang-json'
import { EditorState, Extension } from '@codemirror/state'
import { EditorView, keymap } from '@codemirror/view'
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror'
import { basicSetup } from 'codemirror'
import { CopyCode } from './CopyCode'
import { ResetCode } from './ResetCode'

interface ICodeMirrorProps extends ReactCodeMirrorProps {
	clipboard?: boolean
	reset?: string
  extensions?: Extension[]
	onChange: React.Dispatch<React.SetStateAction<string>>
}

const theme = EditorView.baseTheme({
  '&': {
    maxHeight: '50vh',
    borderRadius: '0.5em',
    overflow: 'auto'
  },
})

const defaultExtensions = [
  basicSetup,
  theme,
  json(),
  keymap.of([ indentWithTab ]),
  EditorState.tabSize.of(2),
	EditorView.lineWrapping,
]

const styleOptions: React.CSSProperties = {
	position: 'absolute',
	top: 0,
	right: 5,
	zIndex: 1,
	gap: 16,
	display: 'flex',
	flexFlow: 'column',
	// backgroundColor: 'red',
}

const CodeEditor: FC<ICodeMirrorProps> = ({
	clipboard=false,
	reset=undefined,
	extensions=[],
	value,
	onChange,
	...rest
}) => {
	return (
		<div style={{ position: 'relative' }}>
			<div style={ styleOptions }>
				{clipboard && <CopyCode	copyItem={ value } />}
				{reset && <ResetCode onClick={ () => onChange(reset) } />}
			</div>
			<CodeMirror
				{ ...rest }
				value={ value }
				onChange={ onChange }
				extensions={ [
					...defaultExtensions,
					...extensions
				] }
			/>
		</div>
	)
}

export { CodeEditor }
