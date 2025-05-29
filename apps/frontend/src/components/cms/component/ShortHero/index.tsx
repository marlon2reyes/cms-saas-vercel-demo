import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { ShortHeroDataFragmentDoc, type ShortHeroDataFragment } from "@/gql/graphql";

/**
 * Short Hero
 * Short Hero that could contains only images
 */
export const ShortHeroComponent : CmsComponent<ShortHeroDataFragment> = ({ data, children }) => {
    const componentName = 'Short Hero'
    const componentInfo = 'Short Hero that could contains only images'
    return <div className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="mt-4 mx-4 flex flex-col">{ children }</div>}
    </div>
}
ShortHeroComponent.displayName = "Short Hero (Component/ShortHero)"
ShortHeroComponent.getDataFragment = () => ['ShortHeroData', ShortHeroDataFragmentDoc]

export default ShortHeroComponent