import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsAppAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_components_app_advantages';
  info: {
    displayName: 'appAdvantages';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    displayText: Schema.Attribute.String & Schema.Attribute.Required;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.Required;
    Page: Schema.Attribute.Enumeration<
      [
        'Homepage',
        'Projekty',
        'Reference',
        'Spolupr\u00E1ce',
        'Kari\u00E9ra',
        'Kontakty',
        'Blog',
      ]
    > &
      Schema.Attribute.Required;
    Url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsCardWithIcon extends Struct.ComponentSchema {
  collectionName: 'components_components_card_with_icons';
  info: {
    displayName: 'cardWithIcon';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Icon: Schema.Attribute.Enumeration<['rocket', 'arrow', 'shield']>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsCardsList extends Struct.ComponentSchema {
  collectionName: 'components_components_cards_lists';
  info: {
    displayName: 'cardsList';
  };
  attributes: {
    Advantage: Schema.Attribute.Component<'components.card-with-icon', true>;
  };
}

export interface ComponentsCardsWithVideoSection
  extends Struct.ComponentSchema {
  collectionName: 'components_components_cards_with_video_sections';
  info: {
    displayName: 'cardsWithVideoSection';
  };
  attributes: {
    cardsAdvantages: Schema.Attribute.Component<'components.cards-list', false>;
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
    Video: Schema.Attribute.Media<'videos', true>;
  };
}

export interface ComponentsChecks extends Struct.ComponentSchema {
  collectionName: 'components_components_checks';
  info: {
    displayName: 'Checks';
  };
  attributes: {
    checkItem: Schema.Attribute.Component<'components.checks-item', true>;
  };
}

export interface ComponentsChecksItem extends Struct.ComponentSchema {
  collectionName: 'components_components_checks_items';
  info: {
    displayName: 'checksItem';
  };
  attributes: {
    Content: Schema.Attribute.String;
  };
}

export interface ComponentsClaimSection extends Struct.ComponentSchema {
  collectionName: 'components_components_claim_sections';
  info: {
    displayName: 'claimSection';
  };
  attributes: {
    Claim: Schema.Attribute.Text;
    Mission: Schema.Attribute.Component<'components.card-with-icon', true>;
  };
}

export interface ComponentsCompanyInfo extends Struct.ComponentSchema {
  collectionName: 'components_components_company_infos';
  info: {
    displayName: 'companyInfo';
  };
  attributes: {
    companyId: Schema.Attribute.String;
    companyVat: Schema.Attribute.String;
    Name: Schema.Attribute.String;
  };
}

export interface ComponentsFactsSection extends Struct.ComponentSchema {
  collectionName: 'components_components_facts_sections';
  info: {
    displayName: 'factsSection';
  };
  attributes: {};
}

export interface ComponentsFlipCard extends Struct.ComponentSchema {
  collectionName: 'components_components_flip_cards';
  info: {
    displayName: 'flipCard';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Detail: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_components_hero_banners';
  info: {
    displayName: 'heroBanner';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    heroBannerButton: Schema.Attribute.Component<'components.button', false>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsIconCard extends Struct.ComponentSchema {
  collectionName: 'components_components_icon_cards';
  info: {
    displayName: 'iconCard';
  };
  attributes: {
    Icons: Schema.Attribute.Component<'components.icons', false>;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsIcons extends Struct.ComponentSchema {
  collectionName: 'components_components_icons';
  info: {
    displayName: 'icons';
  };
  attributes: {
    Icon: Schema.Attribute.Enumeration<['rocket', 'arrow', 'shield ']>;
  };
}

export interface ComponentsLinkWithIcon extends Struct.ComponentSchema {
  collectionName: 'components_components_link_with_icons';
  info: {
    displayName: 'Link With Icon';
  };
  attributes: {
    Icon: Schema.Attribute.Enumeration<['none', 'arrow', 'info']>;
    Label: Schema.Attribute.String;
    Url: Schema.Attribute.String;
  };
}

export interface ComponentsMobileApp extends Struct.ComponentSchema {
  collectionName: 'components_components_mobile_apps';
  info: {
    displayName: 'mobileApp';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsNumber extends Struct.ComponentSchema {
  collectionName: 'components_components_numbers';
  info: {
    displayName: 'Number';
  };
  attributes: {
    Description: Schema.Attribute.String;
    Number: Schema.Attribute.Blocks;
  };
}

export interface ComponentsNumbersSection extends Struct.ComponentSchema {
  collectionName: 'components_components_numbers_sections';
  info: {
    displayName: 'numbersSection';
  };
  attributes: {
    Number: Schema.Attribute.Component<'components.number', true>;
  };
}

export interface ComponentsQaSection extends Struct.ComponentSchema {
  collectionName: 'components_components_qa_sections';
  info: {
    displayName: 'qaSection';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Question: Schema.Attribute.Component<'components.question', true>;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsQuestion extends Struct.ComponentSchema {
  collectionName: 'components_components_questions';
  info: {
    displayName: 'question';
  };
  attributes: {
    Answer: Schema.Attribute.Blocks;
    Question: Schema.Attribute.String;
  };
}

export interface ComponentsServicesSesction extends Struct.ComponentSchema {
  collectionName: 'components_components_services_sesctions';
  info: {
    displayName: 'servicesSesction';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Service: Schema.Attribute.Component<'components.icon-card', true>;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsSocialMediaLink extends Struct.ComponentSchema {
  collectionName: 'components_components_social_media_links';
  info: {
    displayName: 'Social Media Link';
  };
  attributes: {
    Platform: Schema.Attribute.Enumeration<
      ['facebook', 'instagram', 'linkedin', 'youtube', 'other']
    > &
      Schema.Attribute.Required;
    Url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsStep extends Struct.ComponentSchema {
  collectionName: 'components_components_steps';
  info: {
    displayName: 'step';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Icon: Schema.Attribute.Component<'components.icons', false>;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsStepsBox extends Struct.ComponentSchema {
  collectionName: 'components_components_steps_boxes';
  info: {
    displayName: 'stepsBox';
  };
  attributes: {
    Step: Schema.Attribute.Component<'components.step', true>;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsTextPage extends Struct.ComponentSchema {
  collectionName: 'components_components_text_pages';
  info: {
    displayName: 'textPage';
  };
  attributes: {
    Content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsTimelineBox extends Struct.ComponentSchema {
  collectionName: 'components_components_timeline_boxes';
  info: {
    displayName: 'timelineBox';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    TimelineItem: Schema.Attribute.Component<'components.timeline-item', true>;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsTimelineItem extends Struct.ComponentSchema {
  collectionName: 'components_components_timeline_items';
  info: {
    displayName: 'timelineItem';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Icons: Schema.Attribute.Component<'components.icons', false>;
    Label: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsValuesSection extends Struct.ComponentSchema {
  collectionName: 'components_components_values_sections';
  info: {
    displayName: 'valuesSection';
  };
  attributes: {
    Title: Schema.Attribute.String;
    Value: Schema.Attribute.Component<'components.flip-card', true>;
  };
}

export interface ComponentsVideoSection extends Struct.ComponentSchema {
  collectionName: 'components_components_video_sections';
  info: {
    displayName: 'videoSection';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
    Video: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.app-advantages': ComponentsAppAdvantages;
      'components.button': ComponentsButton;
      'components.card-with-icon': ComponentsCardWithIcon;
      'components.cards-list': ComponentsCardsList;
      'components.cards-with-video-section': ComponentsCardsWithVideoSection;
      'components.checks': ComponentsChecks;
      'components.checks-item': ComponentsChecksItem;
      'components.claim-section': ComponentsClaimSection;
      'components.company-info': ComponentsCompanyInfo;
      'components.facts-section': ComponentsFactsSection;
      'components.flip-card': ComponentsFlipCard;
      'components.hero-banner': ComponentsHeroBanner;
      'components.icon-card': ComponentsIconCard;
      'components.icons': ComponentsIcons;
      'components.link-with-icon': ComponentsLinkWithIcon;
      'components.mobile-app': ComponentsMobileApp;
      'components.number': ComponentsNumber;
      'components.numbers-section': ComponentsNumbersSection;
      'components.qa-section': ComponentsQaSection;
      'components.question': ComponentsQuestion;
      'components.services-sesction': ComponentsServicesSesction;
      'components.social-media-link': ComponentsSocialMediaLink;
      'components.step': ComponentsStep;
      'components.steps-box': ComponentsStepsBox;
      'components.text-page': ComponentsTextPage;
      'components.timeline-box': ComponentsTimelineBox;
      'components.timeline-item': ComponentsTimelineItem;
      'components.values-section': ComponentsValuesSection;
      'components.video-section': ComponentsVideoSection;
    }
  }
}
