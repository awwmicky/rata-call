import { PageLayout } from '@/components/layout'
import { RequestData, ResponseData, UrlBarForm } from '@/features'

const App = () => {
  return (
    <PageLayout>
      <UrlBarForm />
      <RequestData />
      <ResponseData />
    </PageLayout>
  )
}

export { App }
