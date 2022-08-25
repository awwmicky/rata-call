import { Icon } from '@iconify/react'

export const DevIcon = () => <img src="" alt="dev-icon" />

DevIcon.Vite = () => <Icon icon="logos:vitejs" />
DevIcon.TypeScript = () => <Icon icon="logos:typescript-icon" />
DevIcon.React = () => <Icon icon="logos:react" />
DevIcon.MantineUI = () => <Icon icon="logos:mantine-icon" />
DevIcon.ReactQuery = () => <Icon icon="logos:react-query-icon" />
DevIcon.Zustand = () => <Icon icon="noto:bear" />

const styleReactRouter = { fontSize: 12 }
DevIcon.ReactRouter = () => <Icon icon="logos:react-router" style={ styleReactRouter } />
const styleReactHookForm = { backgroundColor: '#EC5990', color: '#FFFFFF', padding: 1, borderRadius: 4 }
DevIcon.ReactHookForm = () => <Icon icon="simple-icons:reacthookform" style={ styleReactHookForm } />
