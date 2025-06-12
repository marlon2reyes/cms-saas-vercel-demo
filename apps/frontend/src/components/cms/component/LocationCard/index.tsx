import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { LocationCardDataFragmentDoc, type LocationCardDataFragment } from "@/gql/graphql";

/**
 * Location Card Component
 * 
 */
export const LocationCardComponent : CmsComponent<LocationCardDataFragment> = ({ data, children }) => {

    return <div className="w-full flex justify-center">
        <div className="w-1/2 border rounded-xl p-6 shadow-md backdrop-blur-sm bg-white/70">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="text-gray-700 font-medium">{data.location}</p>
                </div>
                <div className="flex flex-col space-y-2">
                <p className="text-sm text-gray-600">{data.date}</p>
                {data.registrationLink && (
                    <a href={data.registrationLink.default ?? ""}
                        className="text-blue-600 underline text-sm"
                        target={"_self"}
                        rel="noopener noreferrer"
                    >
                        {data.registrationText}
                    </a>
                )}
                </div>
            </div>
        </div>
    </div>
}
LocationCardComponent.displayName = "Location Card Component (Component/LocationCard)"
LocationCardComponent.getDataFragment = () => ['LocationCardData', LocationCardDataFragmentDoc]

export default LocationCardComponent