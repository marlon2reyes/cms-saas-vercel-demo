import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { EventPageDataFragmentDoc, type EventPageDataFragment } from "@/gql/graphql";
import { getSdk } from "@/gql"

/**
 * Event Page
 * This is a simple page used to create events.
 */
export const EventPagePage : CmsComponent<EventPageDataFragment> = ({ data, children }) => {
    const componentName = 'Event Page'
    const componentInfo = 'This is a simple page used to create events.'
    return <div className="mx-auto px-2 container">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="flex flex-col mt-4 mx-4">{ children }</div>}
    </div>
}
EventPagePage.displayName = "Event Page (Page/EventPage)"
EventPagePage.getDataFragment = () => ['EventPageData', EventPageDataFragmentDoc]
EventPagePage.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default EventPagePage