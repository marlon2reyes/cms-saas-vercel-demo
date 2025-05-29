import { type CmsComponent, CmsEditable } from '@remkoj/optimizely-cms-react/rsc';
import { ImageElementDataFragmentDoc, type ImageElementDataFragment } from "@/gql/graphql";
import Image from "next/image";

export const ImageMedia : CmsComponent<ImageElementDataFragment> = ({data, contentLink, ctx}) => {
    const alt: string =  ""
    const url : string | null | undefined = ""

    if (!url)
        return null

    return <CmsEditable cmsId={ contentLink.key } as="div" className='relative w-full h-full' ctx={ ctx }>
        <Image fill src={url} alt={alt} className='object-contain' />
    </CmsEditable>
}
ImageMedia.getDataFragment = () => ['ImageMediaComponentData', ImageElementDataFragmentDoc]

export default ImageMedia