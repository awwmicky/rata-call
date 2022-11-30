import { Icon } from '@iconify/react'

export const DevIcon = () => <img src="" alt="dev-icon" />

DevIcon.Vite = () => <Icon icon="logos:vitejs" width={ 25 } />
DevIcon.TypeScript = () => <Icon icon="logos:typescript-icon" width={ 25 } />
DevIcon.React = () => <Icon icon="logos:react" width={ 25 } />
DevIcon.MantineUI = () => <Icon icon="logos:mantine-icon" width={ 25 } />
DevIcon.ReactQuery = () => <Icon icon="logos:react-query-icon" width={ 25 } />
DevIcon.Zustand = () => <Icon icon="noto:bear" width={ 25 } />

const styleReactRouter = { fontSize: 16 }
DevIcon.ReactRouter = () => <Icon icon="logos:react-router" style={ styleReactRouter } />
const styleReactHookForm = { fontSize: 25, backgroundColor: '#EC5990', color: '#FFFFFF', padding: 1, borderRadius: 4 }
DevIcon.ReactHookForm = () => <Icon icon="simple-icons:reacthookform" style={ styleReactHookForm } />
