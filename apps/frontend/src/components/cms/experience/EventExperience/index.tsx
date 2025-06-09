import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, CompositionNodeDataFragmentDoc, EventExperienceDataFragmentDoc, type EventExperienceDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * Event Experience
 * This focus on set a experiences for the events.
 */
export const EventExperienceExperience : CmsComponent<EventExperienceDataFragment> = ({ data }) => {
    const composition = getFragmentData(CompositionNodeDataFragmentDoc, getFragmentData(ExperienceDataFragmentDoc, data)?.composition)
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
EventExperienceExperience.displayName = "Event Experience (Experience/EventExperience)"
EventExperienceExperience.getDataFragment = () => ['EventExperienceData', EventExperienceDataFragmentDoc]
EventExperienceExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default EventExperienceExperience