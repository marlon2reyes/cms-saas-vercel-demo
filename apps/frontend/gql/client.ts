import type * as Schema from "./graphql";
import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export const PageSeoSettingsPropertyDataFragmentDoc = gql`
    fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {
  metaTitle
}
    `;
export const CompositionNodeDataFragmentDoc = gql`
    fragment CompositionNodeData on ICompositionNode {
  name: displayName
  layoutType: nodeType
  type
  key
  template: displayTemplateKey
  settings: displaySettings {
    key
    value
  }
}
    `;
export const LinkDataFragmentDoc = gql`
    fragment LinkData on ContentUrl {
  base
  default
}
    `;
export const IContentInfoFragmentDoc = gql`
    fragment IContentInfo on IContentMetadata {
  key
  locale
  types
  displayName
  version
  url {
    ...LinkData
  }
}
    `;
export const IContentDataFragmentDoc = gql`
    fragment IContentData on _IContent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const BlockDataFragmentDoc = gql`
    fragment BlockData on _IComponent {
  ...IContentData
}
    `;
export const IElementDataFragmentDoc = gql`
    fragment IElementData on _IComponent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const ElementDataFragmentDoc = gql`
    fragment ElementData on _IComponent {
  ...IElementData
}
    `;
export const ArticleListElementDataFragmentDoc = gql`
    fragment ArticleListElementData on ArticleListElement {
  articleListCount
}
    `;
export const ButtonBlockDataFragmentDoc = gql`
    fragment ButtonBlockData on ButtonBlock {
  RichText: text
  link {
    ...LinkData
  }
  className
  buttonType
  variant
}
    `;
export const CTAElementDataFragmentDoc = gql`
    fragment CTAElementData on CTAElement {
  cta_text: Text
  cta_link: Link {
    ...LinkData
  }
}
    `;
export const ButtonBlockPropertyDataFragmentDoc = gql`
    fragment ButtonBlockPropertyData on ButtonBlockProperty {
  text
  link {
    ...LinkData
  }
  className
  buttonType
  variant
}
    `;
export const ReferenceDataFragmentDoc = gql`
    fragment ReferenceData on ContentReference {
  key
  url {
    ...LinkData
  }
}
    `;
export const CardBlockDataFragmentDoc = gql`
    fragment CardBlockData on CardBlock {
  CardHeading
  CardSubheading
  CardDescription {
    json
    html
  }
  CardColor
  CardButton {
    ...ButtonBlockPropertyData
  }
  CardIcon {
    ...ReferenceData
  }
  CardImage {
    ...ReferenceData
  }
  CardImageLayout
}
    `;
export const DictionaryItemPropertyDataFragmentDoc = gql`
    fragment DictionaryItemPropertyData on DictionaryItemProperty {
  DictionaryItemKey
  DictionaryItemValue
}
    `;
export const DictionaryDataFragmentDoc = gql`
    fragment DictionaryData on Dictionary {
  DictionaryItems {
    ...DictionaryItemPropertyData
  }
  DictionaryKey
}
    `;
export const DictionaryItemDataFragmentDoc = gql`
    fragment DictionaryItemData on DictionaryItem {
  DictionaryItemKey
  DictionaryItemValue
}
    `;
export const IContentListItemFragmentDoc = gql`
    fragment IContentListItem on _IContent {
  ...IContentData
}
    `;
export const HeaderBlockDataFragmentDoc = gql`
    fragment HeaderBlockData on HeaderBlock {
  site_logo {
    ...ReferenceData
  }
  site_logo_dark {
    ...ReferenceData
  }
  site_main_navigation {
    ...IContentListItem
  }
  site_utility_navigation {
    ...IContentListItem
  }
}
    `;
export const HeadingElementDataFragmentDoc = gql`
    fragment HeadingElementData on HeadingElement {
  headingText
}
    `;
export const ImageElementDataFragmentDoc = gql`
    fragment ImageElementData on ImageElement {
  altText
  imageLink {
    ...ReferenceData
  }
}
    `;
export const InformationCardDataFragmentDoc = gql`
    fragment InformationCardData on InformationCard {
  date
  location
  registrationLink {
    ...LinkData
  }
}
    `;
export const MegaMenuGroupBlockDataFragmentDoc = gql`
    fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {
  MenuMenuHeading
  MegaMenuUrl {
    ...LinkData
  }
  MegaMenuContentArea {
    ...IContentListItem
  }
}
    `;
export const LinkItemDataFragmentDoc = gql`
    fragment LinkItemData on Link {
  title
  text
  target
  url {
    ...LinkData
  }
}
    `;
export const NavigationMenuBlockDataFragmentDoc = gql`
    fragment NavigationMenuBlockData on NavigationMenuBlock {
  MenuNavigationHeading
  NavigationLinks {
    ...LinkItemData
  }
}
    `;
export const OfficeLocationDataFragmentDoc = gql`
    fragment OfficeLocationData on OfficeLocation {
  OfficeTitle
  OfficeAddressStreet1
  OfficeAddressStreet2
  OfficeAddressCity
  OfficeAddressPostalCode
  OfficeAddressCountry
  OfficePhone
  OfficeEmail
}
    `;
export const PageSeoSettingsDataFragmentDoc = gql`
    fragment PageSeoSettingsData on PageSeoSettings {
  metaTitle
}
    `;
export const ParagraphElementDataFragmentDoc = gql`
    fragment ParagraphElementData on ParagraphElement {
  text {
    json
  }
}
    `;
export const PromoHeroDataFragmentDoc = gql`
    fragment PromoHeroData on PromoHero {
  Title
}
    `;
export const ShortHeroDataFragmentDoc = gql`
    fragment ShortHeroData on ShortHero {
  Title
  Image {
    ...ReferenceData
  }
}
    `;
export const TestimonialElementDataFragmentDoc = gql`
    fragment TestimonialElementData on TestimonialElement {
  customerName
  customerLocation
  customerImage {
    ...ReferenceData
  }
  referenceTitle
  referenceText {
    json
  }
}
    `;
export const NavigationMenuBlockPropertyDataFragmentDoc = gql`
    fragment NavigationMenuBlockPropertyData on NavigationMenuBlockProperty {
  MenuNavigationHeading
  NavigationLinks {
    ...LinkItemData
  }
}
    `;
export const WebsiteFooterDataFragmentDoc = gql`
    fragment WebsiteFooterData on WebsiteFooter {
  FooterMainOfficeLocation {
    ...IContentListItem
  }
  FooterFirstLinkList {
    ...NavigationMenuBlockPropertyData
  }
  FooterSecondLinkList {
    ...NavigationMenuBlockPropertyData
  }
  FooterThirdLinkList {
    ...NavigationMenuBlockPropertyData
  }
  FooterLogo {
    ...ReferenceData
  }
  FooterLogoAltText
  FooterLegalLinks {
    ...LinkItemData
  }
}
    `;
export const BlankSectionDataFragmentDoc = gql`
    fragment BlankSectionData on BlankSection {
  _metadata {
    key
  }
}
    `;
export const CompositionComponentNodeDataFragmentDoc = gql`
    fragment CompositionComponentNodeData on ICompositionComponentNode {
  component {
    ...BlockData
    ...ElementData
    ...ArticleListElementData
    ...ButtonBlockData
    ...CTAElementData
    ...CardBlockData
    ...DictionaryData
    ...DictionaryItemData
    ...HeaderBlockData
    ...HeadingElementData
    ...ImageElementData
    ...InformationCardData
    ...MegaMenuGroupBlockData
    ...NavigationMenuBlockData
    ...OfficeLocationData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...PromoHeroData
    ...ShortHeroData
    ...TestimonialElementData
    ...WebsiteFooterData
    ...BlankSectionData
  }
}
    `;
export const ExperienceDataFragmentDoc = gql`
    fragment ExperienceData on _IExperience {
  composition {
    ...CompositionNodeData
    nodes {
      ...CompositionNodeData
      ... on ICompositionStructureNode {
        nodes {
          ...CompositionNodeData
          ... on ICompositionStructureNode {
            nodes {
              ...CompositionNodeData
              ... on ICompositionStructureNode {
                nodes {
                  ...CompositionNodeData
                  ...CompositionComponentNodeData
                }
              }
            }
          }
        }
      }
      ...CompositionComponentNodeData
    }
  }
}
    `;
export const BlankExperienceDataFragmentDoc = gql`
    fragment BlankExperienceData on BlankExperience {
  SeoSettings {
    ...PageSeoSettingsPropertyData
  }
  ...ExperienceData
}
    `;
export const EventExperienceDataFragmentDoc = gql`
    fragment EventExperienceData on EventExperience {
  SeoSettings {
    ...PageSeoSettingsPropertyData
  }
  ...ExperienceData
}
    `;
export const ArticleGroupPageDataFragmentDoc = gql`
    fragment ArticleGroupPageData on ArticleGroupPage {
  LandingPageSeoSettings {
    ...PageSeoSettingsPropertyData
  }
  articleGroupTitle
  articleGroupIntro {
    json
    html
  }
  MainContent {
    ...BlockData
    ...ArticleListElementData
    ...ButtonBlockData
    ...CTAElementData
    ...CardBlockData
    ...DictionaryData
    ...DictionaryItemData
    ...HeaderBlockData
    ...HeadingElementData
    ...ImageElementData
    ...InformationCardData
    ...MegaMenuGroupBlockData
    ...NavigationMenuBlockData
    ...OfficeLocationData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...PromoHeroData
    ...ShortHeroData
    ...TestimonialElementData
    ...WebsiteFooterData
    ...BlankSectionData
  }
}
    `;
export const ArticlePageDataFragmentDoc = gql`
    fragment ArticlePageData on ArticlePage {
  articleSeoSettings {
    ...PageSeoSettingsPropertyData
  }
  articleHeroImage {
    ...ReferenceData
  }
  articleSummary {
    json
    html
  }
  articleTitle
  articleAuthors
  articleBody {
    json
    html
  }
}
    `;
export const EventPageDataFragmentDoc = gql`
    fragment EventPageData on EventPage {
  Title
}
    `;
export const TestingPageDataFragmentDoc = gql`
    fragment TestingPageData on TestingPage {
  articleSeoSettings {
    ...PageSeoSettingsPropertyData
  }
  articleHeroImage {
    ...ReferenceData
  }
  articleSummary {
    json
    html
  }
  articleTitle
  articleAuthors
  articleBody {
    json
    html
  }
}
    `;
export const SearchDataFragmentDoc = gql`
    fragment SearchData on _IContent {
  ...IContentData
}
    `;
export const PageDataFragmentDoc = gql`
    fragment PageData on _IContent {
  ...IContentData
}
    `;
export const getLocalesDocument = gql`
    query getLocales {
  schema: __schema {
    types {
      kind
      name
      enumValues {
        name
      }
    }
  }
}
    `;
export const searchContentDocument = gql`
    query searchContent($term: String!, $locale: [String!], $withinLocale: [Locales], $types: [String!], $pageSize: Int! = 25, $start: Int! = 0) {
  Content: _Page(
    where: {_fulltext: {match: $term}, _metadata: {url: {base: {exist: true}}}}
    orderBy: {_ranking: SEMANTIC}
    limit: $pageSize
    skip: $start
    locale: $withinLocale
  ) {
    total
    items {
      _score
      ...SearchData
      _metadata {
        published
      }
      preview: _fulltext(
        highlight: {enabled: true, startToken: "<span>", endToken: "</span>"}
      )
    }
    facets {
      _metadata {
        types(filters: $types) {
          name
          count
        }
        locale(filters: $locale) {
          name
          count
        }
      }
    }
  }
}
    ${SearchDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}`;
export const personalizedSearchContentDocument = gql`
    query personalizedSearchContent($term: String!, $topInterest: String, $locale: [String!], $withinLocale: [Locales], $types: [String!], $pageSize: Int! = 25, $start: Int! = 0, $boost: Int! = 100) {
  Content: _Page(
    where: {_or: [{_fulltext: {match: $term}}, {_fulltext: {match: $topInterest, boost: $boost}}], _metadata: {url: {base: {exist: true}}}}
    orderBy: {_ranking: SEMANTIC}
    limit: $pageSize
    skip: $start
    locale: $withinLocale
  ) {
    total
    items {
      _score
      ...SearchData
      _metadata {
        published
      }
      preview: _fulltext(
        highlight: {enabled: true, startToken: "<span>", endToken: "</span>"}
      )
    }
    facets {
      _metadata {
        types(filters: $types) {
          name
          count
        }
        locale(filters: $locale) {
          name
          count
        }
      }
    }
  }
}
    ${SearchDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}`;
export const getContentByIdDocument = gql`
    query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {
  content: _Content(
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items: item {
      ...BlockData
      ...PageData
      ...ArticleListElementData
      ...ButtonBlockData
      ...CTAElementData
      ...CardBlockData
      ...DictionaryData
      ...DictionaryItemData
      ...HeaderBlockData
      ...HeadingElementData
      ...ImageElementData
      ...InformationCardData
      ...MegaMenuGroupBlockData
      ...NavigationMenuBlockData
      ...OfficeLocationData
      ...PageSeoSettingsData
      ...ParagraphElementData
      ...PromoHeroData
      ...ShortHeroData
      ...TestimonialElementData
      ...WebsiteFooterData
      ...BlankSectionData
      ...BlankExperienceData
      ...EventExperienceData
      ...ArticleGroupPageData
      ...ArticlePageData
      ...EventPageData
      ...TestingPageData
    }
  }
}
    ${BlockDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${PageDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CardBlockDataFragmentDoc}
${ButtonBlockPropertyDataFragmentDoc}
${ReferenceDataFragmentDoc}
${DictionaryDataFragmentDoc}
${DictionaryItemPropertyDataFragmentDoc}
${DictionaryItemDataFragmentDoc}
${HeaderBlockDataFragmentDoc}
${IContentListItemFragmentDoc}
${HeadingElementDataFragmentDoc}
${ImageElementDataFragmentDoc}
${InformationCardDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${NavigationMenuBlockDataFragmentDoc}
${LinkItemDataFragmentDoc}
${OfficeLocationDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${PromoHeroDataFragmentDoc}
${ShortHeroDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${WebsiteFooterDataFragmentDoc}
${NavigationMenuBlockPropertyDataFragmentDoc}
${BlankSectionDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionNodeDataFragmentDoc}
${CompositionComponentNodeDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${EventExperienceDataFragmentDoc}
${ArticleGroupPageDataFragmentDoc}
${ArticlePageDataFragmentDoc}
${EventPageDataFragmentDoc}
${TestingPageDataFragmentDoc}`;
export const getContentByPathDocument = gql`
    query getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String) {
  content: _Content(
    where: {_metadata: {url: {default: {in: $path}, base: {eq: $siteId}}}}
    locale: $locale
  ) {
    total
    items: item {
      ...IContentData
      ...PageData
      ...BlankExperienceData
      ...EventExperienceData
      ...ArticleGroupPageData
      ...ArticlePageData
      ...EventPageData
      ...TestingPageData
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${PageDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionNodeDataFragmentDoc}
${CompositionComponentNodeDataFragmentDoc}
${BlockDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CardBlockDataFragmentDoc}
${ButtonBlockPropertyDataFragmentDoc}
${ReferenceDataFragmentDoc}
${DictionaryDataFragmentDoc}
${DictionaryItemPropertyDataFragmentDoc}
${DictionaryItemDataFragmentDoc}
${HeaderBlockDataFragmentDoc}
${IContentListItemFragmentDoc}
${HeadingElementDataFragmentDoc}
${ImageElementDataFragmentDoc}
${InformationCardDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${NavigationMenuBlockDataFragmentDoc}
${LinkItemDataFragmentDoc}
${OfficeLocationDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${PromoHeroDataFragmentDoc}
${ShortHeroDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${WebsiteFooterDataFragmentDoc}
${NavigationMenuBlockPropertyDataFragmentDoc}
${BlankSectionDataFragmentDoc}
${EventExperienceDataFragmentDoc}
${ArticleGroupPageDataFragmentDoc}
${ArticlePageDataFragmentDoc}
${EventPageDataFragmentDoc}
${TestingPageDataFragmentDoc}`;
export const getContentTypeDocument = gql`
    query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {
  content: _Content(
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items: item {
      _metadata {
        types
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getLocales(variables?: Schema.getLocalesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getLocalesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getLocalesQuery>(getLocalesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getLocales', 'query', variables);
    },
    searchContent(variables: Schema.searchContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.searchContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.searchContentQuery>(searchContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'searchContent', 'query', variables);
    },
    personalizedSearchContent(variables: Schema.personalizedSearchContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.personalizedSearchContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.personalizedSearchContentQuery>(personalizedSearchContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'personalizedSearchContent', 'query', variables);
    },
    getContentById(variables: Schema.getContentByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByIdQuery>(getContentByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentById', 'query', variables);
    },
    getContentByPath(variables: Schema.getContentByPathQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentByPathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByPathQuery>(getContentByPathDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentByPath', 'query', variables);
    },
    getContentType(variables: Schema.getContentTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentTypeQuery>(getContentTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentType', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;