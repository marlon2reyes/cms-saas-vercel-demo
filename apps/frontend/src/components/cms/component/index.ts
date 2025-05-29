// Auto generated dictionary
// @not-modified => When this line is removed, the "force" parameter of the CLI tool is required to overwrite this file
import { type ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";
import WebsiteFooterComponent from "./WebsiteFooter";
import VideoElementComponent from "./VideoElement";
import TextBlockComponent from "./TextBlock";
import TestimonialElementComponent from "./TestimonialElement";
import ShortHeroComponent from "./ShortHero";
import RichTextElementComponent from "./RichTextElement";
import QuoteBlockComponent from "./QuoteBlock";
import PromoHeroComponent from "./PromoHero";
import ParagraphElementComponent from "./ParagraphElement";
import PageSeoSettingsComponent from "./PageSeoSettings";
import OfficeLocationComponent from "./OfficeLocation";
import OdpEmbedBlockComponent from "./OdpEmbedBlock";
import NavigationMenuBlockComponent from "./NavigationMenuBlock";
import MenuNavigationBlockComponent from "./MenuNavigationBlock";
import MegaMenuGroupBlockComponent from "./MegaMenuGroupBlock";
import LayoutSettingsBlockComponent from "./LayoutSettingsBlock";
import ImageElementComponent from "./ImageElement";
import HeroBlockComponent from "./HeroBlock";
import HeadingElementComponent from "./HeadingElement";
import HeaderBlockComponent from "./HeaderBlock";
import DictionaryItemComponent from "./DictionaryItem";
import DictionaryComponent from "./Dictionary";
import ContentRecsElementComponent from "./ContentRecsElement";
import CarouselBlockComponent from "./CarouselBlock";
import CardBlockComponent from "./CardBlock";
import CTAElementComponent from "./CTAElement";
import ButtonBlockComponent from "./ButtonBlock";
import ArticleListElementComponent from "./ArticleListElement";
import ComponentPageFactory from "./Page";

// Prefix entries - if needed
prefixDictionaryEntries(ComponentPageFactory, "Page");

// Build dictionary
export const ComponentFactory : ComponentTypeDictionary = [
    { 
        type: "WebsiteFooter", 
        component: WebsiteFooterComponent 
    },
    { 
        type: "VideoElement", 
        component: VideoElementComponent 
    },
    { 
        type: "TextBlock", 
        component: TextBlockComponent 
    },
    { 
        type: "TestimonialElement", 
        component: TestimonialElementComponent 
    },
    { 
        type: "ShortHero", 
        component: ShortHeroComponent 
    },
    { 
        type: "RichTextElement", 
        component: RichTextElementComponent 
    },
    { 
        type: "QuoteBlock", 
        component: QuoteBlockComponent 
    },
    { 
        type: "PromoHero", 
        component: PromoHeroComponent 
    },
    { 
        type: "ParagraphElement", 
        component: ParagraphElementComponent 
    },
    { 
        type: "PageSeoSettings", 
        component: PageSeoSettingsComponent 
    },
    { 
        type: "OfficeLocation", 
        component: OfficeLocationComponent 
    },
    { 
        type: "OdpEmbedBlock", 
        component: OdpEmbedBlockComponent 
    },
    { 
        type: "NavigationMenuBlock", 
        component: NavigationMenuBlockComponent 
    },
    { 
        type: "MenuNavigationBlock", 
        component: MenuNavigationBlockComponent 
    },
    { 
        type: "MegaMenuGroupBlock", 
        component: MegaMenuGroupBlockComponent 
    },
    { 
        type: "LayoutSettingsBlock", 
        component: LayoutSettingsBlockComponent 
    },
    { 
        type: "ImageElement", 
        component: ImageElementComponent 
    },
    { 
        type: "HeroBlock", 
        component: HeroBlockComponent 
    },
    { 
        type: "HeadingElement", 
        component: HeadingElementComponent 
    },
    { 
        type: "HeaderBlock", 
        component: HeaderBlockComponent 
    },
    { 
        type: "DictionaryItem", 
        component: DictionaryItemComponent 
    },
    { 
        type: "Dictionary", 
        component: DictionaryComponent 
    },
    { 
        type: "ContentRecsElement", 
        component: ContentRecsElementComponent 
    },
    { 
        type: "CarouselBlock", 
        component: CarouselBlockComponent 
    },
    { 
        type: "CardBlock", 
        component: CardBlockComponent 
    },
    { 
        type: "CTAElement", 
        component: CTAElementComponent 
    },
    { 
        type: "ButtonBlock", 
        component: ButtonBlockComponent 
    },
    { 
        type: "ArticleListElement", 
        component: ArticleListElementComponent 
    },
    ...ComponentPageFactory
];

// Export dictionary
export default ComponentFactory;

// Helper functions
function prefixDictionaryEntries(list: ComponentTypeDictionary, prefix: string) : ComponentTypeDictionary
{
    list.forEach((component, idx, dictionary) => {
        dictionary[idx].type = typeof component.type == 'string' ? prefix + "/" + component.type : [ prefix, ...component.type ]
    });
    return list;
}
